<script setup lang="ts">
import { reactive } from 'vue'

const apps = reactive([
  {
    name: 'vue3',
    url: '//localhost:8001/',
    visible: true
  },
  {
    name: 'vue2',
    url: '//localhost:8002/',
    visible: false
  }
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

</script>

<template>
  <div class="flex">
    <div class="w-72 border-r flex flex-col min-h-screen">
      <button @click="showApp(0)">切换到 Vue3 项目</button>
      <button @click="showApp(1)">切换到 Vue2 项目</button>
    </div>
    <div class="grow">
      <WujieVue v-show="app.visible" :key="app.name" v-for="app in apps" width="100%" height="100%" :name="app.name"
        :url="app.url" :sync="true"></WujieVue>
    </div>

  </div>
</template>

<style scoped></style>
