import { createRouter, createWebHistory } from "vue-router";
import { BASE_URL } from "@/config";
import Home from "@/pages/home/HomePage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/products", component: () => import("@/pages/products/ProductsPage.vue") },
  {
    path: "/products/:id",
    component: () => import("@/pages/product-detail/ProductDetailPage.vue"),
  },
  { path: "/about", component: () => import("@/pages/about/AboutPage.vue") },
  { path: "/contact", component: () => import("@/pages/contact/ContactPage.vue") },
  { path: "/cart", component: () => import("@/pages/cart/CartPage.vue") },
  { path: "/login", component: () => import("@/pages/login/LoginPage.vue") },
];

const router = createRouter({
  history: createWebHistory(BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

export default router;
