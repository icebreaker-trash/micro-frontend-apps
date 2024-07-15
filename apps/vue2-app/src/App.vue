<script setup lang="ts">
import { subAppLocation } from './router'

function setHref(href: string) {
  // subAppLocation.href = href
  console.log(subAppLocation)
  console.log(window.$wujie.location.href)
  // window.$wujie.location.href = href
  window.$wujie.location.href = href
  console.log(window.$wujie.location.href)
  // window.location.href = href
}
</script>

<template>
  <div>
    <h1 class="text-4xl">
      Vue2
    </h1>
    <div>
      <transition>
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </div>
    <div class="border-t">
      <RouterLink to="/">
        Index
      </RouterLink>
      <RouterLink to="/foo">
        Foo
      </RouterLink>
      <RouterLink to="/bar">
        Bar
      </RouterLink>
      <h2>
        window.location.href
      </h2>
      <button @click="setHref('/')">
        Index
      </button>
      <button @click="setHref('/foo')">
        Foo
      </button>
      <button @click="setHref('/bar')">
        Bar
      </button>
    </div>
  </div>
</template>

<style scoped></style>
