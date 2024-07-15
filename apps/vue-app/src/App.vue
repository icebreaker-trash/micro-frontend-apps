<script setup lang="ts">
const subAppLocation = window.__POWERED_BY_WUJIE__ ? window.$wujie.location : window.location

if (window.__WUJIE?.degrade || !window.Proxy || !window.CustomElementRegistry) {
  window.$wujie.location.href = 'https://v2.vuejs.org/'
}
else {
  window.location.href = 'https://wujicode.cn/xy/app/prod/official/index'
}

function setHref(href: string) {
  if (window.__WUJIE?.degrade || !window.Proxy || !window.CustomElementRegistry) {
    window.$wujie.location.href = 'https://v2.vuejs.org/'
  }
  else {
    window.location.href = 'https://wujicode.cn/xy/app/prod/official/index'
  }
}
</script>

<template>
  <div>
    <h1 class="text-4xl">
      Vue3
    </h1>
    <div>
      <router-view v-slot="{ Component }">
        <transition>
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
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
      <!-- <a href="/">Index</a>
      <a href="/foo">Foo</a>
      <a href="/bar">bar</a> -->
    </div>
  </div>
</template>

<style scoped></style>
