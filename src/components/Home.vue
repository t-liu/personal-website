<template>
  <div>
    <section class="intro" aria-labelledby="intro-heading">
      <div class="section wave-container">
        <h2 id="intro-heading" class="heading-h1">
          <!-- check css for handwave animation -->
          <img 
            :src="`${cloudinaryBaseUrl}/f_auto,q_auto/v1760018056/handwave_glnqxh.png`"
            alt="Handwave Icon"
            class="handwave-img"
            loading="lazy"
            :class="{ 'wave-animation': isWaving }"
            @mouseover="startWaving"
            @mouseleave="stopWaving"
          />
          
          Hello There!
        </h2>
        <div class="body-text">
          My name is Thomas. I'm a <strong>software engineer</strong> based in the Washington, DC Metro Area.
          My main work experience has been building enterprise grade <strong>APIs</strong> and scalable <strong>CI/CD</strong> pipelines. 
          My current interests are shifting toward <strong>cloud computing</strong>, where I’m focused on understanding end-to-end platform architecture, and <strong>AI engineering</strong>, particularly building agent-based systems and practical intelligent applications.
          I’m always looking for opportunities to deepen my skill set and explore emerging technologies.
          <br/><br/>
          In the meantime, check out my personal website!
        </div>
      </div>
    </section>
    <section class="jokes" aria-labelledby="jokes-heading">
      <div class="section">
        <h2 id="jokes-heading" class="heading-h5">Little Humor Before You Browse</h2>
        <div v-if="loading" class="joke-skeleton">
          <div class="skeleton-line"></div>
          <div class="skeleton-line short"></div>
        </div>
        <p v-else class="joke-text">{{ joke }}</p>
        <button class="joke-button" @click="fetchJoke" :disabled="loading">
          {{loading ? 'Loading...' : 'Get Another Joke'}}
        </button>
      </div>
    </section>
    <div class="page-content">
      <section id="portfolio" class="portfolio-section" aria-labelledby="portfolio-heading">
        <!-- Section header -->
        <div class="section">
          <div class="portfolio-header">
            <div class="portfolio-header__line"></div>
            <h2 id="portfolio-heading" class="portfolio-header__title">Featured Projects</h2>
          </div>
        </div>

        <!-- Featured project (first project) -->
        <div class="section">
          <div 
            class="project-card project-card--featured"
            :class="{ 'fade-in-up--visible': visibleCards.has('featured') }"
            ref="featuredCard"
            data-card-id="featured"
          >
            <a 
              :href="projects[0].links.live" 
              target="_blank" 
              class="project-card__image-wrapper project-card__image-wrapper--featured"
            >
              <img
                :src="`${cloudinaryBaseUrl}/f_auto,q_auto,w_600/${projects[0].image}`"
                :srcset="`
                  ${cloudinaryBaseUrl}/f_auto,q_auto,w_400/${projects[0].image}  400w,
                  ${cloudinaryBaseUrl}/f_auto,q_auto,w_600/${projects[0].image}  600w,
                  ${cloudinaryBaseUrl}/f_auto,q_auto,w_1000/${projects[0].image} 1000w
                `"
                :sizes="projects[0].featured
                  ? '(max-width: 991px) 100vw, 55vw'
                  : '(max-width: 768px) 100vw, 50vw'"
                :alt="projects[0].title"
                width="600"
                height="338"
                class="project-card__image"
                loading="lazy"
              />
              <div class="project-card__overlay">
                <span class="project-card__overlay-text">View Project →</span>
              </div>
            </a>
            <div class="project-card__content">
              <h3 class="project-card__title">{{ projects[0].title }}</h3>
              <p class="project-card__description">{{ projects[0].description }}</p>
              <div class="project-card__meta">
                <div class="project-card__meta-item">
                  <span class="project-card__meta-label">Type</span>
                  <span class="project-card__meta-value">{{ projects[0].type }}</span>
                </div>
                <div class="project-card__meta-divider"></div>
                <div class="project-card__meta-item">
                  <span class="project-card__meta-label">Year</span>
                  <span class="project-card__meta-value">{{ projects[0].year }}</span>
                </div>
              </div>
              <div class="project-card__tags">
                <span 
                  v-for="tag in projects[0].tags" 
                  :key="tag" 
                  class="project-card__tag"
                >{{ tag }}</span>
              </div>
              <div class="project-card__actions">
                <a 
                  :href="projects[0].links.live" 
                  target="_blank" 
                  class="project-card__cta"
                >View Project</a>
                <div class="project-card__links">
                  <a 
                    v-for="repo in projects[0].links.repos" 
                    :key="repo.url" 
                    :href="repo.url" 
                    target="_blank" 
                    class="project-card__link"
                    :aria-label="`GitHub repo: ${repo.label}`"
                  >
                    <font-awesome-icon :icon="['fab', 'github']" class="project-card__link-icon" />
                    <span>{{ repo.label }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Remaining projects grid -->
        <div class="section">
          <div class="project-grid">
            <div 
              v-for="(project, index) in projects.slice(1)" 
              :key="project.title"
              class="project-card"
              :class="{ 'fade-in-up--visible': visibleCards.has(`card-${index}`) }"
              :ref="el => { if (el) projectCardRefs[index] = el }"
              :data-card-id="`card-${index}`"
            >
              <a 
                :href="project.links.live" 
                target="_blank" 
                class="project-card__image-wrapper"
              >
              <img
                :src="`${cloudinaryBaseUrl}/f_auto,q_auto,w_600/${project.image}`"
                :srcset="`
                  ${cloudinaryBaseUrl}/f_auto,q_auto,w_400/${project.image}  400w,
                  ${cloudinaryBaseUrl}/f_auto,q_auto,w_600/${project.image}  600w,
                  ${cloudinaryBaseUrl}/f_auto,q_auto,w_1000/${project.image} 1000w
                `"
                :sizes="project.featured
                  ? '(max-width: 991px) 100vw, 55vw'
                  : '(max-width: 768px) 100vw, 50vw'"
                :alt="project.title"
                width="600"
                height="338"
                class="project-card__image"
                loading="lazy"
              />
                <div class="project-card__overlay">
                  <span class="project-card__overlay-text">View Project →</span>
                </div>
              </a>
              <div class="project-card__content">
                <h3 class="project-card__title">{{ project.title }}</h3>
                <p class="project-card__description">{{ project.description }}</p>
                <div class="project-card__meta">
                  <div class="project-card__meta-item">
                    <span class="project-card__meta-label">Type</span>
                    <span class="project-card__meta-value">{{ project.type }}</span>
                  </div>
                  <div class="project-card__meta-divider"></div>
                  <div class="project-card__meta-item">
                    <span class="project-card__meta-label">Year</span>
                    <span class="project-card__meta-value">{{ project.year }}</span>
                  </div>
                </div>
                <div class="project-card__tags">
                  <span 
                    v-for="tag in project.tags" 
                    :key="tag" 
                    class="project-card__tag"
                  >{{ tag }}</span>
                </div>
                <div class="project-card__actions">
                  <a 
                    :href="project.links.live" 
                    target="_blank" 
                    class="project-card__cta"
                  >View Project</a>
                  <div class="project-card__links">
                    <a 
                      v-for="repo in project.links.repos" 
                      :key="repo.url" 
                      :href="repo.url" 
                      target="_blank" 
                      class="project-card__link"
                      :aria-label="`GitHub repo: ${repo.label}`"
                    >
                      <font-awesome-icon :icon="['fab', 'github']" class="project-card__link-icon" />
                      <span>{{ repo.label }}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { useJoke } from '../composables/useJoke.js'
import { config } from '../config/env.js'
import { useHead } from '@unhead/vue'

export default {
  name: 'Home',
  
  setup() {
    useHead({
      title: 'Thomas Liu — Software Engineer',
      meta: [
        { name: 'description',        content: 'Software engineer based in Washington DC specializing in building enterprise grade APIs and scalable CI/CD pipelines.' },
        { property: 'og:title',       content: 'Thomas Liu — Software Engineer' },
        { property: 'og:description', content: 'Software engineer based in Washington DC.' },
        { property: 'og:url',         content: 'https://thomasliu.click' },
        { property: 'og:type',        content: 'website' },
        { name: 'twitter:card',       content: 'summary_large_image' },
      ],
    })
    const { joke, loading, error, fetchJoke } = useJoke()
    return { joke, loading, error, fetchJoke }
  },
  data() {
    return {
      isWaving: false,
      cloudinaryBaseUrl: config.cloudinaryBaseUrl,
      resumeUrl: config.resumeUrl,
      visibleCards: new Set(),
      observer: null,
      projectCardRefs: {},
      projects: [
        {
          title: 'Cloud Resume Challenge',
          description: 'Full-stack serverless resume site with a NoSQL database, API gateway, custom DNS, HTTP security, and infrastructure as code deployment on AWS.',
          image: 'v1760018056/resume_qdcqxb.png',
          type: 'Personal Project',
          year: '2023',
          tags: ['AWS', 'Python', 'SAM', 'DynamoDB', 'API Gateway', 'CloudFront'],
          featured: true,
          links: {
            live: config.resumeUrl,
            repos: [
              { label: 'Backend', url: 'https://github.com/t-liu/cloud-resume-challenge-backend' },
              { label: 'Frontend', url: 'https://github.com/t-liu/cloud-resume-challenge-frontend' }
            ]
          }
        },
        {
          title: 'Vue.js Migration',
          description: 'Dynamic data visualization app with D3.js charts, Leaflet maps, a serverless API, MongoDB Atlas, and an Apache Airflow data pipeline.',
          image: 'v1760018056/ccpsdemographics_j9rjcb.png',
          type: 'Personal Project',
          year: '2022',
          tags: ['Vue.js', 'D3.js', 'Leaflet', 'MongoDB Atlas', 'Apache Airflow', 'AWS'],
          featured: false,
          links: {
            live: 'https://ccpsdemographics.thomasliu.click',
            repos: [
              { label: 'Backend', url: 'https://github.com/t-liu/ccpsdemographics-v2-nodejs' },
              { label: 'Frontend', url: 'https://github.com/t-liu/ccpsdemographics-v2-vue' },
              { label: 'Data Pipeline', url: 'https://github.com/t-liu/ccpsdemographics-v2-data-pipeline' }
            ]
          }
        },
        {
          title: 'Mulesoft — Twitter API',
          description: 'RESTful API built on Mulesoft Anypoint Platform to retrieve real-time tweets and trending hashtags for a given keyword.',
          image: 'v1760018057/mulesoft_azh96d.png',
          type: 'Coding Challenge',
          year: '2021',
          tags: ['Mulesoft', 'REST API', 'Anypoint Platform', 'Integration'],
          featured: false,
          links: {
            live: 'https://anypoint.mulesoft.com/exchange/portals/t-liu-production/de48bde8-7e89-4a67-94ff-67481f7b3cd2/twitter-api/',
            repos: [
              { label: 'Source Code', url: 'https://github.com/t-liu/system-level-api-twitter' }
            ]
          }
        }
      ]
    };
  },
  methods: {
    startWaving() {
      this.isWaving = true;
    },
    stopWaving() {
      this.isWaving = false;
    },
    setupScrollObserver() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const cardId = entry.target.dataset.cardId;
              // Use a new Set to trigger reactivity
              const newSet = new Set(this.visibleCards);
              newSet.add(cardId);
              this.visibleCards = newSet;
              this.observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      // Observe featured card
      if (this.$refs.featuredCard) {
        this.observer.observe(this.$refs.featuredCard);
      }

      // Observe remaining project cards
      Object.values(this.projectCardRefs).forEach((el) => {
        if (el) this.observer.observe(el);
      });
    }
  },
  mounted() {
    this.fetchJoke();
    this.$nextTick(() => {
      this.setupScrollObserver();
    });
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
};
</script>

<style scoped>
/* Home component styles are in the main CSS file */
</style>
