<template>
  <div>
    <!-- Title Page -->
    <section
      class="bg-title-page p-t-40 p-b-50 flex-col-c-m"
      :style="{
        backgroundImage:
          'url(' + require('@/assets/images/heading-pages-06.jpg') + ')',
      }"
    >
      <h2 class="l-text2 t-center">Login</h2>
    </section>

    <!-- content page -->
    <section class="bgwhite p-t-66 p-b-60">
      <div class="container">
        <div class="login-form m-auto">
          <p
            class="m-b-20 text-center"
            :class="isRegisterSuccess ? 'text-success' : 'text-danger'"
          >
            {{ loginMessage }}
          </p>

          <div class="bo4 of-hidden size15 m-b-20">
            <input
              class="sizefull s-text7 p-l-22 p-r-22"
              type="text"
              placeholder="Username"
              v-model="username"
            />
          </div>

          <div class="bo4 of-hidden size15 m-b-20">
            <input
              class="sizefull s-text7 p-l-22 p-r-22"
              type="password"
              placeholder="Password"
              v-model="password"
              @keyup.enter="login"
            />
          </div>

          <div class="w-size25 m-auto">
            <button
              @click="login"
              class="flex-c-m size2 bg1 bo-rad-23 hov1 m-text3 trans-0-4"
              :class="{ disabled: !isFormValid }"
              :disabled="!isFormValid"
            >
              Login
            </button>
          </div>

          <hr />

          <p class="text-center">
            <router-link to="/register"
              >Don't have an account yet? Register now!
            </router-link>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "LoginPage",

  data() {
    return {
      username: "",
      password: "",
    };
  },

  computed: {
    isFormValid() {
      return this.username !== "" && this.password !== "";
    },
    ...mapState("users", [
      "isLoginSuccess",
      "isRegisterSuccess",
      "loginMessage",
    ]),
  },

  methods: {
    async login() {
      await this.$store.dispatch("users/login", {
        username: this.username,
        password: this.password,
      });

      if (this.isLoginSuccess) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.login-form {
  max-width: 500px;
}
button.disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
button.disabled:hover {
  background-color: #222222;
}
</style>