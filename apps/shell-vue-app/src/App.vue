<script setup lang="ts">
import { reactive } from 'vue'

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

  return {

  }
}

function showApp(index: number) {
  apps.forEach((x, idx) => {
    x.visible = index === idx
  })
}

function beforeLoad() {

}

function beforeMount(win: Window) {
  console.log(win)
}

function afterMount(win: Window) {
  console.log(win)
}

function beforeUnmount() {

}

function afterUnmount() {

}
</script>

<template>
  <div class="flex">
    <div class="w-72 border-r flex flex-col min-h-screen">
      <button @click="showApp(0)">
        切换到 Vue3 项目
      </button>
      <button @click="showApp(1)">
        切换到 Vue2 项目
      </button>
    </div>
    <div class="grow">
      <WujieVue
        v-for="app in apps" v-show="app.visible" :key="app.name" width="100%" height="100%" :name="app.name"
        :url="app.url" :sync="true" :beforeLoad="beforeLoad" :beforeMount="beforeMount" :afterMount="afterMount"
        :beforeUnmount="beforeUnmount" :afterUnmount="afterUnmount"
      />
    </div>
  </div>
</template>

<style scoped></style>
