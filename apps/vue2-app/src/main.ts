import Vue from 'vue'
import './style.css'
import { PiniaVuePlugin, createPinia } from 'pinia'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './router'

Vue.use(PiniaVuePlugin)
Vue.config.productionTip = false

const pinia = createPinia()

if (window.__POWERED_BY_WUJIE__) {
  let instance
  window.__WUJIE_MOUNT = () => {
    const router = new VueRouter({ routes })
    instance = new Vue({ router, render: h => h(App), pinia }).$mount('#app')
  }
  window.__WUJIE_UNMOUNT = () => {
    instance.$destroy()
  }
}
else {
  new Vue({ router: new VueRouter({ routes }), render: h => h(App), pinia }).$mount('#app')
}
