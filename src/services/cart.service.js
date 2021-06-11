import axios from "axios";
import { API_DOMAIN } from "@/config";

export default {
  async addProductToCart(product) {
    return axios.post(`${API_DOMAIN}/cart`, product).then((response) => {
      const product = response.data;
      product.image = API_DOMAIN + product.image;
      return product;
    });
  },

  async getProductsInCart() {
    return axios.get(`${API_DOMAIN}/cart`).then((response) => {
      const products = response.data.map((product) => {
        product.image = API_DOMAIN + product.image;
        return product;
      });

      return products;
    });
  },
};
