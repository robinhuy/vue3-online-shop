import api from "@/services/users.service";

const state = () => ({
  user: {},
  loginMessage: "",
});

const getters = {};

const actions = {
  async login({ commit }, { username, password }) {
    try {
      const user = await api.login({ username, password });

      commit("setUser", user);
      commit("setLoginMessage", "");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        commit("setLoginMessage", "Username or password is incorrect!");
      } else {
        commit("setLoginMessage", "Login failed!");
      }
    }
  },
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },

  setLoginMessage(state, message) {
    state.loginMessage = message;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
