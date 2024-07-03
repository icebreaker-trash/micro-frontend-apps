import { createApp } from 'vue'
import './style.css'
import WujieVue from 'wujie-vue3'
import App from './App.vue'

const { bus, setupApp, preloadApp, destroyApp } = WujieVue

createApp(App).use(WujieVue).mount('#app')
