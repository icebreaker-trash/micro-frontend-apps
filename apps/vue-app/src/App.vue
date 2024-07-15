<script setup lang="ts">
function setHref(href: string) {
  window.location.href = href
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
