<script setup lang="ts">

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
    </div>
  </div>
</template>

<style scoped></style>
