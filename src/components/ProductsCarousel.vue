<template>
  <Carousel
    :items-to-show="1"
    :itemsToScroll="1"
    :breakpoints="{
      576: {
        itemsToShow: 2,
        itemsToScroll: 2,
      },
      768: {
        itemsToShow: 3,
        itemsToScroll: 3,
      },
      992: {
        itemsToShow: 4,
        itemsToScroll: 4,
      },
    }"
  >
    <Slide v-for="product in products" :key="product.id">
      <div class="item-slick2 p-l-15 p-r-15">
        <!-- Block2 -->
        <div class="block2">
          <div
            class="block2-img wrap-pic-w of-hidden pos-relative"
            :class="{
              'block2-labelnew': product.isNew,
              'block2-labelsale': product.isSale,
            }"
          >
            <img :src="product.image" alt="IMG-PRODUCT" />

            <div class="block2-overlay trans-0-4">
              <router-link
                :to="'/products/' + product.id"
                class="block2-btn-addwishlist hov-pointer trans-0-4"
              >
                <i class="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                <i
                  class="icon-wishlist icon_heart dis-none"
                  aria-hidden="true"
                ></i>
              </router-link>

              <div class="block2-btn-addcart w-size1 trans-0-4">
                <!-- Button -->
                <button
                  class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div class="block2-txt p-t-20">
            <router-link
              :to="'/products/' + product.id"
              class="block2-name dis-block s-text3 p-b-5"
            >
              {{ product.name }}
            </router-link>

            <span class="block2-price m-text6 p-r-5">
              {{ currency(product.price) }}
            </span>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { currency } from "@/utils/currency";

export default {
  name: "ProductsCarousel",

  props: ["products"],

  components: {
    Carousel,
    Slide,
    Navigation,
  },

  methods: {
    currency,
  },
};
</script>

<style>
.carousel__prev,
.carousel__next {
  background-color: transparent;
  font-size: 40px;
  top: calc((100% - 70px) / 2);
}
.carousel__icon {
  color: #ccc;
}
</style>