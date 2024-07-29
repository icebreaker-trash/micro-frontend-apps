<template>
  <WujieVue
    width="100%"
    height="100%"
    :name="props.name"
    :url="url"
    :alive="props.alive"
    :beforeLoad="beforeLoad"
    :beforeMount="beforeMount"
    :afterMount="afterMount"
    :beforeUnmount="beforeUnmount"
    :afterUnmount="afterUnmount"
  ></WujieVue>
</template>

<script setup lang="ts">
import { defineProps, computed, watch } from "vue";
import { useRoute } from "vue-router";
import wujieVue from "wujie-vue3";

const route = useRoute();

const props = defineProps({
  url: String,
  name: String,
  alive: Boolean,
});

const url = computed(() => {
  return props.url + (`${route.params.path ? route.params.path : ""}`);
});

watch(() => route.params.path, (newPath) => {
  wujieVue.bus.$emit(`${props.name}-router-change`, newPath ? newPath : '');
}, { immediate: true });

function beforeLoad() {}

function beforeMount() {
  
}

function afterMount(_win: Window) {}

function beforeUnmount() {}

function afterUnmount() {}
</script>

<style lang="scss" scoped></style>
