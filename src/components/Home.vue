<template>
  <div>
    <div class="intro">
      <div class="section">
        <h2 class="heading-h1">
          <img src="/images/icons/handwave.png" alt="Handwave Icon" class="icon">
          Hello There!
        </h2>
        <div class="body-text--16">
          My name is Thomas. I'm an <strong>aspiring software engineer</strong> that is constantly improving on current skill sets and learning new, cutting-edge technology. 
          My main work experience has been building <strong>APIs</strong> and infrastructure as code (<strong>IaC</strong>) in an enterprise environment. 
          Goal is to get into <strong>cloud computing</strong> and <strong>data engineering</strong>.
        </div>
      </div>
    </div>
    <div class="page-content">
      <div id="portfolio" class="category-container">
        <div class="section-title-container">
          <div class="section">
            <h2 class="heading-h1 white no-margin">Portfolio</h2>
          </div>
        </div>
        <div class="section">
          <div class="grid-h">
            <div class="grid-cell grid-cell--50-square">
              <h2 class="heading-h5">Cloud Resume Challenge</h2>
              <div class="body-text--16">
                Build a custom static webpage from the ground up with a NoSQL database, API gateway, custom DNS, HTTP security, and serverless functions written in Python. 
                Package the solution into a serverless application model (SAM) template utilizing Amazon's wide variety of cloud services.<br /><br /><br />‍
                <a href="https://resume.thomasliu.click" target="_blank">Link to Public Resume</a><br />
                <a href="https://github.com/t-liu/cloud-resume-challenge-backend" target="_blank">GitHub Repo - Backend</a><br />
                <a href="https://github.com/t-liu/cloud-resume-challenge-frontend" target="_blank">GitHub Repo - Frontend</a>
              </div>
            </div>
            <div class="grid-cell grid-cell--50-square">
              <img src="/images/resume.png" loading="lazy" alt="Cloud Resume Challenge" />
            </div>
          </div>
        </div>
        <div class="section">
          <div class="grid-h">
            <div class="grid-cell grid-cell--50-square">
              <h2 class="heading-h5">Vue.js Migration</h2>
              <div class="body-text--16">
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
              <img src="/images/ccpsdemographics.png" loading="lazy" alt="CCPS Demographics Project" />
            </div>
          </div>
        </div>
        <div class="section">
          <div class="grid-h">
            <div class="grid-cell grid-cell--50-square">
              <h2 class="heading-h5">Mulesoft - API</h2>
              <div class="body-text--16">
                Designed, developed, and deployed an API using Mulesoft Anypoint Platform to get the latest tweets and list of hashtags for a given keyword and n hours from Twitter's API. 
                This project was part of a coding challenge for an interview process with an emerging life science company.<br /><br />
                <a href="https://anypoint.mulesoft.com/exchange/portals/t-liu-production/de48bde8-7e89-4a67-94ff-67481f7b3cd2/twitter-api/" target="_blank">API Documentation</a><br />
                <a href="https://github.com/t-liu/system-level-api-twitter" target="_blank">GitHub Repo</a>
              </div>
            </div>
            <div class="grid-cell grid-cell--50-square">
              <img src="/images/mulesoft.png" loading="lazy" alt="Mulesoft API Project" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
/* Home component styles are in the main CSS file */
</style>


