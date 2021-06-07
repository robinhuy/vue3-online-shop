import axios from "axios";

const API_DOMAIN = "http://localhost:3000";

export default {
  async getProducts({ page, limit, sort, order, search }) {
    return axios
      .get(
        `${API_DOMAIN}/products?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}&q=${search}`
      )
      .then((response) => {
        return {
          totalItems: response.headers["x-total-count"],
          data: response.data,
        };
      });
  },
};
