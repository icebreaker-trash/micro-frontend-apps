import { createRouter, createWebHistory } from "vue-router";

const Layout = () => import("../layout/index.vue");
const Common = () => import("../pages/common/index.vue");

// 静态路由
export const constantRoutes: any[] = [
  {
    path: "/",
    redirect: "/vue3-sub/index",
  },

  {
    path: "/",
    name: "/",
    component: Layout,
    children: [
      {
        path: "/vue3",
        name: "Vue3",
        component: Common,
        props: {
          url: "//localhost:8001/",
          alive: true,
          name: "vue3"
        },
        key: "vue3"
      },
      {
        path: "/vue2",
        name: "Vue2",
        component: Common,
        props: {
          url: "//localhost:8002/",
          alive: true,
          name: "vue2"
        },
        key: "vue2"
      },
      {
        path: "/vue3-sub/:path",
        name: "vue3-sub",
        component: Common,
        props: {
          url: "//localhost:8001/",
          alive: true,
          name: "vue3"
        },
        key: "vue3"
      },
      {
        path: "/vue2-sub/:path",
        name: "vue2-sub",
        component: Common,
        props: {
          url: "//localhost:8002/",
          alive: true,
          name: "vue2"
        },
        key: "vue2"
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;