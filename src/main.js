import App from './App.vue'
import './style.css'
import router from './router'

const app = Vue.createApp(App)
app.use(router).mount('#app')
