<template>
  <header class="header1">
    <!-- Header desktop -->
    <div class="container-menu-header">
      <div class="wrap_header">
        <!-- Logo -->
        <router-link to="/" class="logo">
          <img src="@/assets/images/icons/logo.png" alt="IMG-LOGO" />
        </router-link>

        <!-- Menu -->
        <div class="wrap_menu">
          <nav class="menu">
            <ul class="main_menu">
              <MenuItem to="/" label="Home" />

              <MenuItem to="/products" label="Products" />

              <MenuItem to="/about" label="About" />

              <MenuItem to="/contact" label="Contact" />
            </ul>
          </nav>
        </div>

        <!-- Header Icon -->
        <div class="header-icons">
          <router-link :to="user?.avatar ? '/profile' : '/login'">
            <img
              :src="user?.avatar ? user.avatar : defaultAvatar"
              class="header-icon1"
              alt="Avatar"
            />
          </router-link>

          <span class="linedivide1"></span>

          <HeaderCartDropdown />
        </div>
      </div>
    </div>

    <!-- Header Mobile -->
    <div class="wrap_header_mobile">
      <!-- Logo moblie -->
      <router-link to="/" class="logo-mobile">
        <img src="@/assets/images/icons/logo.png" alt="IMG-LOGO" />
      </router-link>

      <!-- Button show menu -->
      <div class="btn-show-menu">
        <!-- Header Icon mobile -->
        <div class="header-icons-mobile">
          <a href="#" class="header-wrapicon1 dis-block">
            <img
              :src="user?.avatar ? user.avatar : defaultAvatar"
              class="header-icon1"
              alt="Avatar"
            />
          </a>

          <span class="linedivide2"></span>

          <HeaderCartDropdown />
        </div>

        <div
          class="btn-show-menu-mobile hamburger hamburger--squeeze"
          :class="{ 'is-active': isShowMenuMobileDropdown }"
          @click="toggleMenuMobileDropdown"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </div>
      </div>
    </div>

    <!-- Menu Mobile -->
    <div
      class="wrap-side-menu"
      :style="{ display: isShowMenuMobileDropdown ? 'block' : 'none' }"
    >
      <nav class="side-menu">
        <ul class="main-menu">
          <li class="item-topbar-mobile p-l-20 p-t-8 p-b-8">
            <span class="topbar-child1">
              Free shipping for standard order over $100
            </span>
          </li>

          <li class="item-topbar-mobile p-l-20 p-t-8 p-b-8">
            <div class="topbar-child2-mobile">
              <span class="topbar-email"> fashe@example.com </span>

              <div class="topbar-language rs1-select2">
                <Select2
                  :options="[
                    { value: 'usd', label: 'USD' },
                    { value: 'eur', label: 'EUR' },
                  ]"
                  :style="{
                    border: 'none',
                    marginLeft: '26px',
                  }"
                />
              </div>
            </div>
          </li>

          <li class="item-topbar-mobile p-l-10">
            <div class="topbar-social-mobile">
              <a href="#" class="topbar-social-item fa fa-facebook"></a>
              <a href="#" class="topbar-social-item fa fa-instagram"></a>
              <a href="#" class="topbar-social-item fa fa-pinterest-p"></a>
              <a href="#" class="topbar-social-item fa fa-snapchat-ghost"></a>
              <a href="#" class="topbar-social-item fa fa-youtube-play"></a>
            </div>
          </li>

          <li class="item-menu-mobile" @click="closeMenuMobileDropdown">
            <router-link to="/">Home</router-link>
          </li>

          <li class="item-menu-mobile" @click="closeMenuMobileDropdown">
            <router-link to="/products">Products</router-link>
          </li>

          <li class="item-menu-mobile" @click="closeMenuMobileDropdown">
            <router-link to="/about">About</router-link>
          </li>

          <li class="item-menu-mobile" @click="closeMenuMobileDropdown">
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
import defaultAvatar from "@/assets/images/icons/icon-header-01.png";
import MenuItem from "./MenuItem.vue";
import HeaderCartDropdown from "./HeaderCartDropdown.vue";
import Select2 from "./Select2.vue";

export default {
  name: "MainHeader",

  components: {
    MenuItem,
    HeaderCartDropdown,
    Select2,
  },

  data() {
    return {
      defaultAvatar,
      language: {
        selected: {},
      },
      isShowMenuMobileDropdown: false,
    };
  },

  computed: mapState("users", ["user"]),

  methods: {
    toggleMenuMobileDropdown() {
      this.isShowMenuMobileDropdown = !this.isShowMenuMobileDropdown;
    },

    closeMenuMobileDropdown() {
      this.isShowMenuMobileDropdown = false;
    },
  },
};
</script>

