<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const $router = useRouter();

watch(() => window.$wujie, () => {
  window.$wujie?.bus.$emit("sub-route-change", "vue3", route.path);
});

onMounted(() => {
  window.$wujie?.bus.$on("vue3-router-change", (path: string) => {
      return $router.push(path);
    });
});
</script>

<template>
  <div>
    <h1 class="text-4xl text-black">
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
      <router-link to="/index">
        Index
      </router-link>
      <router-link to="/foo">
        Foo
      </router-link>
      <router-link to="/bar">
        Bar
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
