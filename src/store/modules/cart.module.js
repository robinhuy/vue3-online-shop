import api from "@/services/cart.service";

const state = () => ({
  products: [],
  isLoading: false,
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

const actions = {
  async addProductToCart({ state, commit }, product) {
    const isExists = state.products.find((p) => p.id === product.id);

    if (isExists) {
      commit("setAddToCartResult", "This item was already in your cart.");
    } else {
      const newProduct = await api.addProductToCart(product);

      if (newProduct) {
        commit("setAddToCartResult", "Item successfully added to your cart.");
        commit("addProductToCart", newProduct);
      }
    }

    commit("setShowCartDropdown", true);
  },

  async getProductsInCart({ commit }) {
    commit("setLoading", true);

    const products = await api.getProductsInCart();

    commit("setProducts", products);
    commit("setLoading", false);
  },
};

const mutations = {
  setShowCartDropdown(state, status) {
    state.isShowCartDropdown = status;
  },

  setLoading(state, status) {
    state.isLoading = status;
  },

  setProducts(state, products) {
    state.products = products.map((product) => {
      product.totalPrice = product.quantity * product.price;
      return product;
    });
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
  },

  addProductToCart(state, product) {
    state.products.push(product);
  },

  setAddToCartResult(state, message) {
    state.addToCartResult = message;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
