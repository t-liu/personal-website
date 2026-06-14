<template>
    <div>
        <section class="intro intro-about" aria-labelledby="louie-heading">
            <div class="section">
                <div class="about-hero">

                    <div class="about-hero__content">
                        <h1 id="louie-heading" class="about-hero__title">
                            Meet Louie! 𓃡
                        </h1>

                        <p class="about-bio">
                            Chief Comfort Officer.
                            Retired racing specialist.
                            Professional snack negotiator.
                            Expert in advanced napping techniques.
                            Full-time good boy.
                        </p>

                        <h3 class="about-section-heading">Specialties</h3>

                        <div class="project-card__tags about-tags">
                            <span class="project-card__tag">Naps</span>
                            <span class="project-card__tag">Treats</span>
                            <span class="project-card__tag">That's About It</span>
                        </div>

                        <h3 class="about-section-heading">Fun Facts</h3>
                        <p class="about-bio about-bio--small">
                            Born March 2013 in Florida.  Raced 100+ times.  Won a few.  Retired after 4.5 years.  Rescued by my humans July 2019.
                            <br><br>
                            Since then, I have enjoyed retirement and all the perks that come with it.  
                            Have traveled a bunch around the US mid-atlantic region (New York, Boston, Pittsburgh, Outer Banks, Charleston, etc.)
                            When I'm not on vacation, I'm usually napping on my bed or looking cute so I coerce my humans to give me a treat.
                        </p>
                    </div>

                    <div class="about-hero__image-container">
                        <div class="profile-image-wrapper">
                            <img class="profile-image" :src="heroImage" alt="louie hero image" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="portfolio-header">
                <div class="portfolio-header__line"></div>
                <h2 class="portfolio-header__title">Favorite Moments</h2>
            </div>

            <div class="dog-favorites-grid">
                <div v-for="photo in favorites" :key="photo.publicId" class="favorite-card" @click="openViewer(photo)">
                    <img :src="cloud(photo.publicId, 900)" :alt="photo.title" loading="lazy" />

                    <div class="zoom-indicator" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                </div>
            </div>
        </section>

        <Teleport to="body">
            <div v-if="selected" class="viewer-backdrop" @click="selected = null">
                <div class="viewer-card" @click.stop>

                    <img class="viewer-image" :src="cloud(selected.publicId, 1600)" :alt="selected.title" />

                    <div class="viewer-info">
                        <h3>{{ selected.title }}</h3>
                        <p>{{ selected.caption }}</p>
                    </div>

                    <button class="viewer-close" @click="selected = null">
                        ×
                    </button>

                </div>
            </div>
        </Teleport>

    </div>
</template>

<script setup lang="ts">
    import { ref, watch, onUnmounted } from "vue" // Added watch and onUnmounted
    import { config } from '../config/env'
    import { useHead } from '@unhead/vue'

// -- Type Definitions --
interface Photo {
    publicId: string
    title: string
    caption: string
}

// -- SEO & Head Data --
useHead({
  title: 'Louie Longbottom',
  meta: [
    { name: 'description',        content: 'Retired racing greyhound based in the Washington DC Metro Area.' },
    { property: 'og:title',       content: 'Louie Longbottom - About Me' },
    { property: 'og:description', content: 'Retired racing greyhound based in the Washington DC Metro Area.' },
    { property: 'og:url',         content: 'https://thomasliu.click' },
    { property: 'og:type',        content: 'website' },
    { name: 'twitter:card',       content: 'summary_large_image' }
  ],
})

// -- Static Config Variables --
const { cloudinaryBaseUrl } = config

// -- HERO --
const heroImage =
    `${cloudinaryBaseUrl}/f_auto,q_auto,w_900/v1762003824/dog_ivepuy.jpg`

// -- STATE --
const selected = ref<Photo | null>(null)

// -- HELPERS --
const cloud = (publicId: string, width = 900) =>
    `${cloudinaryBaseUrl}/f_auto,q_auto,w_${width}/${publicId}`

const openViewer = (photo: Photo) => {
    selected.value = photo
}

// -- KEYBOARD ESCAPE HANDLER --
const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
        selected.value = null
    }
}

// Watch the modal state: dynamically bind/unbind global window listener
watch(selected, (isModalOpen) => {
    if (isModalOpen) {
        window.addEventListener('keydown', handleKeyDown)
    } else {
        window.removeEventListener('keydown', handleKeyDown)
    }
})

