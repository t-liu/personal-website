<template>
  <div id="footer-info" class="footer-2">
    <div class="footer__bottom-text">
      Copyright &copy; {{ new Date().getFullYear() }} · Thomas Liu · All Rights Reserved<br/>
      Made with <a href="https://vuejs.org/" target="_blank" class="link">Vue.js</a>. Hosted on AWS.
    </div>
    <div class="footer__social-icons">
      <a href="https://www.linkedin.com/in/thomas-liu-tech" target="_blank" class="company__social-links w-inline-block" aria-label="Visit my LinkedIn profile">
        <font-awesome-icon :icon="['fab', 'linkedin']" class="company__social-icons" aria-label="LinkedIn" />
      </a>
      <a href="https://twitter.com/tliu301" target="_blank" class="company__social-links w-inline-block" aria-label="Visit my Twitter profile">
        <font-awesome-icon :icon="['fab', 'twitter']" class="company__social-icons" aria-label="Twitter" />
      </a>
      <a href="https://github.com/t-liu" target="_blank" class="company__social-links w-inline-block" aria-label="Visit my GitHub profile">
        <font-awesome-icon :icon="['fab', 'github']" class="company__social-icons" aria-label="GitHub" />
      </a>
      <a href="mailto:thomas.s.liu@gmail.com?subject=Hey%20T-Liu%2C%20I%20Found%20You%20on%20the%20Internet" class="company__social-links w-inline-block" aria-label="Send me an email">
        <font-awesome-icon :icon="['far', 'envelope']" class="company__social-icons" aria-label="Email"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
/* Footer styles are in the main CSS file */
</style>


