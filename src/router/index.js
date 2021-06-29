import { createRouter, createWebHistory } from "vue-router";
import { BASE_URL } from "@/config";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

router.beforeEach((to) => {
  const pageTitle = to.meta?.title;

  if (pageTitle) {
    window.document.title = pageTitle;
  }
});

export default router;