// Fail-safe cleanup to prevent memory leaks if user navigates away while modal is open
onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown)
})

// -- DATA --
const favorites: Photo[] = [
    {
        publicId: "v1781382269/louie_face_isnecl.png",
        title: "Goofy Face",
        caption: "Feeling cute, might delete later."
    },
    {
        publicId: "v1781382454/louie_roaching_itpjcx.png",
        title: "Days of Roaching",
        caption: "Back in the days when laying on the back was a thing."
    },
    {
        publicId: "v1781382482/louie_pose_mamhaw.png",
        title: "Nice Pose",
        caption: "Looking regal; Showing off the good side."
    },
    {
        publicId: "v1781384325/louie_boop_iq7kxk.png",
        title: "Boop the Snoot",
        caption: "Obligatory must do."
    },
    {
        publicId: "v1781384557/louie_summer_og3xmg.png",
        title: "Dog Days of Summer",
        caption: "A little Vitamin D never hurt anyone."
    },
    {
        publicId: "v1781382374/louie_young_qyvg8o.png",
        title: "Young Louie",
        caption: "Before turning grey was all the rage."
    }
]
</script>

<style scoped>
    /* ===========================
       FAVORITES GRID (Responsive & Balanced)
       =========================== */

    .dog-favorites-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 24px;
        margin-top: 24px;
    }

    .favorite-card {
        position: relative; /* anchors the absolute icon to the card corners */
        border-radius: 16px;
        overflow: hidden;
        cursor: pointer;
        aspect-ratio: 4 / 3; /* Keeps photos uniformly styled in the grid */
        box-shadow:
            0 4px 24px rgba(0, 0, 0, 0.06),
            0 1px 4px rgba(0, 0, 0, 0.04);
    }

    .favorite-card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.4s ease;
    }

        .zoom-indicator {
        position: absolute;
        top: 14px;
        right: 14px;
        width: 34px;
        height: 34px;
        background: rgba(0, 0, 0, 0.45); /* Muted dark pill background */
        backdrop-filter: blur(4px);      /* Modern frosted glass effect */
        -webkit-backdrop-filter: blur(4px);
        color: #ffffff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.75;                   /* Subtly visible by default */
        transform: scale(0.95);
        transition: opacity 0.25s ease, transform 0.25s ease, background-color 0.25s ease;
        pointer-events: none;            /* Critical: clicks pass right through to the card click handler */
    }

    .zoom-indicator svg {
        width: 16px;
        height: 16px;
    }

    .favorite-card:hover img {
        transform: scale(1.03);
    }

    .favorite-card:hover .zoom-indicator {
        opacity: 1;
        transform: scale(1);
        background: rgba(0, 0, 0, 0.65); /* Darkens slightly on hover for extra pop */
    }

    /* ===========================
       VIEWER (Sleek Dark Mode & Isolated Styles)
       =========================== */

    .viewer-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.85); /* Slightly deeper backdrop for immersion */
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    }

    .viewer-card {
        background: #141414; /* Elegant dark card background */
        border-radius: 16px;
        max-width: 900px;
        width: 92vw;
        overflow: hidden;
        position: relative;
        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
    }

    .viewer-image {
        width: 100%;
        max-height: 75vh;
        object-fit: contain; /* Changed to 'contain' so vertical/awkward photos don't get cropped */
        background: #000;    /* Pure black behind the photo frame */
        display: block;
    }

    .viewer-info {
        padding: 20px;
        background: #1c1c1c; /* Distinct, slightly lighter surface for info block */
    }

    .viewer-info h3 {
        color: #ffffff !important; /* Explicitly forces white text override */
        margin: 0 0 6px 0;
        font-size: 1.3rem;
    }

    .viewer-info p {
        color: #a0a0a0 !important; /* Clean, legible muted grey for captions */
        margin: 0;
        font-size: 0.95rem;
    }

    .viewer-close {
        position: absolute;
        top: 16px;
        right: 16px;
        width: 36px;
        height: 36px;
        border: none;
        background: rgba(255, 255, 255, 0.2); /* Translucent pill background */
        color: #ffffff !important;              /* Explicitly forces white '×' symbol */
        font-size: 22px;
        font-weight: 300;
        line-height: 1;
        border-radius: 50%;                     /* Perfectly round button */
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s ease, transform 0.2s ease;
    }

    .viewer-close:hover {
        background: rgba(255, 255, 255, 0.35);
        transform: scale(1.05);
    }
</style>