import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    meta: { title: "Home" },
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/avatars",
    meta: { title: "DigitalHuman" },
    component: () => import("./views/DigitalHuman.vue"),
  },
  {
    path: "/digitalhumanchat",
    meta: { title: "DigitalHumanChat" },
    component: () => import("./views/DigitalHumanChat.vue"),
  },
  {
    path: "/doc",
    meta: { title: "Doc" },
    component: () => import("./views/Doc.vue"),
  },
  { path: "/:path(.*)", component: () => import("./views/NotFound.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
