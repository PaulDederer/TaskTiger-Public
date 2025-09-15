import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import SignUp from '../components/SignUp.vue'
import Impressum from '../components/Impressum.vue'
import Datenschutz from '../components/Datenschutz.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: Impressum,
    },
    {
      path: '/datenschutz',
      name: 'datenschutz',
      component: Datenschutz,
    },
  ],
})

export default router
