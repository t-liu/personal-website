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
import SideNavigation from './components/SideNavigation.vue'
import Footer from './components/Footer.vue'

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
@import url('./assets/style.css');
</style>


