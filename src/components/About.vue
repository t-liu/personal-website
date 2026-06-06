<template>
  <div>
    <!-- About Hero Section -->
    <section class="intro intro-about" aria-labelledby="about-heading">
      <div class="section">
        <div class="about-hero">
          <!-- Text Content -->
          <div class="about-hero__content">
            <h1 id="about-heading" class="about-hero__title">About Me</h1>
            <p class="about-bio">
              Want to know more? I'm a University of Maryland alum (Go Terps! 🐢) with over 15 years of software engineering experience in business technology. 
              Throughout my career, I've had the opportunity to build solutions across diverse environments—from Federal Consulting 🏛️ to REITs 🏢 and Big Tech 💻.
            </p>
            
            <h3 class="about-section-heading">Industries & Domains</h3>
            <div class="project-card__tags about-tags">
              <span class="project-card__tag">Federal Consulting</span>
              <span class="project-card__tag">REIT</span>
              <span class="project-card__tag">Startup</span>
              <span class="project-card__tag">HealthTech</span>
              <span class="project-card__tag">Big Tech</span>
            </div>

            <h3 class="about-section-heading">Off-Screen</h3>
            <p class="about-bio about-bio--small">
              When I'm not writing code or architecting solutions, you can usually find me playing basketball 🏀, hanging out with my family 👨‍👩‍👧‍👦, or traveling to new places ✈️.
            </p>
          </div>
          
          <!-- Image Content -->
          <div class="about-hero__image-container">
            <div class="profile-image-wrapper">
              <img 
                :src="`${cloudinaryBaseUrl}/v1760018056/profilePic_y6cz0n.png`" 
                loading="lazy" 
                alt="Thomas Liu Profile Picture" 
                class="profile-image" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <div class="page-content about-page-content">
      <section id="contact" class="section" aria-labelledby="contact-heading">
        <div class="contact-card">
          <div class="contact-card__header">
            <h2 id="contact-heading" class="contact-card__title">Don't be a stranger</h2>
            <p class="contact-card__description">
              Shoot me a message, drop me a DM, holler at your boy. Let me know what sort of project you are working on and if you need someone to help. I am always on the lookout for new opportunities and collaborations with awesome people.
            </p>
          </div>
          
          <div class="contact-card__form">
            <div class="w-form">
              <form @submit.prevent="submitForm" id="email-form" name="email-form">
                <div class="form-group">
                  <input 
                    type="text" 
                    class="form-input w-input" 
                    maxlength="256" 
                    name="name" 
                    placeholder="Name" 
                    aria-label="Name"
                    v-model="form.name"
                    required 
                  />
                </div>
                <div class="form-group">
                  <input 
                    type="email" 
                    class="form-input w-input" 
                    maxlength="256" 
                    name="email" 
                    placeholder="Email" 
                    aria-label="Email"
                    v-model="form.email"
                    required 
                  />
                </div>
                <div class="form-group">
                  <textarea 
                    name="Message" 
                    maxlength="5000" 
                    placeholder="Message" 
                    aria-label="Message"
                    class="form-input form-textarea w-input"
                    v-model="form.message"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  class="project-card__cta contact-submit-btn" 
                  :disabled="formSubmitting"
                >
                  {{ formSubmitting ? 'Sending...' : 'Send Message' }}
                </button>
              </form>
              <div v-if="formSubmitted" class="form-status form-status--success">
                Thank you! Your submission has been received.
              </div>
              <div v-if="formError" class="form-status form-status--error">
                Oops! Something went wrong while submitting the form.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { config } from '../config/env.js'
import { useHead } from '@unhead/vue'

export default {
  name: 'About',
  
  setup() {
    useHead({
      title: 'Thomas Liu — About Me',
      meta: [
        { name: 'description',        content: 'Software engineer based in Washington DC specializing in building enterprise grade APIs and scalable CI/CD pipelines.' },
        { property: 'og:title',       content: 'Thomas Liu — About Me' },
        { property: 'og:description', content: 'Software engineer based in Washington DC.' },
        { property: 'og:url',         content: 'https://thomasliu.click' },
        { property: 'og:type',        content: 'website' },
        { name: 'twitter:card',       content: 'summary_large_image' }
      ],
    })
  },
  data() {
    return {
      cloudinaryBaseUrl: config.cloudinaryBaseUrl,
      formspreeEndpoint: config.formspreeEndpoint,
      form: {
        name: '',
        email: '',
        message: ''
      },
      formSubmitting: false,
      formSubmitted: false,
      formError: false
    }
  },
  methods: {
    async submitForm() {
      this.formSubmitting = true
      this.formError = false
      this.formSubmitted = false

      try {
        const response = await fetch(this.formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.form)
        })

        if (response.ok) {
          this.formSubmitted = true
          this.form = { name: '', email: '', message: '' }
        } else {
          throw new Error('Form submission failed')
        }
      } catch (error) {
        this.formError = true
      } finally {
        this.formSubmitting = false
      }
    }
  }
}
</script>

<style scoped>
/* About component styles are in the main CSS file */
</style>


