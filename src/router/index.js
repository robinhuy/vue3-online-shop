import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/home/Index.vue";
import Products from "@/pages/products/Index.vue";
import ProductDetail from "@/pages/product-detail/Index.vue";
import About from "@/pages/about/Index.vue";
import Contact from "@/pages/contact/Index.vue";
import Cart from "@/pages/cart/Index.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/products", component: Products },
  { path: "/products/:id", component: ProductDetail },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/cart", component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
