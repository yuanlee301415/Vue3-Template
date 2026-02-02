import { createPinia } from 'pinia'

export * from './modules'

export function setupStore(app) {
  const store = createPinia()
  app.use(store)
}
