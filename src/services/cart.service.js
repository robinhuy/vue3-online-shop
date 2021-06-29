import api from "./base.service";

export default {
  async addProductToCart(product) {
    return api.post("/cart", product).then((response) => {
      const product = response.data;
      product.image = api.defaults.baseURL + product.image;
      return product;
    });
  },

  async getProductsInCart() {
    return api.get("/cart").then((response) => {
      const products = response.data.map((product) => {
        product.image = api.defaults.baseURL + product.image;
        return product;
      });

      return products;
    });
  },
};
