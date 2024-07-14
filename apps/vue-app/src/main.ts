import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { routes } from './router'

if (window.__POWERED_BY_WUJIE__) {
  let instance: App<Element>
  window.__WUJIE_MOUNT = () => {
    const router = createRouter({ history: createWebHistory(), routes })
    instance = createApp(App)
    instance.use(router)
    instance.mount('#app')
    window.$router = router
    window.$instance = instance
    window.$wujie?.bus.$emit('addTab', 'vue3', '/')
    router.afterEach((to) => {
      window.$wujie?.bus.$emit('addTab', 'vue3', to.path)
    })
  }
  window.__WUJIE_UNMOUNT = () => {
    instance.unmount()
    delete window.$router
    delete window.$instance
  }
}
else {
  createApp(App).use(createRouter({ history: createWebHistory(), routes })).mount('#app')
}
