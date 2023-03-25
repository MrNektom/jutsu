import { createApp } from 'vue'
import App from './App.vue'
import './styles.scss'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
