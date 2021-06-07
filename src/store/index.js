import { createStore } from "vuex";
import products from "./modules/products";

const debug = process.env.NODE_ENV !== "production";

const store = createStore({
  strict: debug,
  modules: {
    products,
  },
});

export default store;
