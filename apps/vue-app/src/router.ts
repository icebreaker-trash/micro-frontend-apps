import Index from "./pages/index.vue";
import Bar from "./pages/bar.vue";
import Foo from "./pages/foo.vue";

export const routes = [
  { path: "/", redirect: "/index" },
  { path: "/index", component: Index },
  { path: "/foo", component: Foo },
  { path: "/Bar", component: Bar },
];
