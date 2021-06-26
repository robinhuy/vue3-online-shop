import { createRouter, createWebHistory } from "vue-router";
import { BASE_URL } from "@/config";

import Home from "@/pages/home/HomePage.vue";
import Products from "@/pages/products/ProductsPage.vue";
import ProductDetail from "@/pages/product-detail/ProductDetailPage.vue";
import About from "@/pages/about/AboutPage.vue";
import Contact from "@/pages/contact/ContactPage.vue";
import Cart from "@/pages/cart/CartPage.vue";
import Login from "@/pages/login/LoginPage.vue";
import Register from "@/pages/register/RegisterPage.vue";

const User = () => import("@/pages/user/UserPage.vue");
const Profile = () => import("@/pages/user/ProfilePage.vue");
const Settings = () => import("@/pages/user/SettingsPage.vue");

const routes = [
  { path: "/", component: Home },
  { path: "/products", component: Products },
  { path: "/products/:id", component: ProductDetail },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/cart", component: Cart },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  {
    path: "/user",
    component: User,
    children: [
      { path: "", component: Profile },
      { path: "profile", component: Profile },
      { path: "settings", component: Settings },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

export default router;
