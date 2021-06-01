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
                class="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170"
              >
                <span class="caption1-slide1 m-text1 t-center animated m-b-15">
                  Women Collection 2018
                </span>

                <h2 class="caption2-slide1 xl-text1 t-center animated m-b-37">
                  New arrivals
                </h2>

                <div class="wrap-btn-slide1 w-size1 animated">
                  <!-- Button -->
                  <router-link
                    to="/products"
                    class="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4"
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
    <section class="banner bgwhite p-t-40 p-b-40">
      <div class="container">
        <div class="row">
          <div class="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
            <!-- block1 -->
            <div class="block1 hov-img-zoom pos-relative m-b-30">
              <img src="@/assets/images/banner-02.jpg" alt="IMG-BENNER" />

              <div class="block1-wrapbtn w-size2">
                <!-- Button -->
                <a href="#" class="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                  Dresses
                </a>
              </div>
            </div>

            <!-- block1 -->
            <div class="block1 hov-img-zoom pos-relative m-b-30">
              <img src="@/assets/images/banner-05.jpg" alt="IMG-BENNER" />

              <div class="block1-wrapbtn w-size2">
                <!-- Button -->
                <a href="#" class="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                  Sunglasses
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
            <!-- block1 -->
            <div class="block1 hov-img-zoom pos-relative m-b-30">
              <img src="@/assets/images/banner-03.jpg" alt="IMG-BENNER" />

              <div class="block1-wrapbtn w-size2">
                <!-- Button -->
                <a href="#" class="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                  Watches
                </a>
              </div>
            </div>

            <!-- block1 -->
            <div class="block1 hov-img-zoom pos-relative m-b-30">
              <img src="@/assets/images/banner-07.jpg" alt="IMG-BENNER" />

              <div class="block1-wrapbtn w-size2">
                <!-- Button -->
                <a href="#" class="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                  Footerwear
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
            <!-- block1 -->
            <div class="block1 hov-img-zoom pos-relative m-b-30">
              <img src="@/assets/images/banner-04.jpg" alt="IMG-BENNER" />

              <div class="block1-wrapbtn w-size2">
                <!-- Button -->
                <a href="#" class="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                  Bags
                </a>
              </div>
            </div>

            <!-- block2 -->
            <div class="block2 wrap-pic-w pos-relative m-b-30">
              <img src="@/assets/images/icons/bg-01.jpg" alt="IMG" />

              <div class="block2-content sizefull ab-t-l flex-col-c-m">
                <h4 class="m-text4 t-center w-size3 p-b-8">
                  Sign up & get 20% off
                </h4>

                <p class="t-center w-size4">
                  Be the frist to know about the latest fashion news and get
                  exclu-sive offers
                </p>

                <div class="w-size2 p-t-25">
                  <!-- Button -->
                  <a
                    href="#"
                    class="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- New Product -->
    <section class="newproduct bgwhite p-t-45 p-b-105">
      <div class="container">
        <div class="sec-title p-b-60">
          <h3 class="m-text5 t-center">Featured Products</h3>
        </div>

        <!-- Slide2 -->
        <Carousel :items-to-show="4" :itemsToScroll="4">
          <Slide v-for="product in featuredProducts" :key="product.id">
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
                    <a
                      href="#"
                      class="block2-btn-addwishlist hov-pointer trans-0-4"
                    >
                      <i
                        class="icon-wishlist icon_heart_alt"
                        aria-hidden="true"
                      ></i>
                      <i
                        class="icon-wishlist icon_heart dis-none"
                        aria-hidden="true"
                      ></i>
                    </a>

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
                    to="/products/1"
                    class="block2-name dis-block s-text3 p-b-5"
                  >
                    {{ product.name }}
                  </router-link>

                  <span class="block2-price m-text6 p-r-5">
                    ${{ product.price }}
                  </span>
                </div>
              </div>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </section>

    <!-- Instagram -->
    <section class="instagram p-t-20">
      <div class="sec-title p-b-52 p-l-15 p-r-15">
        <h3 class="m-text5 t-center">@ follow us on Instagram</h3>
      </div>

      <div class="flex-w">
        <!-- Block4 -->
        <div class="block4 wrap-pic-w">
          <img src="@/assets/images/gallery-03.jpg" alt="IMG-INSTAGRAM" />

          <a href="#" class="block4-overlay sizefull ab-t-l trans-0-4">
            <span
              class="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25"
            >
              <i class="icon_heart_alt fs-20 p-r-12" aria-hidden="true"></i>
              <span class="p-t-2">39</span>
            </span>

            <div class="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
              <p class="s-text10 m-b-15 h-size1 of-hidden">
                Nullam scelerisque, lacus sed consequat laoreet, dui enim
                iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare
                tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget
                metus elit.
              </p>

              <span class="s-text9"> Photo by @nancyward </span>
            </div>
          </a>
        </div>

        <!-- Block4 -->
        <div class="block4 wrap-pic-w">
          <img src="@/assets/images/gallery-07.jpg" alt="IMG-INSTAGRAM" />

          <a href="#" class="block4-overlay sizefull ab-t-l trans-0-4">
            <span
              class="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25"
            >
              <i class="icon_heart_alt fs-20 p-r-12" aria-hidden="true"></i>
              <span class="p-t-2">39</span>
            </span>

            <div class="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
              <p class="s-text10 m-b-15 h-size1 of-hidden">
                Nullam scelerisque, lacus sed consequat laoreet, dui enim
                iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare
                tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget
                metus elit.
              </p>

              <span class="s-text9"> Photo by @nancyward </span>
            </div>
          </a>
        </div>

        <!-- Block4 -->
        <div class="block4 wrap-pic-w">
          <img src="@/assets/images/gallery-09.jpg" alt="IMG-INSTAGRAM" />

          <a href="#" class="block4-overlay sizefull ab-t-l trans-0-4">
            <span
              class="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25"
            >
              <i class="icon_heart_alt fs-20 p-r-12" aria-hidden="true"></i>
              <span class="p-t-2">39</span>
            </span>

            <div class="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
              <p class="s-text10 m-b-15 h-size1 of-hidden">
                Nullam scelerisque, lacus sed consequat laoreet, dui enim
                iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare
                tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget
                metus elit.
              </p>

              <span class="s-text9"> Photo by @nancyward </span>
            </div>
          </a>
        </div>

        <!-- Block4 -->
        <div class="block4 wrap-pic-w">
          <img src="@/assets/images/gallery-13.jpg" alt="IMG-INSTAGRAM" />

          <a href="#" class="block4-overlay sizefull ab-t-l trans-0-4">
            <span
              class="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25"
            >
              <i class="icon_heart_alt fs-20 p-r-12" aria-hidden="true"></i>
              <span class="p-t-2">39</span>
            </span>

            <div class="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
              <p class="s-text10 m-b-15 h-size1 of-hidden">
                Nullam scelerisque, lacus sed consequat laoreet, dui enim
                iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare
                tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget
                metus elit.
              </p>

              <span class="s-text9"> Photo by @nancyward </span>
            </div>
          </a>
        </div>

        <!-- Block4 -->
        <div class="block4 wrap-pic-w">
          <img src="@/assets/images/gallery-15.jpg" alt="IMG-INSTAGRAM" />

          <a href="#" class="block4-overlay sizefull ab-t-l trans-0-4">
            <span
              class="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25"
            >
              <i class="icon_heart_alt fs-20 p-r-12" aria-hidden="true"></i>
              <span class="p-t-2">39</span>
            </span>

            <div class="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
              <p class="s-text10 m-b-15 h-size1 of-hidden">
                Nullam scelerisque, lacus sed consequat laoreet, dui enim
                iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare
                tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget
                metus elit.
              </p>

              <span class="s-text9"> Photo by @nancyward </span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Shipping -->
    <section class="shipping bgwhite p-t-62 p-b-46">
      <div class="flex-w p-l-15 p-r-15">
        <div class="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 respon1">
          <h4 class="m-text12 t-center">Free Delivery Worldwide</h4>

          <a href="#" class="s-text11 t-center"> Click here for more info </a>
        </div>

        <div class="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 bo2 respon2">
          <h4 class="m-text12 t-center">30 Days Return</h4>

          <span class="s-text11 t-center">
            Simply return it within 30 days for an exchange.
          </span>
        </div>

        <div class="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 respon1">
          <h4 class="m-text12 t-center">Store Opening</h4>

          <span class="s-text11 t-center">
            Shop open from Monday to Sunday
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  name: "Home",
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
  components: {
    Carousel,
    Slide,
    Navigation,
  },
};
</script>