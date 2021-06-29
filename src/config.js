const isProductionEnv = process.env.NODE_ENV === "production";

export const API_DOMAIN = isProductionEnv
  ? "https://online-shop-apis.herokuapp.com"
  : "http://localhost:3000";

export const BASE_URL = isProductionEnv ? "/vue3-online-shop/" : "/";

export const DOMAIN_TITLE = "Vue 3 Online Shop";
