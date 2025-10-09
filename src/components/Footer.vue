<template>
  <div id="footer-info" class="footer-2">
    <div class="footer__bottom-text">
      Copyright &copy; {{ new Date().getFullYear() }} · Thomas Liu · All Rights Reserved<br/>
      Made with <a href="https://vuejs.org/" target="_blank" class="link">Vue.js</a>. Hosted on AWS.
    </div>
    <div class="footer__social-icons">
      <a :href="socialLinks.linkedin" target="_blank" class="company__social-links w-inline-block" aria-label="Visit my LinkedIn profile">
        <font-awesome-icon :icon="['fab', 'linkedin']" class="company__social-icons" aria-label="LinkedIn" />
      </a>
      <a :href="socialLinks.twitter" target="_blank" class="company__social-links w-inline-block" aria-label="Visit my Twitter profile">
        <font-awesome-icon :icon="['fab', 'twitter']" class="company__social-icons" aria-label="Twitter" />
      </a>
      <a :href="socialLinks.github" target="_blank" class="company__social-links w-inline-block" aria-label="Visit my GitHub profile">
        <font-awesome-icon :icon="['fab', 'github']" class="company__social-icons" aria-label="GitHub" />
      </a>
      <a :href="socialLinks.email" target="_blank" class="company__social-links w-inline-block" aria-label="Send me an email">
        <font-awesome-icon :icon="['far', 'envelope']" class="company__social-icons email" aria-label="Email"/>
      </a>
    </div>
  </div>
</template>

<script>
import { config } from '../config/env.js'

export default {
  name: 'Footer',
  data() {
    return {
      socialLinks: config.socialLinks
    }
  }
}
</script>

<style scoped>
/* Footer styles are in the main CSS file */
</style>


