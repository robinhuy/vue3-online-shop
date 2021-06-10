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
      <div v-if="isLoading" data-loader="ball-scale"></div>

      <div v-else class="flex-w flex-sb">
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
                <Select2 :options="sizes" />
              </div>
            </div>

            <div class="flex-m flex-w">
              <div class="s-text15 w-size15 t-center">Color</div>

              <div class="w-size16">
                <Select2 :options="colors" />
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
                  class="
                    btn-addcart-product-detail
                    size9
                    trans-0-4
                    m-t-10 m-b-10
                  "
                >
                  <!-- Button -->
                  <button
                    class="
                      flex-c-m
                      sizefull
                      bg1
                      bo-rad-23
                      hov1
                      s-text1
                      trans-0-4
                    "
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <DropdownContent />
        </div>
      </div>
    </div>

    <!-- Relate Product -->
    <section class="relateproduct bgwhite p-t-45 p-b-138">
      <div class="container">
        <div class="sec-title p-b-60">
          <h3 class="m-text5 t-center">Related Products</h3>
        </div>

        <ProductsCarousel :products="products" />
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Select2 from "@/components/Select2.vue";
import ProductsCarousel from "@/components/ProductsCarousel.vue";
import DropdownContent from "./DropdownContent.vue";

export default {
  name: "ProductDetail",

  components: {
    Select2,
    ProductsCarousel,
    DropdownContent,
  },

  data() {
    return {
      productImages: [],
      productQuantity: 1,
      sizes: [
        { value: "", label: "Choose an option" },
        { value: "s", label: "Size S" },
        { value: "m", label: "Size M" },
        { value: "l", label: "Size L" },
        { value: "xl", label: "Size XL" },
      ],
      colors: [
        { value: "", label: "Choose an option" },
        { value: "gray", label: "Gray" },
        { value: "red", label: "Red" },
        { value: "black", label: "Black" },
        { value: "blue", label: "Blue" },
      ],
    };
  },

  computed: mapState("products", ["products", "product", "isLoading"]),

  watch: {
    productQuantity(value) {
      if (value < 1) this.productQuantity = 1;
    },
  },

  created() {
    // Get product detail
    this.$store.dispatch("products/getProductById", this.$route.params.id);

    // Get related products
    this.$store.dispatch("products/getProducts", {
      page: 1,
      limit: 8,
      sort: "modifiedAt",
      order: "desc",
    });
  },

  async beforeRouteUpdate(to) {
    this.$store.dispatch("products/getProductById", to.params.id);
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