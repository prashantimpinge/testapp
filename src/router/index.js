import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import LearnMorePage from '../views/LearnMorePage.vue'
import GetStartedPage from '../views/GetStartedPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/learn-more',
    name: 'LearnMorePage',
    component: LearnMorePage,
  },
  {
    path: '/getstarted',
    name: 'GetStartedPage',
    component: GetStartedPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
