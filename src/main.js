import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import LazyLoading from 'vue-lazy-loading'

createApp(App)
.use(LazyLoading)
.mount('#app')
