import { createApp } from 'vue'
import './style.css'
import WujieVue from 'wujie-vue3'
import App from './App.vue'
import router from './router/index.ts'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { WUJIE_MESSAGE_CODE } from "../../../shared/constants/index.ts";

const app = createApp(App)

const { bus } = WujieVue;

bus.$on(WUJIE_MESSAGE_CODE.SUB_ROUTE_CHANGE, (name: string, path: string) => {
  const mainName = `${name}-sub`;
  const mainPath = `/${name}-sub${path}`;
  const currentName = router.currentRoute.value.name;
  const currentPath = router.currentRoute.value.path;
  if (mainName === currentName && mainPath !== currentPath) {
    router.push({ path: mainPath });
  }
});

app.use(WujieVue)
app.use(ElementPlus)
app.use(router)

app.mount('#app')
