import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './scss/main.scss'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/index'
import { Bar } from 'vue-chartjs/legacy'
import VueGeolocation from 'vue-browser-geolocation'
import 'normalize.css'
import VueScrollReveal from 'vue-scroll-reveal'
import AOS from 'aos'
import 'aos/dist/aos.css'


Vue.use(VueScrollReveal)


Vue.use(Bar)



Vue.config.productionTip = false

Vue.use(VueGeolocation)

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
   load: {
    key:'AIzaSyDarBMgef8D5SjXPXwjq_T9J7YTVP6tCuk'
   },
})

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    AOS.init()
  },
  
}).$mount('#app')


