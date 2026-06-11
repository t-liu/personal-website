<template>
  <div class="body-w-menu">
    <Navigation />
    <SideNavigation />
    <main id="main-content" class="page page--w-side-nav">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import Navigation from './components/Navigation.vue'

const SideNavigation = defineAsyncComponent(
  () => import('./components/SideNavigation.vue')
)

const Footer = defineAsyncComponent(
  () => import('./components/Footer.vue')
)
</script>

<style>
@import './assets/style.css';
@import './assets/dark-mode.css';
</style>