import Vue from 'vue'
import type { RouteConfig } from 'vue-router'
import VueRouter from 'vue-router'

import Index from './pages/index.vue'
import Bar from './pages/bar.vue'
import Foo from './pages/foo.vue'

export const routes: RouteConfig[] = [
  { path: '/', component: Index },
  { path: '/foo', component: Foo },
  { path: '/Bar', component: Bar },
]

Vue.use(VueRouter)

export const subAppLocation = window.__POWERED_BY_WUJIE__ ? window.$wujie.location : window.location
