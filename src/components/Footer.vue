<template>
  <div>
    <!--
      Sentinel: sits in normal document flow at the page bottom.
      Because .footer-2 is position:fixed it has no height in the DOM,
      so this 1px div marks where the "bottom of the page" actually is.
      When it enters the viewport, the fixed footer slides in.
    -->
    <div ref="sentinel" class="footer-sentinel" aria-hidden="true"></div>

    <footer
      id="footer-info"
      class="footer-2"
      :class="{ 'footer-2--visible': isVisible }"
    >
      <!-- ── your existing footer markup goes here ── -->
      <div class="nav-sub-container-footer">
        <a
          v-for="link in socialLinks"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="company__social-links-footer"
          :aria-label="link.ariaLabel"
        >
          <font-awesome-icon
            :icon="link.icon"
            class="company__social-icons"
          />
        </a>
      </div>
      <div class="footer__bottom-text">
        © {{ currentYear }} Thomas Liu. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { config } from '../config/env'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const currentYear = new Date().getFullYear()
const isVisible = ref(false)
const sentinel = ref<HTMLElement | null>(null)
const observer = ref<IntersectionObserver | null>(null)
const { socialLinks } = config

onMounted(() => {
  if (!sentinel.value) return

  observer.value = new IntersectionObserver(([entry]) => {
    isVisible.value = entry.isIntersecting
  })

  observer.value.observe(sentinel.value)
})

onBeforeUnmount(() => {
  observer.value?.disconnect()
})
</script>

<style scoped>
/*
  The sentinel has no visual presence.
  Height 1px ensures IntersectionObserver can detect it;
  a truly zero-height element can be missed by some browsers.
*/
.footer-sentinel {
  height: 1px;
  pointer-events: none;
}
</style>