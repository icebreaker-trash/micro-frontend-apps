import { createApp } from 'vue'
import './style.css'
import WujieVue from 'wujie-vue3'
import App from './App.vue'
import router from './router/index.ts'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

const { bus } = WujieVue;

bus.$on("sub-route-change", (name: string, path: string) => {
  const mainName = `${name}-sub`;
  const mainPath = `/${name}-sub${path}`;
  const currentName = router.currentRoute.value.name;
  const currentPath = router.currentRoute.value.path;
  console.log(555555555555, name, path, mainName, mainPath, currentName, currentPath)
  if (mainName === currentName && mainPath !== currentPath) {
    router.push({ path: mainPath });
  }
});

app.use(WujieVue)
app.use(ElementPlus)
app.use(router)

app.mount('#app')
