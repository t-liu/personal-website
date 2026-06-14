<template>
  <div>
    <section class="intro" aria-labelledby="connections-heading">
      <div class="section">
        <h1 id="connections-heading" class="heading-h1">Connections</h1>
        <div class="body-text">
          A showcase of amazing people whom I have the privilege of calling friends. 
          Each card highlights their unique focus, career passion, and digital footprint across the web.
        </div>
      </div>
    </section>

    <div class="page-content">
      <section class="portfolio-section" aria-label="Connections Grid">
        <div class="section">
          <div class="project-grid">
            <div 
              v-for="(item, index) in connections" 
              :key="item.name"
              class="project-card"
              :class="{ 'fade-in-up--visible': visibleCards.has(`card-${index}`) }"
              :ref="setCardRef(index)"
              :data-card-id="`card-${index}`"
            >
              <a 
                :href="item.website" 
                target="_blank" 
                class="project-card__image-wrapper"
              >
                <img
                  :src="item.cloudinaryUrl"
                  :alt="`${item.name} website preview`"
                  width="600"
                  height="338"
                  class="project-card__image"
                  loading="lazy"
                />
                <div class="project-card__overlay">
                  <span class="project-card__overlay-text">Visit Site →</span>
                </div>
              </a>

              <div class="project-card__content">
                <h3 class="project-card__title">{{ item.name }}</h3>
                <p class="project-card__description">{{ item.bio }}</p>
                
                <div class="project-card__actions" style="margin-top: auto;">
                  <a 
                    :href="item.website" 
                    target="_blank" 
                    class="project-card__cta"
                  >Visit Website</a>
                  
                  <div class="project-card__links">
                    <a 
                      v-for="social in item.socials" 
                      :key="social.url" 
                      :href="social.url" 
                      target="_blank" 
                      class="project-card__link"
                      :aria-label="`${item.name} ${social.platform}`"
                    >
                      <font-awesome-icon :icon="['fab', social.icon]" class="project-card__link-icon" />
                      <span>{{ social.label }}</span>
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

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick, type ComponentPublicInstance } from 'vue'
import { config } from '../config/env'
import { useHead } from '@unhead/vue'

// -- Type Specifications --
interface SocialLink {
  platform: string
  label: string
  icon: string   
  url: string
}

interface Connection {
  id: string
  name: string
  bio: string
  website: string
  cloudinaryUrl: string // Tracks the static asset delivery endpoint
  socials: SocialLink[]
}

// -- SEO Metadata Injector --
useHead({
  title: 'Thomas Liu - Connections',
  meta: [
    { name: 'description',        content: 'Friends of T-Liu who are doing big things in life.' },
    { property: 'og:title',       content: 'Thomas Liu - Connections' },
    { property: 'og:description', content: 'Friends of T-Liu who are doing big things in life.' },
    { property: 'og:type',        content: 'website' }
  ],
})

// -- Static Config Variables --
const { cloudinaryBaseUrl } = config

// -- Dynamic Interaction & Animation States --
const visibleCards = ref<Set<string>>(new Set())
const cardRefs = ref<(HTMLElement | null)[]>([])
let observer: IntersectionObserver | null = null

const setCardRef = (index: number) => (el: Element | ComponentPublicInstance | null) => {
  cardRefs.value[index] = el instanceof HTMLElement ? el : null
}
const connections: Connection[] = [
  {
    id: 'smiti-nathan',
    name: 'Dr. Smiti Nathan',
    bio: 'Smiti is one of my oldest friends. She is also one of the smartest, if not the smartest. Having spent a majority of her life in research and archaeology, Dr. Nathan now dedicates her time to story telling and curating content about the past. She also has a kick ass podcast!',
    website: 'https://smitinathan.com',
    cloudinaryUrl: `${cloudinaryBaseUrl}/f_auto,q_auto,w_900/v1781465253/smiti_website_disygq.png`,
    socials: [
      { platform: 'LinkedIn', label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/smiti-nathan' },
      { platform: 'Instagram', label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/travellingarchaeologist' }
    ]
  },
  {
    id: 'rebecca-deprey',
    name: 'Rebecca Deprey',
    bio: 'Becca is a friend of mine from back in school. She also went to University of Maryland, College Park!  She has gone on to become a very, very good full stack software engineer. Nowadays, Becca is building agentic systems and LLM-integrated products at scale.',
    website: 'https://rebeccamdeprey.com',
    cloudinaryUrl: `${cloudinaryBaseUrl}/f_auto,q_auto,w_900/v1781465253/rebecca_website_ulm89w.png`,
    socials: [
      { platform: 'LinkedIn', label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/rebecca-deprey' },
      { platform: 'GitHub', label: 'GitHub', icon: 'github', url: 'https://github.com/rdeprey' }
    ]
  },
  {
    id: 'steven-taylor',
    name: 'Steven Taylor',
    bio: 'Steven Taylor and I used to work for a consulting agency. He was a good system administrator.  He is a much better photographer.  How much better?  Steven Taylor is an award-winning documentary and landscape photographer!  Go check out his studio in Philadelphia.',
    website: 'https://www.ubuntufa.com/',
    cloudinaryUrl: `${cloudinaryBaseUrl}/f_auto,q_auto,w_900/v1781465368/steven_taylor_website_fbrljy.png`,
    socials: [
      { platform: 'Instagram', label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/stevencwtaylor' }
    ]
  }
]

// -- Intersection Scroll Observer Hook Configuration --
const setupScrollObserver = (): void => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          const cardId = target.dataset.cardId
          
          if (cardId) {
            const newSet = new Set(visibleCards.value)
            newSet.add(cardId)
            visibleCards.value = newSet
          }
          observer?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.10 }
  )

  cardRefs.value.forEach((el) => {
    if (el) observer?.observe(el)
  })
}

onMounted(async () => {
  await nextTick()
  setupScrollObserver()
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>