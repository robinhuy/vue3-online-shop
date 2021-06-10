import { createStore } from "vuex";
import products from "./modules/products";
import cart from "./modules/cart";

const debug = process.env.NODE_ENV !== "production";

const store = createStore({
  strict: debug,
  modules: {
    products,
    cart
  },
});

export default store;
