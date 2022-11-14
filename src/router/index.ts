import { createRouter, createWebHistory } from "vue-router";

const publicRoutes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: publicRoutes,
});

export default router;
