<template>
  <div class="body-w-menu">
    <Navigation />
    <SideNavigation />
    <main class="page page--w-side-nav">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import { defineAsyncComponent } from 'vue'
const SideNavigation = defineAsyncComponent(() => import('./components/SideNavigation.vue'))
const Footer = defineAsyncComponent(() => import('./components/Footer.vue'))

export default {
  name: 'App',
  components: {
    Navigation,
    SideNavigation,
    Footer
  }
}
</script>

<style>
@import './assets/style.css';
@import './assets/dark-mode.css';
</style>