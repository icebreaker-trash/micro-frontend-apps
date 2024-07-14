<script setup lang="ts">
import { onBeforeUnmount, reactive } from 'vue'
import WujieVue from 'wujie-vue3'

const { bus } = WujieVue
const apps = reactive([
  {
    name: 'vue3',
    url: '//localhost:8001/',
    visible: true,
  },
  {
    name: 'vue2',
    url: '//localhost:8002/',
    visible: false,
  },
])

function createContext() {
  const windowMap = new Map()

  function setWindow(win: Window) {
    windowMap.set(win.name, win)
  }

  return reactive({
    setWindow,
    router: {
      push(name: string, path: string) {
        const win = windowMap.get(name)
        if (win.$router) {
          win.$router.push(path)
          showApp(name)
        }
      },
    },
  })
}

const ctx = createContext()

function showApp(name: string) {
  apps.forEach((x) => {
    x.visible = x.name === name
  })
}

function beforeLoad() {

}

function beforeMount(win: Window) {
  ctx.setWindow(win)
  console.log(win)
}

function afterMount(_win: Window) {

}

function beforeUnmount() {

}

function afterUnmount() {

}

const { router } = ctx

const tabs = reactive<{ app: string, path: string }[]>([])

function addTab(app: string, path: string) {
  const x = tabs.find((x) => {
    return x.app === app && x.path === path
  })
  if (!x) {
    tabs.push({
      app,
      path,
    })
  }
}
bus.$on('addTab', addTab)
onBeforeUnmount(() => {
  bus.$off('addTab', addTab)
})
</script>

<template>
  <div class="flex">
    <div class="w-72 border-r flex flex-col min-h-screen">
      <button @click="showApp('vue3')">
        显示 Vue3 项目
      </button>
      <button @click="showApp('vue2')">
        显示 Vue2 项目
      </button>
      <button @click="router.push('vue3', '/')">
        切换到 Vue3 /
      </button>
      <button @click="router.push('vue3', '/foo')">
        切换到 Vue3 /foo
      </button>
      <button @click="router.push('vue3', '/bar')">
        切换到 Vue3 /bar
      </button>
      <button @click="router.push('vue2', '/')">
        切换到 Vue2 /
      </button>
      <button @click="router.push('vue2', '/foo')">
        切换到 Vue2 /foo
      </button>
      <button @click="router.push('vue2', '/bar')">
        切换到 Vue2 /bar
      </button>
    </div>
    <div class="grow">
      <div class="border-b p-4 space-x-2">
        <div
          v-for="tab in tabs" :key="tab.path" class="border rounded-lg inline-block p-1 cursor-pointer hover:bg-sky-700"
          @click="router.push(tab.app, tab.path)"
        >
          {{ tab.app }} {{ tab.path }}
        </div>
      </div>
      <div>
        <WujieVue
          v-for="app in apps" v-show="app.visible" :key="app.name" width="100%" height="100%" :name="app.name"
          :url="app.url" :sync="true" :beforeLoad="beforeLoad" :beforeMount="beforeMount" :afterMount="afterMount"
          :beforeUnmount="beforeUnmount" :afterUnmount="afterUnmount"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
