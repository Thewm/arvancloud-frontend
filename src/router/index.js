import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

import Jwt from "@/common/storage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/Register.vue")
  },
  {
    path: "/articles/page/:id",
    component: () => import("@/views/Dashboard.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/articles",
    name: "Dashboard",
    component: () => import("@/views/Dashboard.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/articles/create",
    name: "create-article",
    component: () => import("@/views/CreateArticle.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/NotFound.vue")
  },
  {
    path: "*",
    redirect: { name: "404" }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// Ensure we checked auth before each page load - keep some routes safe
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let user = Jwt.getToken();
    if (user) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    next();
  }
});

export default router;
