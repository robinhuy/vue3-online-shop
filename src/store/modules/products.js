import api from "@/services/products.service";

const state = () => ({
  products: [],
  isLoading: false,
  pageIndex: 1,
  limit: 2,
  sort: "id",
  order: "desc",
  search: "",
});

const getters = {};

const actions = {
  async getProducts(
    { state, commit },
    { pageIndex, limit, sort, order, search }
  ) {
    commit("setLoading", true);

    if (pageIndex) commit("setPageIndex", pageIndex);
    if (limit) commit("setLimit", limit);
    if (sort) commit("setSort", sort);
    if (order) commit("setOrder", order);
    if (search) commit("setSearch", search);

    const products = await api.getProducts({
      page: state.pageIndex,
      limit: state.limit,
      sort: state.sort,
      order: state.order,
      search: state.search,
    });

    commit("setProducts", products);
    commit("setLoading", false);
  },
};

const mutations = {
  setLoading(state, status) {
    state.isLoading = status;
  },
  setProducts(state, products) {
    state.products = products;
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
