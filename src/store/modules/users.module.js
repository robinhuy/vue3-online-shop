import api from "@/services/users.service";

const state = () => ({
  user: {},
  loginMessage: "",
  isRegisterSuccess: false,
  registerMessage: "",
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

  async register({ commit }, user) {
    try {
      await api.register(user);

      commit("setRegisterSuccess", true);
      commit("setRegisterMessage", "");
    } catch (error) {
      commit("setRegisterSuccess", false);
      commit("setRegisterMessage", "Register failed!");
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

  setRegisterSuccess(state, status) {
    state.isRegisterSuccess = status;
  },

  setRegisterMessage(state, message) {
    state.registerMessage = message;
  },

  logout(state) {
    state.user = {};
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
