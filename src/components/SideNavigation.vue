<template>
  <div class="side-nav">
    <div class="side-nav-container">
      <a href="#" @click.prevent="scrollToPortfolio" class="btn-primary btn-primary--side-nav w-button" :class="{ 'w--current': $route.path === '/' }">
        Portfolio
      </a>
      <router-link to="/about" class="btn-primary btn-primary--side-nav w-button" :class="{ 'w--current': $route.path === '/about' }">
        About
      </router-link>
      <a href="https://resume.thomasliu.click" target="_blank" class="btn-primary btn-primary--side-nav w-button">        
        Résumé
        <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="icon" alt="New Tab Icon"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideNavigation',
  methods: {
    scrollToPortfolio() {
      // If we're not on the home page, navigate there first
      if (this.$route.path !== '/') {
        this.$router.push('/')
        // Wait for navigation to complete, then scroll
        this.$nextTick(() => {
          this.performScroll()
        })
      } else {
        // We're already on home page, just scroll
        this.performScroll()
      }
    },
    performScroll() {
      const portfolioElement = document.getElementById('portfolio')
      if (portfolioElement) {
        portfolioElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }
}
</script>

<style scoped>
/* Side navigation styles are in the main CSS file */
</style>


