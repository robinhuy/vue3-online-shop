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

  computed: mapState("users", ["user"]),

  created() {
    if (!this.user.name) {
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