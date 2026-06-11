<template>
  <button
    class="theme-toggle"
    :class="{ 'theme-toggle--dark': isDark }"
    @click="toggle"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <!-- Sky portal backdrop -->
    <span class="theme-toggle__sky">
      <span class="theme-toggle__clouds">
        <span class="cloud cloud--1"></span>
        <span class="cloud cloud--2"></span>
      </span>
      <span class="theme-toggle__stars-field">
        <span v-for="i in 6" :key="i" class="star-dot" :style="`--i: ${i}`"></span>
      </span>
    </span>

    <!-- Sun -->
    <span class="theme-toggle__sun" aria-hidden="true">
      <span class="sun-core"></span>
      <span class="sun-rays">
        <span v-for="i in 8" :key="i" class="ray" :style="`--i: ${i}`"></span>
      </span>
    </span>

    <!-- Moon -->
    <span class="theme-toggle__moon" aria-hidden="true">
      <span class="moon-body"></span>
      <span class="moon-sparkles">
        <span class="sparkle sparkle--1">✦</span>
        <span class="sparkle sparkle--2">✦</span>
        <span class="sparkle sparkle--3">✧</span>
      </span>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useThemeStore } from '../stores/theme'

const theme = useThemeStore()

onMounted(() => {
  theme.init()
})

const isDark = computed(() => theme.isDark)

const toggle = (): void => {
  theme.toggle()
}
</script>

<style scoped>
/* -------------------------------------------------- *
 * Toggle button shell                                *
 * -------------------------------------------------- */
