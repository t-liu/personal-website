<template>
  <div>
    <!--
      Sentinel: sits in normal document flow at the page bottom.
      Because .footer-2 is position:fixed it has no height in the DOM,
      so this 1px div marks where the "bottom of the page" actually is.
      When it enters the viewport, the fixed footer slides in.
    -->
    <div ref="sentinel" class="footer-sentinel" aria-hidden="true"></div>

    <footer
      id="footer-info"
      class="footer-2"
      :class="{ 'footer-2--visible': isVisible }"
    >
      <!-- ── your existing footer markup goes here ── -->
      <div class="nav-sub-container-footer">
        <a
          v-for="link in socialLinks"
          :key="link.label"
          :href="link.url"
          target="_blank"
          class="company__social-links-footer"
          :aria-label="link.label"
        >
          <font-awesome-icon
            :icon="link.icon"
            class="company__social-icons"
          />
        </a>
      </div>
      <div class="footer__bottom-text">
        © {{ new Date().getFullYear() }} Thomas Liu. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',

  data() {
    return {
      isVisible: false,
      observer: null,

      socialLinks: [
        { label: 'LinkedIn', url: 'https://linkedin.com/in/yourhandle', icon: ['fab', 'linkedin'] },
        { label: 'Twitter',  url: 'https://twitter.com/yourhandle',    icon: ['fab', 'twitter'] },
        { label: 'GitHub',   url: 'https://github.com/yourhandle',     icon: ['fab', 'github'] },
        { label: 'Email',    url: 'mailto:you@example.com',            icon: ['far', 'envelope'] },
      ],
    }
  },

  mounted() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        // Show footer when sentinel enters viewport; hide when it leaves
        this.isVisible = entry.isIntersecting
      },
      {
        // Fire as soon as even 1px of the sentinel is visible
        threshold: 0,
      }
    )

    this.observer.observe(this.$refs.sentinel)
  },

  beforeUnmount() {
    // Always clean up to avoid memory leaks
    this.observer?.disconnect()
  },
}
</script>

<style scoped>
/*
  The sentinel has no visual presence.
  Height 1px ensures IntersectionObserver can detect it;
  a truly zero-height element can be missed by some browsers.
*/
.footer-sentinel {
  height: 1px;
  pointer-events: none;
}
</style>