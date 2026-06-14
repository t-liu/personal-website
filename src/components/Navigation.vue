<template>
  <header class="nav nav--fixed">
    <router-link to="/" class="nav__logo nav__logo--text">
      thomas liu
    </router-link>
    <div class="nav__transition-block"></div>
    <div class="nav__transition-block-2"></div>

    <!-- Mobile-only: toggle sits left of the hamburger in the top bar -->
    <div class="toggle-mobile">
      <ThemeToggle />
    </div>

    <div 
      role="button"
      tabindex="0"
      aria-label="Toggle mobile menu"
      aria-controls="mobile-nav"
      :aria-expanded="mobileMenuOpen"
      @click="toggleMobileMenu" 
      @keydown.enter="toggleMobileMenu"
      @keydown.space.prevent="toggleMobileMenu"
      class="nav-hamburger-btn"
      :class="{ 'is-open': mobileMenuOpen }"
    >
      <div class="line-1"></div>
      <div class="line-2"></div>
      <div class="line-3"></div>
    </div>
    <nav id="mobile-nav" class="nav__container" aria-label="Main Navigation" :class="{ 'is-open': mobileMenuOpen }">
      <div class="nav__inner-container">
        <div class="nav__sub-container">
          <a 
            href="#" 
            @click.prevent="scrollToPortfolio" 
            class="nav__item"
            :aria-current="route.path === '/' ? 'page' : undefined"
          >
            Portfolio
          </a>
          <router-link 
            to="/about" 
            class="nav__item"
            :aria-current="route.path === '/about' ? 'page' : undefined"
          >
            About
          </router-link>
          <router-link 
            to="/puppy" 
            class="nav__item"
            :aria-current="route.path === '/puppy' ? 'page' : undefined"
          >
            Puppy
          </router-link>
          <router-link 
            to="/connections" 
            class="nav__item"
            :aria-current="route.path === '/connections' ? 'page' : undefined"
          >
            Connections
          </router-link>
          <a :href="resumeUrl" class="nav__item" target="_blank">Résumé</a>
          <a
            v-for="link in socialLinks"
            :key="link.label"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="company__social-links"
            :aria-label="link.label"
          >
            <font-awesome-icon
              :icon="link.icon"
              class="company__social-icons"
            />
          </a>
          <!-- Desktop-only: toggle sits after social icons in the nav -->
          <div class="toggle-desktop">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'
import { config } from '../config/env'

const mobileMenuOpen = ref(false)

const { socialLinks, resumeUrl } = config

const route = useRoute()
const router = useRouter()

const toggleMobileMenu = (): void => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const performScroll = (): void => {
  const portfolioElement = document.getElementById('portfolio')

  portfolioElement?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

const scrollToPortfolio = async (): Promise<void> => {
  mobileMenuOpen.value = false

  if (route.path !== '/') {
    await router.push('/')
    await nextTick()
    performScroll()
    return
  }

  performScroll()
}

watch(
  () => route.path,
  () => {
    mobileMenuOpen.value = false
  }
)
</script>

<style scoped>
/* Desktop: show the toggle inside the nav panel, hide the outer one */
.toggle-desktop {
  display: inline-flex;
  align-items: center;
}

.toggle-mobile {
  display: none;
}

/* Mobile (≤991px): flip — hide inside panel, show next to hamburger */
@media screen and (max-width: 991px) {
  .toggle-desktop {
    display: none;
  }

  .toggle-mobile {
    display: inline-flex;
    align-items: center;
    /* Sits between logo area and hamburger; give it breathing room */
    margin-left: auto;
    margin-right: 8px;
  }
}
</style>