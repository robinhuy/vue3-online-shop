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
      <h2 class="l-text2 t-center">Profile</h2>
    </section>

    <!-- content page -->
    <section class="bgwhite p-t-66 p-b-60">
      <div class="container">
        <h1 class="text-center">
          Hello {{ user.firstName }} {{ user.lastName }}
        </h1>

        <br />

        <div class="w-size25 m-auto">
          <button
            @click="logout"
            class="flex-c-m size2 bg1 bo-rad-23 hov1 m-text3 trans-0-4"
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ProfilePage",

  computed: mapState("users", ["isLoginSuccess", "user"]),

  created() {
    if (!this.isLoginSuccess) {
      this.$router.replace("/");
    }
  },

  methods: {
    logout() {
      this.$store.commit("users/logout");
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
</style>