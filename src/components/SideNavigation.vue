<template>
  <aside class="side-nav">
    <nav class="side-nav-container" aria-label="Sidebar Navigation">
      <router-link to="/#portfolio" class="btn-primary btn-primary--side-nav w-button" :class="{ 'is-active': $route.path === '/' }">
        Portfolio
      </router-link>
      <router-link to="/about" class="btn-primary btn-primary--side-nav w-button" :class="{ 'is-active': $route.path === '/about' }">
        About
      </router-link>
      <a :href="resumeUrl" class="btn-primary btn-primary--side-nav w-button" target="_blank">
        Résumé
        <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="icon" alt="New Tab Icon"/>
      </a>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { config } from '../config/env'

const route = useRoute()
const router = useRouter()

const { resumeUrl } = config

const performScroll = (): void => {
  const portfolioElement = document.getElementById('portfolio')

  portfolioElement?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

const scrollToPortfolio = async (): Promise<void> => {
  if (route.path !== '/') {
    await router.push('/')
    performScroll()
    return
  }

  performScroll()
}
</script>

<style scoped>
/* Side navigation styles are in the main CSS file */
</style>


