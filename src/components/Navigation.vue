<template>
  <div class="nav nav--fixed">
    <router-link to="/" class="nav__logo w-inline-block"></router-link>
    <div class="nav__transition-block w-hidden-main"></div>
    <div class="nav__transition-block-2 w-hidden-main"></div>
    <div 
      @click="toggleMobileMenu" 
      class="nav-hamburger-btn w-hidden-main"
      :class="{ 'w--open': mobileMenuOpen }"
    >
      <div class="line-1"></div>
      <div class="line-2"></div>
      <div class="line-3"></div>
    </div>
    <div class="nav__container" :class="{ 'w--open': mobileMenuOpen }">
      <div class="nav__inner-container">
        <div class="nav__sub-container">
          <a href="#" @click.prevent="scrollToPortfolio" class="nav__item">Portfolio</a>
          <router-link to="/about" class="nav__item">About</router-link>
          <a href="https://resume.thomasliu.click" class="nav__item" target="_blank">Résumé</a>
          <a href="https://www.linkedin.com/in/thomas-liu-tech" target="_blank" class="company__social-links w-inline-block">
            <img src="/images/icons/linkedin.png" class="company__social-icons" alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/tliu301" target="_blank" class="company__social-links w-inline-block">
            <img src="/images/icons/twitter.png" class="company__social-icons" alt="Twitter" />
          </a>
          <a href="https://github.com/t-liu" target="_blank" class="company__social-links w-inline-block">
            <img src="/images/icons/github.png" class="company__social-icons" alt="GitHub" />
          </a>
          <a href="mailto:thomas.s.liu@gmail.com?subject=Hey%20T-Liu%2C%20I%20Found%20You%20on%20the%20Internet" class="company__social-links w-inline-block">
            <img src="/images/icons/mail.png" class="company__social-icons" alt="Email" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    scrollToPortfolio() {
      // Close mobile menu first
      this.mobileMenuOpen = false
      
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
  },
  watch: {
    '$route'() {
      // Close mobile menu when route changes
      this.mobileMenuOpen = false
    }
  }
}
</script>

<style scoped>
/* Navigation specific styles are in the main CSS file */
</style>


