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
    meta: {
      redirectToIndex: true,
    },
  },
  {
    path: "/create",
    name: "create",
    component: () => import("@/views/Create.vue"),
    meta: {
      requiredLogin: true,
    },
  },
  {
    path: "/column/:id",
    name: "ColumnDetail",
    component: () => import("@/views/ColumnDetail.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: publicRoutes,
});

export default router;
