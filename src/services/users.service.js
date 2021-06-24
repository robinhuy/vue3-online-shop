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

  async register(user) {
    return axios.post(`${API_DOMAIN}/register`, user).then((response) => {
      return response.data;
    });
  },
};
