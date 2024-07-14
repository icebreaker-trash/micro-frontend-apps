<script setup lang="ts">

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
    </div>
  </div>
</template>

<style scoped></style>
