import api from "@/services/base.service";

const state = () => ({
  products: [],
  addToCartResult: "",
  totalItems: 0,
  isShowCartDropdown: false,
});

const getters = {
  totalItems(state) {
    return state.products.reduce(
      (total, product) => total + product.quantity,
      0
    );
  },

  subTotal(state) {
    return state.products.reduce(
      (totalPrice, product) => totalPrice + product.quantity * product.price,
      0
    );
  },
};

const actions = {};

const mutations = {
  setShowCartDropdown(state, status) {
    state.isShowCartDropdown = status;
  },

  getProductsInCart(state) {
    const products = JSON.parse(localStorage.getItem("cart")) || [];

    state.products = products.map((product) => {
      product.totalPrice = product.quantity * product.price;
      return product;
    });
  },

  addProductToCart(state, product) {
    const isExists = state.products.find((p) => p.id === product.id);

    if (isExists) {
      state.addToCartResult = "This item was already in your cart.";
    } else {
      state.addToCartResult = "Item successfully added to your cart.";

      product.image = api.defaults.baseURL + product.image;
      state.products.push(product);

      localStorage.setItem("cart", JSON.stringify(state.products));
    }

    state.isShowCartDropdown = true;
  },

  updateProductQuantity(state, { productId, value }) {
    const product = state.products.find((p) => p.id === productId);

    value = Number(value);

    if (value > 1) {
      product.quantity = value;
    } else {
      product.quantity = 1;
    }

    product.totalPrice = product.price * product.quantity;

    localStorage.setItem("cart", JSON.stringify(state.products));
  },

  removeProduct(state, productId) {
    state.products = state.products.filter((p) => p.id !== productId);
    localStorage.setItem("cart", JSON.stringify(state.products));
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
