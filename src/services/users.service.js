import api from "./base.service";

let authInterceptor = null;

function addAuthInterceptor(token) {
  // Remove old interceptor
  if (authInterceptor !== null) {
    api.interceptors.request.eject(authInterceptor);
    authInterceptor = null;
  }

  // Add new interceptor
  authInterceptor = api.interceptors.request.use(
    (request) => {
      if (token) {
        request.headers.Authorization = "Bearer " + token;
      }

      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}

export default {
  getLoggedInUser() {
    const user = JSON.parse(localStorage.getItem("user")) || {};
    addAuthInterceptor(user.token);

    return user;
  },

  async login({ username, email, password }) {
    return api
      .post("/login", { username, email, password })
      .then((response) => {
        const user = response.data;
        addAuthInterceptor(user.token);
        localStorage.setItem("user", JSON.stringify(user));

        return user;
      });
  },

  async register(user) {
    return api.post("/register", user).then((response) => {
      return response.data;
    });
  },
};
