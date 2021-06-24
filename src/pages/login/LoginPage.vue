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
          <p class="m-b-20 text-center text-danger">{{ loginMessage }}</p>

          <div class="bo4 of-hidden size15 m-b-20">
            <input
              class="sizefull s-text7 p-l-22 p-r-22"
              type="text"
              placeholder="Username"
            />
          </div>

          <div class="bo4 of-hidden size15 m-b-20">
            <input
              class="sizefull s-text7 p-l-22 p-r-22"
              type="password"
              placeholder="Password"
            />
          </div>

          <div class="w-size25 m-auto">
            <button
              @click="login"
              class="flex-c-m size2 bg1 bo-rad-23 hov1 m-text3 trans-0-4"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "LoginPage",

  computed: mapState("users", ["loginMessage"]),

  methods: {
    login() {
      this.$store.dispatch("users/login", {
        username: "admin",
        password: "adminf",
      });
    },
  },
};
</script>

<style scoped>
.login-form {
  max-width: 500px;
}
</style>