<template>
  <div>
    <div class="intro intro-about">
      <div class="section">
        <div class="grid-h">
          <div class="grid-cell grid-cell--50-square grid-cell--text">
            <h2 class="heading-h5">About Me</h2>
            <div class="body-text--16">
              <ul>
                <li>Studied at University of Maryland, College Park (Go Terps!)</li>
                <li>Over fifteen years in business technology domain</li>
                <li>Federal Consulting, REIT, Big Tech</li>
                <li>Current position: Senior Software Engineer</li>
                <li>Enjoy basketball, hanging out with family, and traveling</li>
              </ul>
            </div>
          </div>
          <div class="grid-cell grid-cell--50-square grid-cell--text">
            <img src="/images/profilePic.png" loading="lazy" width="500" alt="Profile Pic" class="image-3" />
          </div>
        </div>
      </div>
    </div>
    <div class="page-content">
      <div id="contact" class="category-container">
        <div class="section">
          <h2 class="heading">Don't be a stranger</h2>
          <p class="paragraph">Shoot me a message, drop me a DM, holler at your boy. Let me know what sort of project you are working on and if you need someone to help. I am always on the lookout for new opportunities and collaborations with awesome people.</p>
          <div class="form--container w-container">
            <div class="w-form">
              <form @submit.prevent="submitForm" id="email-form" name="email-form" data-name="Email Form">
                <input 
                  type="text" 
                  class="text-field-4 w-input" 
                  maxlength="256" 
                  name="name" 
                  data-name="Name" 
                  placeholder="Name" 
                  id="name" 
                  v-model="form.name"
                  required 
                />
                <input 
                  type="email" 
                  class="text-field-3 w-input" 
                  maxlength="256" 
                  name="email" 
                  data-name="Email" 
                  placeholder="Email" 
                  id="email" 
                  v-model="form.email"
                  required 
                />
                <textarea 
                  id="Message" 
                  name="Message" 
                  maxlength="5000" 
                  data-name="field" 
                  placeholder="Message" 
                  class="textarea w-input"
                  v-model="form.message"
                ></textarea>
                <input 
                  type="submit" 
                  :value="formSubmitting ? 'Sending...' : 'Send'" 
                  class="btn-primary btn-primary--active--nav btn-primary--active--white w-button" 
                  :disabled="formSubmitting"
                />
              </form>
              <div v-if="formSubmitted" class="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div v-if="formError" class="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
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
        const response = await fetch('https://formspree.io/f/mldwoogl', {
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


