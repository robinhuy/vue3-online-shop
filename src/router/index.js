import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/home/Index.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/products", component: () => import("@/pages/products/Index.vue") },
  {
    path: "/products/:id",
    component: () => import("@/pages/product-detail/Index.vue"),
  },
  { path: "/about", component: () => import("@/pages/about/Index.vue") },
  { path: "/contact", component: () => import("@/pages/contact/Index.vue") },
  { path: "/cart", component: () => import("@/pages/cart/Index.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes,
});

export default router;
