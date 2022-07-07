import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NewsView from '../views/NewsView.vue'
import ContactusView from '../views/ContactusView.vue'
import Subnewsviews from '../views/SubNewsView.vue'
import MarketingView from '../views/MarketingView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/contactus',
    name: 'contactus',
    component: ContactusView
  },
  {
    path: '/subnewsviews',
    name: 'subnewsviews',
    component: Subnewsviews
  },
  {
    path: '/marketingview',
    name: 'marketingview',
    component: MarketingView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
