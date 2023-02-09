import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
app.mount('#app')
