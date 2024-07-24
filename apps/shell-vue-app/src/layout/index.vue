<script lang="ts" setup>
import { onBeforeUnmount, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import WujieVue from "wujie-vue3";

const { bus } = WujieVue;
const apps = reactive([
  {
    name: "vue3",
    path: "/vue3",
    url: "//localhost:8001/",
    visible: true,
    children: [
      {
        name: "foo",
        path: "/vue3-sub/foo",
        url: "//localhost:8001/foo",
      },
      {
        name: "bar",
        path: "/vue3-sub/bar",
        url: "//localhost:8001/bar",
      },
    ],
  },
  {
    name: "vue2",
    path: "/vue2",
    url: "//localhost:8002/",
    visible: false,
    children: [
      {
        name: "foo",
        path: "/vue2-sub/foo",
        url: "//localhost:8002/foo",
      },
      {
        name: "bar",
        path: "/vue2-sub/bar",
        url: "//localhost:8002/bar",
      },
    ],
  },
]);

const currentRoute = useRoute();

const $router = useRouter();
</script>

<template>
  <div>
    <div class="fixed top-0 bottom-0 left-0 z-50 w-52">
      <el-scrollbar>
        <el-menu
          default-active="vue3"
          background-color="bg-slate-700"
          text-color="bg-white"
          active-text-color="bg-blue-400"
          :unique-opened="false"
          :collapse-transition="false"
          mode="vertical"
        >
          <el-sub-menu v-for="item in apps" :key="item.name" :index="item.name">
            <template #title>
              <span>{{ item.name }}</span>
            </template>
            <router-link
              v-for="ele in item.children"
              :key="item.name + ele.name"
              :to="ele.path"
            >
              <el-menu-item :index="item.name + '-' + ele.path">
                <span class="text-white">{{ ele.name }}</span>
              </el-menu-item>
            </router-link>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <section
      class="relative h-full min-h-screen ml-52 overflow-y-auto bg-white"
    >
      <router-view />
    </section>
  </div>
</template>
