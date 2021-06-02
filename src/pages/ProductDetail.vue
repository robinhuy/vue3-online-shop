<template>
  <div>
    <!-- breadcrumb -->
    <div class="bread-crumb bgwhite flex-w p-l-52 p-r-15 p-t-30 p-l-15-sm">
      <router-link to="/" class="s-text16">
        Home
        <i class="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
      </router-link>

      <router-link to="/products" class="s-text16">
        Women
        <i class="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
      </router-link>

      <span class="s-text17"> Boxy T-Shirt with Roll Sleeve Detail </span>
    </div>

    <!-- Product Detail -->
    <div class="container bgwhite p-t-35 p-b-80">
      <div class="flex-w flex-sb">
        <div class="w-size13 p-t-30 respon5">
          <div class="wrap-slick3 flex-sb flex-w">
            <div class="wrap-slick3-dots">
              <ul class="slick3-dots" role="tablist">
                <li class="slick-active">
                  <img :src="require('@/assets/images/thumb-item-01.jpg')" />
                  <div class="slick3-dot-overlay"></div>
                </li>
                <li>
                  <img :src="require('@/assets/images/thumb-item-02.jpg')" />
                  <div class="slick3-dot-overlay"></div>
                </li>
                <li>
                  <img :src="require('@/assets/images/thumb-item-03.jpg')" />
                  <div class="slick3-dot-overlay"></div>
                </li>
              </ul>
            </div>

            <div class="slick3">
              <div
                class="item-slick3"
                data-thumb="@/assets/images/thumb-item-01.jpg"
              >
                <div class="wrap-pic-w">
                  <img
                    src="@/assets/images/product-detail-01.jpg"
                    alt="IMG-PRODUCT"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-size14 p-t-30 respon5">
          <h4 class="product-detail-name m-text16 p-b-13">
            {{ product.name }}
          </h4>

          <span class="m-text17"> ${{ product.price }} </span>

          <p class="s-text8 p-t-10">
            {{ product.shortDescription }}
          </p>

          <div class="p-t-33 p-b-60">
            <div class="flex-m flex-w p-b-10">
              <div class="s-text15 w-size15 t-center">Size</div>

              <div class="w-size16">
                <Select2 :selected="size.selected" :options="size.options" />
              </div>
            </div>

            <div class="flex-m flex-w">
              <div class="s-text15 w-size15 t-center">Color</div>

              <div class="w-size16">
                <Select2 :selected="color.selected" :options="color.options" />
              </div>
            </div>

            <div class="flex-r-m flex-w p-t-10">
              <div class="w-size16 flex-m flex-w">
                <div class="flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10">
                  <button
                    class="btn-num-product-down color1 flex-c-m size7 bg8 eff2"
                    @click="decreaseQuantity"
                  >
                    <i class="fs-12 fa fa-minus" aria-hidden="true"></i>
                  </button>

                  <input
                    class="size8 m-text18 t-center num-product"
                    type="number"
                    name="num-product"
                    v-model.number="productQuantity"
                  />

                  <button
                    class="btn-num-product-up color1 flex-c-m size7 bg8 eff2"
                    @click="increaseQuantity"
                  >
                    <i class="fs-12 fa fa-plus" aria-hidden="true"></i>
                  </button>
                </div>

                <div
                  class="btn-addcart-product-detail size9 trans-0-4 m-t-10 m-b-10"
                >
                  <!-- Button -->
                  <button
                    class="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="p-b-45">
            <span class="s-text8 m-r-35">SKU: {{ product.id }}</span>
            <span class="s-text8">Categories: Mug, Design</span>
          </div>

          <!--  -->
          <div
            class="wrap-dropdown-content bo6 p-t-15 p-b-14 active-dropdown-content"
          >
            <h5
              class="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4"
            >
              Description
              <i
                class="down-mark fs-12 color1 fa fa-minus dis-none"
                aria-hidden="true"
              ></i>
              <i class="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
            </h5>

            <div class="dropdown-content dis-none p-t-15 p-b-23">
              <p class="s-text8">
                {{ product.description }}
              </p>
            </div>
          </div>

          <div class="wrap-dropdown-content bo7 p-t-15 p-b-14">
            <h5
              class="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4"
            >
              Additional information
              <i
                class="down-mark fs-12 color1 fa fa-minus dis-none"
                aria-hidden="true"
              ></i>
              <i class="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
            </h5>

            <div class="dropdown-content dis-none p-t-15 p-b-23">
              <p class="s-text8">
                Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus
                at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl,
                a dignissim mauris placerat
              </p>
            </div>
          </div>

          <div class="wrap-dropdown-content bo7 p-t-15 p-b-14">
            <h5
              class="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4"
            >
              Reviews (0)
              <i
                class="down-mark fs-12 color1 fa fa-minus dis-none"
                aria-hidden="true"
              ></i>
              <i class="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
            </h5>

            <div class="dropdown-content dis-none p-t-15 p-b-23">
              <p class="s-text8">
                Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus
                at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl,
                a dignissim mauris placerat
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Relate Product -->
    <section class="relateproduct bgwhite p-t-45 p-b-138">
      <div class="container">
        <div class="sec-title p-b-60">
          <h3 class="m-text5 t-center">Related Products</h3>
        </div>

        <!-- Slide2 -->
        <Carousel :items-to-show="4" :itemsToScroll="4">
          <Slide v-for="product in relatedProducts" :key="product.id">
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
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import Select2 from "@/components/Select2.vue";

export default {
  name: "ProductDetail",
  components: {
    Carousel,
    Slide,
    Navigation,
    Select2,
  },
  data() {
    return {
      product: {
        id: "MUG-01",
        name: "Boxy T-Shirt with Roll Sleeve Detail",
        shortDescription:
          "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
        description:
          "Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat",
        price: 22,
      },
      productImages: [],
      productQuantity: 1,
      size: {
        selected: { value: "", label: "Choose an option" },
        options: [
          { value: "", label: "Choose an option" },
          { value: "s", label: "Size S" },
          { value: "m", label: "Size M" },
          { value: "l", label: "Size L" },
          { value: "xl", label: "Size XL" },
        ],
      },
      color: {
        selected: { value: "", label: "Choose an option" },
        options: [
          { value: "", label: "Choose an option" },
          { value: "gray", label: "Gray" },
          { value: "red", label: "Red" },
          { value: "black", label: "Black" },
          { value: "blue", label: "Blue" },
        ],
      },
      relatedProducts: [
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
  watch: {
    productQuantity(value) {
      if (value < 1) this.productQuantity = 1;
    },
  },
  methods: {
    decreaseQuantity() {
      if (this.productQuantity > 1) this.productQuantity--;
    },
    increaseQuantity() {
      this.productQuantity++;
    },
  },
};
</script>