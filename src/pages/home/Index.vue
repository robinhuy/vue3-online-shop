<template>
  <div>
    <!-- Slide1 -->
    <section class="slide1">
      <div class="wrap-slick1">
        <Carousel :wrapAround="true">
          <Slide v-for="slide in slides" :key="slide.id">
            <div
              class="item-slick1"
              :style="{
                backgroundImage: 'url(' + slide.image + ')',
                width: '100%',
              }"
            >
              <div
                class="
                  wrap-content-slide1
                  sizefull
                  flex-col-c-m
                  p-l-15 p-r-15 p-t-150 p-b-170
                "
              >
                <span class="caption1-slide1 m-text1 t-center animated m-b-15">
                  Women Collection 2018
                </span>

                <h2 class="caption2-slide1 xl-text1 t-center animated m-b-37">
                  New arrivals
                </h2>

                <div class="wrap-btn-slide1 w-size1 animated">
                  <router-link
                    to="/products"
                    class="
                      flex-c-m
                      size2
                      bo-rad-23
                      s-text2
                      bgwhite
                      hov1
                      trans-0-4
                    "
                  >
                    Shop Now
                  </router-link>
                </div>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
    </section>

    <!-- Banner -->
    <SectionBanner />

    <!-- Featured Products -->
    <section class="newproduct bgwhite p-t-45 p-b-105">
      <div class="container">
        <div class="sec-title p-b-60">
          <h3 class="m-text5 t-center">Featured Products</h3>
        </div>

        <ProductsCarousel :products="featuredProducts" />
      </div>
    </section>

    <!-- Instagram -->
    <SectionInstagram />

    <!-- Shipping -->
    <SectionShipping />
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import ProductsCarousel from "@/components/ProductsCarousel.vue";
import SectionBanner from "./SectionBanner.vue";
import SectionInstagram from "./SectionInstagram.vue";
import SectionShipping from "./SectionShipping.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    Slide,
    ProductsCarousel,
    SectionBanner,
    SectionInstagram,
    SectionShipping,
  },
  data() {
    return {
      slides: [
        { id: 1, image: require("@/assets/images/master-slide-01.jpg") },
        { id: 2, image: require("@/assets/images/master-slide-02.jpg") },
        { id: 3, image: require("@/assets/images/master-slide-03.jpg") },
      ],
      featuredProducts: [
        {
          id: 1,
          image: require("@/assets/images/item-02.jpg"),
          name: "Herschel supply co 25l",
          price: 75.0,
          isNew: true,
        },
        {
          id: 2,
          image: require("@/assets/images/item-03.jpg"),
          name: "Denim jacket blue",
          price: 92.5,
        },
        {
          id: 3,
          image: require("@/assets/images/item-04.jpg"),
          name: "Coach slim easton black",
          price: 165.9,
        },
        {
          id: 4,
          image: require("@/assets/images/item-05.jpg"),
          name: "Frayed denim shorts",
          price: 15.9,
          isSale: true,
        },
        {
          id: 5,
          image: require("@/assets/images/item-02.jpg"),
          name: "Herschel supply co 25l",
          price: 75.0,
        },
        {
          id: 6,
          image: require("@/assets/images/item-03.jpg"),
          name: "Denim jacket blue",
          price: 92.5,
        },
        {
          id: 7,
          image: require("@/assets/images/item-04.jpg"),
          name: "Coach slim easton black",
          price: 165.9,
        },
        {
          id: 8,
          image: require("@/assets/images/item-05.jpg"),
          name: "Frayed denim shorts",
          price: 15.9,
        },
      ],
    };
  },
};
</script>