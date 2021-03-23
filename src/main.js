import { createApp } from 'vue'
import App from './App.vue'
import { store } from "./store"
import { formatPrice } from "./filters"
const app = createApp(App);
app.config.globalProperties.$filters = {
    formatPrice
}
app.use(store)
app.mount('#app')
// createApp(App).mount('#app')
