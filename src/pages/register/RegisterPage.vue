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
      <h2 class="l-text2 t-center">Register account</h2>
    </section>

    <!-- content page -->
    <section class="bgwhite p-t-66 p-b-60">
      <div class="container">
        <div class="register-form m-auto">
          <p class="m-b-20 text-center text-danger">{{ registerMessage }}</p>

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
              type="text"
              placeholder="Email"
              v-model="email"
            />
          </div>

          <div class="bo4 of-hidden size15 m-b-20">
            <input
              class="sizefull s-text7 p-l-22 p-r-22"
              type="password"
              placeholder="Password"
              v-model="password"
              @keyup.enter="register"
            />
          </div>

          <div class="w-size25 m-auto">
            <button
              @click="register"
              class="flex-c-m size2 bg1 bo-rad-23 hov1 m-text3 trans-0-4"
              :class="{ disabled: !isFormValid }"
              :disabled="!isFormValid"
            >
              Register
            </button>
          </div>

          <hr />

          <p class="text-center">
            <router-link to="/login">Have an account? Login now! </router-link>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "RegisterPage",

  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },

  computed: {
    isFormValid() {
      return this.username !== "" && this.password !== "";
    },
    ...mapState("users", ["isRegisterSuccess", "registerMessage"]),
  },

  methods: {
    async register() {
      await this.$store.dispatch("users/register", {
        username: this.username,
        email: this.email,
        password: this.password,
      });

      if (this.isRegisterSuccess) {
        this.$store.commit(
          "users/setLoginMessage",
          "Register successfully, please login!"
        );
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style scoped>
.register-form {
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