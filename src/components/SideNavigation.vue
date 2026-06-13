<template>
  <aside class="side-nav">
    <nav class="side-nav-container" aria-label="Sidebar Navigation">
      
      <router-link
        to="/#portfolio"
        class="btn-primary btn-primary--side-nav w-button"
        :class="{ 'is-active': isHome }"
      >
        Portfolio
      </router-link>

      <router-link
        to="/about"
        class="btn-primary btn-primary--side-nav w-button"
        :class="{ 'is-active': isAbout }"
      >
        About
      </router-link>

      <router-link
        to="/puppy"
        class="btn-primary btn-primary--side-nav w-button"
        :class="{ 'is-active': isPuppy }"
      >
        Puppy
      </router-link>

      <a
        :href="resumeUrl"
        class="btn-primary btn-primary--side-nav w-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Résumé
        <font-awesome-icon
          :icon="['fas', 'arrow-up-right-from-square']"
          class="icon"
        />
      </a>

    </nav>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { config } from '../config/env'

const route = useRoute()

const { resumeUrl } = config

const isHome = computed(() => route.path === '/')
const isAbout = computed(() => route.path === '/about')
const isPuppy = computed(() => route.path === '/puppy')
</script>

<style scoped>
/* Side navigation styles are in the main CSS file */
</style>