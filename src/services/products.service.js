import api from "./base.service";

export default {
  async getProducts({ page, limit, sort, order, search, categoryId }) {
    let filterCategory = "";
    if (categoryId) filterCategory = "&categoryId=" + categoryId;

    return api
      .get(
        `/products?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}&q=${search}${filterCategory}`
      )
      .then((response) => {
        const products = response.data.map((product) => {
          product.image = api.defaults.baseURL + product.image;
          return product;
        });

        return {
          totalItems: response.headers["x-total-count"],
          data: products,
        };
      });
  },

  async getCategories() {
    return api.get("/categories").then((response) => {
      return response.data;
    });
  },

  async getProductById(productId) {
    return api.get(`/products/${productId}`).then((response) => {
      return response.data;
    });
  },
};
