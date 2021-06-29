import { DOMAIN_TITLE } from "@/config";

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
  { path: "/", component: Home, meta: { title: `${DOMAIN_TITLE} | Home` } },
  {
    path: "/products",
    component: Products,
    meta: { title: `${DOMAIN_TITLE} | Products` },
  },
  {
    path: "/products/:id",
    component: ProductDetail,
    meta: { title: `${DOMAIN_TITLE} | Products` },
  },
  {
    path: "/about",
    component: About,
    meta: { title: `${DOMAIN_TITLE} | About` },
  },
  {
    path: "/contact",
    component: Contact,
    meta: { title: `${DOMAIN_TITLE} | Contact` },
  },
  { path: "/cart", component: Cart, meta: { title: `${DOMAIN_TITLE} | Cart` } },
  {
    path: "/login",
    component: Login,
    meta: { title: `${DOMAIN_TITLE} | Login` },
  },
  {
    path: "/register",
    component: Register,
    meta: { title: `${DOMAIN_TITLE} | Register` },
  },
  {
    path: "/user",
    component: User,
    meta: { title: `${DOMAIN_TITLE} | User` },
    children: [
      { path: "", component: Profile },
      { path: "profile", component: Profile },
      { path: "settings", component: Settings },
    ],
  },
  { path: "/:pathMatch(.*)", redirect: "/" },
];

export default routes;
