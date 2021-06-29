import api from "@/services/users.service";

const user = api.getLoggedInUser();

const state = () => ({
  user,
  isLoginSuccess: !!user?.token,
  loginMessage: "",
  isRegisterSuccess: false,
  registerMessage: "",
});

const getters = {};

const actions = {
  async login({ commit }, { email, password }) {
    try {
      const user = await api.login({ email, password });

      commit("setUser", user);
      commit("setLoginSuccess", true);
      commit("setLoginMessage", "");
    } catch (error) {
      commit("setLoginSuccess", false);

      const errorResponse = error.response;
      if (errorResponse && errorResponse.status === 400) {
        commit(
          "setLoginMessage",
          errorResponse.data?.message || "Login failed!"
        );
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

      const errorResponse = error.response;
      if (errorResponse && errorResponse.status === 400) {
        commit(
          "setRegisterMessage",
          errorResponse.data?.message || "Register failed!"
        );
      } else {
        commit("setRegisterMessage", "Register failed!");
      }
    }
  },
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },

  setLoginSuccess(state, status) {
    state.isLoginSuccess = status;
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
    state.isLoginSuccess = false;
    state.isRegisterSuccess = false;
    localStorage.setItem("user", null);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
