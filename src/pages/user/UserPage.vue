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
      <h2 class="l-text2 t-center">User</h2>
    </section>

    <!-- content page -->
    <section class="bgwhite p-t-66 p-b-60">
      <div class="container">
        <h3 class="text-center">
          Welcome {{ user.firstName }} {{ user.lastName }}
        </h3>

        <div class="row m-t-30">
          <div class="col-sm-6 col-md-4 col-lg-3 p-b-50">
            <ul>
              <li>
                <router-link to="/user/profile">Profile</router-link>
              </li>
              <li>
                <router-link to="/user/settings">Settings</router-link>
              </li>
              <li>
                <a href="#" @click="logout">Logout</a>
              </li>
            </ul>
          </div>

          <div class="col-sm-6 col-md-8 col-lg-9 p-b-50">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "UserPage",

  computed: mapState("users", ["isLoginSuccess", "user"]),

  created() {
    if (!this.isLoginSuccess) {
      this.$router.replace("/");
    }
  },

  methods: {
    logout(event) {
      event.preventDefault();
      this.$store.commit("users/logout");
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
</style>