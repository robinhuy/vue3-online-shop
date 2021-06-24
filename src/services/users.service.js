import axios from "axios";
import { API_DOMAIN } from "@/config";

export default {
  async login({ username, password }) {
    return axios
      .post(`${API_DOMAIN}/login`, { username, password })
      .then((response) => {
        return response.data;
      });
  },
};
