<script lang="ts">
import { WUJIE_MESSAGE_CODE } from "../../../shared/constants/index";
export default {
  watch: {
    $route() {
      window.$wujie?.bus.$emit(WUJIE_MESSAGE_CODE.SUB_ROUTE_CHANGE, "vue2", this.$route.path);
    },
  },
  mounted() {
    window.$wujie?.bus.$on(WUJIE_MESSAGE_CODE.VUE2_ROUTE_CHANGE, (path: string) => this.$router.push(path));
  },
};
</script>

<template>
  <div>
    <h1 class="text-4xl text-black">Vue2</h1>
    <div>
      <transition>
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </div>
    <div class="border-t">
      <router-link to="/index"> Index </router-link>
      <router-link to="/foo"> Foo </router-link>
      <router-link to="/bar"> Bar </router-link>
    </div>
  </div>
</template>

<style scoped></style>
