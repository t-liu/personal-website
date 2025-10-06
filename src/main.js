import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

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


