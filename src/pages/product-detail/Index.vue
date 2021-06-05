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

          <div class="p-b-45">
            <span class="s-text8 m-r-35">SKU: {{ product.id }}</span>
            <span class="s-text8">Categories: Mug, Design</span>
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

        <ProductsCarousel :products="relatedProducts" />
      </div>
    </section>
  </div>
</template>

<script>
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
      product: {
        id: "MUG-01",
        name: "Boxy T-Shirt with Roll Sleeve Detail",
        shortDescription:
          "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
        price: 22,
      },
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