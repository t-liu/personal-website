<template>
  <div id="footer-info" class="footer-2">
    <div class="nav-sub-container-footer">
      <a href="https://www.linkedin.com/in/thomas-liu-tech" target="_blank" class="company__social-links-footer w-inline-block">
        <img src="/images/icons/linkedin_white.png" width="24" alt="LinkedIn" class="company__social-icons" />
      </a>
      <a href="https://twitter.com/tliu301" target="_blank" class="company__social-links-footer w-inline-block">
        <img src="/images/icons/twitter_white.png" alt="Twitter" class="company__social-icons" />
      </a>
      <a href="https://github.com/t-liu" target="_blank" class="company__social-links-footer w-inline-block">
        <img src="/images/icons/github_white.png" alt="GitHub" class="company__social-icons" />
      </a>
      <a href="mailto:thomas.s.liu@gmail.com?subject=Hey%20T-Liu%2C%20I%20Found%20You%20on%20the%20Internet" class="company__social-links-footer w-inline-block">
        <img src="/images/icons/email_white.png" alt="Email" class="company__social-icons" />
      </a>
    </div>
    <div class="footer__bottom-text">
      Copyright &copy; {{ new Date().getFullYear() }} · Thomas Liu · All Rights Reserved<br /><br />
      Made with <a href="https://vuejs.org/" target="_blank" class="link">Vue.js</a>. Hosted on AWS.
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


