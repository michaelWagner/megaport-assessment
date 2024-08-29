import App from './App.vue'
import { createApp } from 'vue'
import './style.css'
import router from './router'

const app = createApp(App)
app.use(router).mount('#app')
