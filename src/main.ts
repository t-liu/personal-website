import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue/client'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Louie from './components/Louie.vue'
import Connections from './components/Connections.vue'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faLinkedin,
  faTwitter,
  faGithub,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

// Google Analytics typings
declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

// Google Analytics
if (
  import.meta.env.PROD &&
  location.hostname !== 'localhost' &&
  location.hostname !== '127.0.0.1'
) {
  const script = document.createElement('script')

  script.async = true
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-QZENC2QEMM'

  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []

  window.gtag = (...args: unknown[]) => {
    window.dataLayer.push(args)
  }

  window.gtag('js', new Date())
  window.gtag('config', 'G-QZENC2QEMM', {
    send_page_view: false
  })
}

// Font Awesome icons
library.add(
  faLinkedin,
  faTwitter,
  faGithub,
  faInstagram,
  faEnvelope,
  faArrowUpRightFromSquare
)

// Router
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/puppy',
    component: Louie
  },
  {
    path: '/connections',
    component: Connections
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }

    if (savedPosition) {
      return savedPosition
    }

    return { top: 0 }
  }
})

// App
const app = createApp(App)

app.use(createPinia())
app.use(createHead())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')