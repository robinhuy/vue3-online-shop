import { createStore } from "vuex";
import users from "./modules/users.module";
import products from "./modules/products.module";
import cart from "./modules/cart.module";

const debug = process.env.NODE_ENV !== "production";

const store = createStore({
  strict: debug,
  modules: {
    users,
    products,
    cart
  },
});

export default store;
