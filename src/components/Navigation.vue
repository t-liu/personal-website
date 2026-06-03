<template>
  <div class="nav nav--fixed">
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
      @click="toggleMobileMenu" 
      class="nav-hamburger-btn"
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
          <a :href="resumeUrl" class="nav__item" target="_blank">Résumé</a>
          <a :href="socialLinks.linkedin" target="_blank" class="company__social-links" aria-label="Visit my LinkedIn profile">
            <font-awesome-icon :icon="['fab', 'linkedin']" class="company__social-icons" aria-label="LinkedIn" />
          </a>
          <a :href="socialLinks.twitter" target="_blank" class="company__social-links" aria-label="Visit my Twitter profile">
            <font-awesome-icon :icon="['fab', 'twitter']" class="company__social-icons" aria-label="Twitter" />
          </a>
          <a :href="socialLinks.github" target="_blank" class="company__social-links" aria-label="Visit my GitHub profile">
            <font-awesome-icon :icon="['fab', 'github']" class="company__social-icons" aria-label="GitHub" />
          </a>
          <a :href="socialLinks.email" target="_blank" class="company__social-links" aria-label="Send me an email">
            <font-awesome-icon :icon="['far', 'envelope']" class="company__social-icons email" aria-label="Email"/>
          </a>
          <!-- Desktop-only: toggle sits after social icons in the nav -->
          <div class="toggle-desktop">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThemeToggle from './ThemeToggle.vue'
import { config } from '../config/env.js'

export default {
  name: 'Navigation',
  data() {
    return {
      mobileMenuOpen: false,
      socialLinks: config.socialLinks,
      resumeUrl: config.resumeUrl
    }
  },
  components: { ThemeToggle },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    scrollToPortfolio() {
      // Close mobile menu first
      this.mobileMenuOpen = false
      
      // If we're not on the home page, navigate there first
      if (this.$route.path !== '/') {
        this.$router.push('/').then(() => {
          this.$nextTick(this.performScroll)
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