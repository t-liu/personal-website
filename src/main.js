import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

// google analytics tag
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
  window.gtag = function () {
    window.dataLayer.push(arguments)
  }

  window.gtag('js', new Date())
  window.gtag('config', 'G-QZENC2QEMM', {
    send_page_view: false
  })
}

// Import Font Awesome core
import { library } from '@fortawesome/fontawesome-svg-core';
// Import the Vue Font Awesome component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// Import specific brand icons (e.g., LinkedIn)
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

library.add(faLinkedin, faTwitter, faGithub, faEnvelope, faArrowUpRightFromSquare);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash, 
        behavior: 'smooth' 
      };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  }
})

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router)
app.mount('#app')


