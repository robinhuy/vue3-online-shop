<template>
  <div class="header-wrapicon2" @click="toggleCartDropdown">
    <img
      src="@/assets/images/icons/icon-header-02.png"
      class="header-icon1 js-show-header-dropdown"
      alt="ICON"
    />
    <span class="header-icons-noti">{{ totalItems }}</span>

    <!-- Header cart noti -->
    <div
      class="header-cart header-dropdown"
      :class="{ 'show-header-dropdown': isShowCartDropdown }"
    >
      <p class="text-warning m-b-10">{{ addToCartResult }}</p>

      <ul class="header-cart-wrapitem">
        <li
          class="header-cart-item"
          v-for="product in products"
          :key="product.id"
        >
          <div class="header-cart-item-img">
            <img :src="product.image" alt="IMG" />
          </div>

          <div class="header-cart-item-txt">
            <a href="#" class="header-cart-item-name">
              {{ product.name }}
            </a>

            <span class="header-cart-item-info">
              {{ product.quantity }} x {{ currency(product.price) }}
            </span>
          </div>
        </li>
      </ul>

      <div v-if="totalItems > 0" class="header-cart-total">
        Total: {{ currency(subTotal) }}
      </div>

      <div v-if="totalItems > 0" class="header-cart-buttons">
        <div class="header-cart-wrapbtn">
          <router-link
            to="/cart"
            class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4"
          >
            View Cart
          </router-link>
        </div>

        <div class="header-cart-wrapbtn">
          <a
            href="#"
            class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4"
          >
            Check Out
          </a>
        </div>
      </div>

      <div v-else class="header-cart-buttons">
        <h4 class="text-center m-b-30">There are no products in your cart.</h4>

        <router-link
          to="/products"
          class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4"
        >
          Shopping now
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { currency } from "@/utils/currency";

export default {
  name: "HeaderCartDropdown",

  computed: {
    ...mapState("cart", ["products", "isShowCartDropdown", "addToCartResult"]),
    ...mapGetters("cart", ["totalItems", "subTotal"]),
  },

  methods: {
    toggleCartDropdown() {
      this.$store.commit("cart/setShowCartDropdown", !this.isShowCartDropdown);
    },

    currency,
  },
};
</script>
