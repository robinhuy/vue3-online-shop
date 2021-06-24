import api from "@/services/products.service";

const state = () => ({
  products: [],
  product: {},
  categories: [],
  category: {},
  isLoading: false,
  pageIndex: 1,
  limit: 3,
  sort: "id",
  order: "desc",
  search: "",
  totalItems: 0,
});

const getters = {
  sortDropdownValue(state) {
    return state.sort + "-" + state.order;
  },

  itemStartIndex(state) {
    return (state.pageIndex - 1) * state.limit + 1;
  },

  itemEndIndex(state) {
    let index = state.pageIndex * state.limit;
    if (index > state.totalItems) index = state.totalItems;
    return index;
  },
};

const actions = {
  async getProducts(
    { state, commit },
    { pageIndex, limit, sort, order, search, category }
  ) {
    commit("setLoading", true);

    if (pageIndex) commit("setPageIndex", pageIndex);
    if (limit) commit("setLimit", limit);
    if (sort) commit("setSort", sort);
    if (order) commit("setOrder", order);
    if (search !== undefined) commit("setSearch", search);
    if (category) commit("setCategory", category);

    const response = await api.getProducts({
      page: state.pageIndex,
      limit: state.limit,
      sort: state.sort,
      order: state.order,
      search: state.search,
      categoryId: state.category.id,
    });

    commit("setProducts", response);
    commit("setLoading", false);
  },

  async getFeaturedProducts({ commit }) {
    const response = await api.getProducts({
      page: 1,
      limit: 8,
      sort: "id",
      order: "desc",
      search: "",
    });

    commit("setProducts", response);
  },

  async getCategories({ commit }) {
    const categories = await api.getCategories();
    commit("setCategories", categories);
  },

  async getProductById({ commit }, productId) {
    commit("setLoading", true);

    const product = await api.getProductById(productId);
    product.quantity = 1;

    commit("setProduct", product);
    commit("setLoading", false);
  },
};

const mutations = {
  setLoading(state, status) {
    state.isLoading = status;
  },

  setProducts(state, response) {
    state.products = response.data;
    state.totalItems = +response.totalItems;
  },

  setProduct(state, product) {
    state.product = product;
  },

  updateProductQuantity(state, quantity) {
    if (quantity < 1) quantity = 1;
    state.product.quantity = quantity;
  },

  setCategories(state, categories) {
    state.categories = categories;
  },

  setCategory(state, category) {
    state.category = category;
  },

  setPageIndex(state, pageIndex) {
    state.pageIndex = pageIndex;
  },

  setLimit(state, limit) {
    state.limit = limit;
  },

  setSort(state, sort) {
    state.sort = sort;
  },

  setOrder(state, order) {
    state.order = order;
  },

  setSearch(state, search) {
    state.search = search;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
