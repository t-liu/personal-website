<template>
  <div>
    <div class="intro">
      <div class="section wave-container">
        <h2 class="heading-h1">
          <!-- check css for handwave animation -->
          <img 
            :src="`${cloudinaryBaseUrl}/v1760018056/handwave_glnqxh.png`"
            alt="Handwave Icon" 
            class="handwave-img" 
            :class="{ 'wave-animation': isWaving }"
            @mouseover="startWaving"
            @mouseleave="stopWaving"
          />
          Hello There!
        </h2>
        <div class="body-text">
          My name is Thomas. I'm a <strong>software engineer</strong> based in the Washington, DC Metro Area.
          My main work experience has been building <strong>APIs</strong> and infrastructure as code (<strong>IaC</strong>) in a business technology environment. 
          Goal is to get into <strong>cloud computing</strong> and <strong>data engineering</strong>.
          I am always looking for ways to improve my skill sets and learn new, cutting-edge technology. 
          <br/><br/>
          In the meantime, check out my personal website!
        </div>
      </div>
    </div>
    <div class="jokes">
      <div class="section">
        <h2 class="heading-h5">Little Humor Before You Browse</h2>
        <p class="joke-text">{{ joke }}</p>
        <button class="joke-button" @click="fetchJoke" :disabled="loading">
          {{loading ? 'Loading...' : 'Get Another Joke'}}
        </button>
      </div>
    </div>
    <div class="page-content">
      <div id="portfolio" class="category-container">
        <div class="section-title-container">
          <div class="section">
            <h2 class="heading-h1 white">Portfolio</h2>
          </div>
        </div>
        <div class="section">
          <div class="grid-h">
            <div class="grid-cell grid-cell--50-square">
              <h2 class="heading-h5">Cloud Resume Challenge</h2>
              <div class="body-text">
                Build a custom static webpage from the ground up with a NoSQL database, API gateway, custom DNS, HTTP security, and serverless functions written in Python. 
                Package the solution into a serverless application model (SAM) template utilizing Amazon's wide variety of cloud services.<br /><br /><br />‍
                <a :href="resumeUrl" target="_blank">Link to Public Resume</a><br />
                <a href="https://github.com/t-liu/cloud-resume-challenge-backend" target="_blank">GitHub Repo - Backend</a><br />
                <a href="https://github.com/t-liu/cloud-resume-challenge-frontend" target="_blank">GitHub Repo - Frontend</a>
              </div>
            </div>
            <div class="grid-cell grid-cell--50-square">
              <img :src="`${cloudinaryBaseUrl}/v1760018056/resume_qdcqxb.png`" loading="lazy" alt="Cloud Resume Challenge" />
            </div>
          </div>
        </div>
        <div class="section">
          <div class="grid-h">
            <div class="grid-cell grid-cell--50-square">
              <h2 class="heading-h5">Vue.js Migration</h2>
              <div class="body-text">
                Convert a static HTML webpage to a dynamic Vue.js webpage. 
                Utilizing d3.js for data visualization, leaflet for map on frontend.  
                Serverless API and MongoDB Atlas on backend.  
                Simple data pipeline with Apache Airflow and Python.  
                Hosted in AWS.<br /><br /><br />‍
                <a href="https://ccpsdemographics.thomasliu.click" target="_blank">Link to Website</a><br />
                <a href="https://github.com/t-liu/ccpsdemographics-v2-nodejs" target="_blank">GitHub Repo - Backend</a><br />
                <a href="https://github.com/t-liu/ccpsdemographics-v2-vue" target="_blank">GitHub Repo - Frontend</a><br/>
                <a href="https://github.com/t-liu/ccpsdemographics-v2-data-pipeline" target="_blank">GitHub Repo - Data Pipeline</a><br />
              </div>
            </div>
            <div class="grid-cell grid-cell--50-square">
              <img :src="`${cloudinaryBaseUrl}/v1760018056/ccpsdemographics_j9rjcb.png`" loading="lazy" alt="CCPS Demographics Website" />
            </div>
          </div>
        </div>
        <div class="section">
          <div class="grid-h">
            <div class="grid-cell grid-cell--50-square">
              <h2 class="heading-h5">Mulesoft - API</h2>
              <div class="body-text">
                Designed, developed, and deployed an API using Mulesoft Anypoint Platform to get the latest tweets and list of hashtags for a given keyword and n hours from Twitter's API. 
                This project was part of a coding challenge for an interview process with an emerging life science company.<br /><br />
                <a href="https://anypoint.mulesoft.com/exchange/portals/t-liu-production/de48bde8-7e89-4a67-94ff-67481f7b3cd2/twitter-api/" target="_blank">API Documentation</a><br />
                <a href="https://github.com/t-liu/system-level-api-twitter" target="_blank">GitHub Repo</a>
              </div>
            </div>
            <div class="grid-cell grid-cell--50-square">
              <img :src="`${cloudinaryBaseUrl}/v1760018057/mulesoft_azh96d.png`" loading="lazy" alt="Mulesoft API Project" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useJoke } from '../composables/useJoke.js'
import { config } from '../config/env.js'

export default {
  name: 'Home',
  setup() {
    const { joke, loading, error, fetchJoke } = useJoke()
    return { joke, loading, error, fetchJoke }
  },
  data() {
    return {
      isWaving: false,
      cloudinaryBaseUrl: config.cloudinaryBaseUrl,
      resumeUrl: config.resumeUrl
    };
  },
  methods: {
    startWaving() {
      this.isWaving = true;
    },
    stopWaving() {
      this.isWaving = false;
    }
  },
  mounted() {
    this.fetchJoke();
  }
};
</script>

<style scoped>
/* Home component styles are in the main CSS file */
</style>


