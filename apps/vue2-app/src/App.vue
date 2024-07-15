<script setup lang="ts">
function setHref(href: string) {
  window.location.href = href
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
