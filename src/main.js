import { createApp } from 'vue'
import App from './App.vue'
import Router from './routes'

import './assets/css/index.css'

createApp(App)
  .use(Router)
  .mount('#app')
