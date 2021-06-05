import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./pages/home/Index.vue";
import Products from "./pages/products/Index.vue";
import ProductDetail from "./pages/product-detail/Index.vue";
import About from "./pages/about/Index.vue";
import Contact from "./pages/contact/Index.vue";
import Cart from "./pages/cart/Index.vue";

import "@/assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/hamburgers.min.css";
import "@/assets/css/main.css";
import "@/assets/css/util.css";

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

const app = createApp(App);
app.use(router);
app.mount("#app");
