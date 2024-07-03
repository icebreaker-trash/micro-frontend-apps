<script setup lang="ts">
import { useStore } from '../store'
import router from '../router'

defineProps<{ msg: string }>()

const store = useStore()

function go2Bar() {
  // debugger
  router.push({
    path: '/bar',
  })
}
</script>

<template>
  <div class="space-y-2 text-center">
    <h1>{{ msg }}</h1>

    <div>
      <button class="bg-pink-100" type="button" @click="store.increment()">
        count is {{ store.count }}
      </button>
      <p class="text-yellow-800" @click="go2Bar">
        Double count {{ store.double }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
