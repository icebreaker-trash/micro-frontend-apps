<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div>
    <div>
      <RouterView />
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
