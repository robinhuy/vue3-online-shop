import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index";
import store from "@/store/index";

import "@/assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/hamburgers.min.css";
import "@/assets/css/main.css";
import "@/assets/css/util.css";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