.theme-toggle {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  overflow: hidden;
  flex-shrink: 0;

  /* Match the 20px left margin the social link anchors use */
  margin-left: 16px;

  background: linear-gradient(145deg, #fde68a, #fbbf24);
  box-shadow:
    0 2px 6px rgba(251, 191, 36, 0.45),
    0 0 0 2px rgba(251, 191, 36, 0.15);

  transition:
    background 0.55s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.55s ease,
    transform 0.2s ease;
}

.theme-toggle:hover {
  transform: scale(1.12) rotate(-8deg);
}

.theme-toggle:active {
  transform: scale(0.95);
}

.theme-toggle:focus-visible {
  outline: 3px solid #fc464e;
  outline-offset: 3px;
}

/* Dark state */
.theme-toggle--dark {
  background: linear-gradient(145deg, #1e1b4b, #312e81);
  box-shadow:
    0 2px 10px rgba(99, 102, 241, 0.4),
    0 0 0 2px rgba(99, 102, 241, 0.15);
}

/* -------------------------------------------------- *
 * Sky backdrop (clouds / stars)                      *
 * -------------------------------------------------- */
.theme-toggle__sky {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  overflow: hidden;
  pointer-events: none;
}

/* Clouds — visible in light mode */
.theme-toggle__clouds {
  position: absolute;
  inset: 0;
  opacity: 1;
  transition: opacity 0.4s ease;
}

.theme-toggle--dark .theme-toggle__clouds {
  opacity: 0;
}

.cloud {
  position: absolute;
  background: rgba(255, 255, 255, 0.65);
  border-radius: 50px;
}

.cloud--1 {
  width: 13px;
  height: 5px;
  bottom: 6px;
  left: 2px;
  animation: cloudDrift 4s ease-in-out infinite;
}

.cloud--2 {
  width: 8px;
  height: 4px;
  bottom: 11px;
  right: 4px;
  animation: cloudDrift 5.5s ease-in-out infinite reverse;
}

@keyframes cloudDrift {
  0%, 100% { transform: translateX(0); }
  50%       { transform: translateX(2px); }
}

/* Stars field — visible in dark mode */
.theme-toggle__stars-field {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.5s ease 0.1s;
}

.theme-toggle--dark .theme-toggle__stars-field {
  opacity: 1;
}

.star-dot {
  position: absolute;
  width: 2px;
  height: 2px;
  background: #fff;
  border-radius: 50%;
  animation: twinkle 2s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.33s);
}

/* Percentages are unchanged — they scale with the element */
.star-dot:nth-child(1) { top: 20%; left: 12%; }
.star-dot:nth-child(2) { top: 35%; right: 14%; }
.star-dot:nth-child(3) { top: 62%; left: 22%; }
.star-dot:nth-child(4) { top: 70%; right: 20%; }
.star-dot:nth-child(5) { top: 15%; left: 50%; }
.star-dot:nth-child(6) { top: 80%; left: 44%; }

@keyframes twinkle {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50%       { opacity: 1;   transform: scale(1.8); }
}

/* -------------------------------------------------- *
 * Sun                                                *
 * -------------------------------------------------- */
.theme-toggle__sun {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: 1;
  transform: scale(1) rotate(0deg);
  transition:
    opacity 0.35s ease,
    transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}

.theme-toggle--dark .theme-toggle__sun {
  opacity: 0;
  transform: scale(0.4) rotate(90deg);
}

.sun-core {
  position: relative;
  z-index: 2;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #fff9c4, #f59e0b);
  box-shadow: 0 0 5px 2px rgba(245, 158, 11, 0.5);
  animation: sunPulse 3s ease-in-out infinite;
}

@keyframes sunPulse {
  0%, 100% { box-shadow: 0 0 5px 2px rgba(245, 158, 11, 0.5); }
  50%       { box-shadow: 0 0 9px 3px rgba(245, 158, 11, 0.75); }
}

.sun-rays {
  position: absolute;
  inset: 0;
  animation: spinRays 10s linear infinite;
}

@keyframes spinRays {
  to { transform: rotate(360deg); }
}

.ray {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2px;
  height: 4px;
  margin-left: -1px;
  background: linear-gradient(to bottom, #fbbf24, transparent);
  border-radius: 2px;
  transform-origin: center 10px;
  transform: rotate(calc(var(--i) * 45deg)) translateY(-10px);
  opacity: 0.85;
}

/* -------------------------------------------------- *
 * Moon                                               *
 * -------------------------------------------------- */
.theme-toggle__moon {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: scale(0.4) rotate(-90deg);
  transition:
    opacity 0.35s ease 0.1s,
    transform 0.45s cubic-bezier(0.4, 0, 0.2, 1) 0.05s;
}

.theme-toggle--dark .theme-toggle__moon {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

.moon-body {
  position: relative;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e0e7ff, #c7d2fe);
  box-shadow:
    inset -2.5px -1.5px 0 1.5px #6366f1,
    0 0 6px 2px rgba(199, 210, 254, 0.3);
  clip-path: circle(50%);
  animation: moonGlow 4s ease-in-out infinite;
}

@keyframes moonGlow {
  0%, 100% { box-shadow: inset -2.5px -1.5px 0 1.5px #6366f1, 0 0 5px 2px rgba(199, 210, 254, 0.25); }
  50%       { box-shadow: inset -2.5px -1.5px 0 1.5px #6366f1, 0 0 11px 4px rgba(199, 210, 254, 0.55); }
}

.moon-sparkles {
  position: absolute;
  inset: 0;
}

.sparkle {
  position: absolute;
  color: #e0e7ff;
  line-height: 1;
  animation: sparklePop 2.5s ease-in-out infinite;
}

.sparkle--1 {
  top: 5px;
  right: 5px;
  font-size: 6px;
  animation-delay: 0s;
}

.sparkle--2 {
  bottom: 6px;
  right: 6px;
  font-size: 5px;
  animation-delay: 0.8s;
}

.sparkle--3 {
  top: 7px;
  left: 5px;
  font-size: 4px;
  animation-delay: 1.5s;
}

@keyframes sparklePop {
  0%, 100% { opacity: 0.2; transform: scale(0.8); }
  50%       { opacity: 1;   transform: scale(1.3) rotate(20deg); }
}
</style>