import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import Products from "./pages/Products.vue";
import ProductDetail from "./pages/ProductDetail.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import Cart from "./pages/Cart.vue";

import "@/assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/hamburgers.min.css"
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
