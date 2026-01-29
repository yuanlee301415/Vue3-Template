import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import './assets/main.css'

void bootstrap()

async function bootstrap() {
  const app = createApp(App)
  await setupRouter(app)
  app.mount('#app')
}
