<template>
  <div>
    <!-- Title Page -->
    <section
      class="bg-title-page p-t-50 p-b-40 flex-col-c-m"
      :style="{
        backgroundImage:
          'url(' + require('@/assets/images/heading-pages-02.jpg') + ')',
      }"
    >
      <h2 class="l-text2 t-center">Women</h2>
      <p class="m-text13 t-center">New Arrivals Women Collection 2018</p>
    </section>

    <!-- Content page -->
    <section class="bgwhite p-t-55 p-b-65">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-4 col-lg-3 p-b-50">
            <LeftBar />
          </div>

          <div class="col-sm-6 col-md-8 col-lg-9 p-b-50">
            <div class="flex-sb-m flex-w p-b-35">
              <div class="flex-w">
                <div class="bo4 w-size12 m-t-5 m-b-5 m-r-10">
                  <Select2
                    :options="[
                      { value: '', label: 'Default Sorting' },
                      { value: 'popularity', label: 'Popularity' },
                      { value: 'price-asc', label: 'Price: low to high' },
                      { value: 'price-desc', label: 'Price: high to low' },
                    ]"
                  />
                </div>

                <div class="bo4 w-size12 m-t-5 m-b-5 m-r-10">
                  <Select2
                    :options="[
                      { value: '', label: 'Price' },
                      { value: '0-50', label: '$0.00 - $50.00' },
                      { value: '50-100', label: '$50.00 - $100.00' },
                      { value: '100-150', label: '$100.00 - $150.00' },
                      { value: '150-200', label: '$150.00 - $200.00' },
                      { value: '200+', label: '$200.00+' },
                    ]"
                  />
                </div>
              </div>

              <span class="s-text8 p-t-5 p-b-5">
                Showing 1–12 of 16 results
              </span>
            </div>

            <!-- Product -->
            <div v-if="isLoading" data-loader="ball-scale"></div>

            <div v-else class="row">
              <div
                class="col-sm-12 col-md-6 col-lg-4 p-b-50"
                v-for="product in products"
                :key="product.id"
              >
                <!-- Block2 -->
                <div class="block2">
                  <div
                    class="block2-img wrap-pic-w of-hidden pos-relative"
                    :class="{
                      'block2-labelnew': product.isNew,
                      'block2-labelsale': product.isSale,
                    }"
                  >
                    <img
                      :src="'http://localhost:3000' + product.image"
                      alt="IMG-PRODUCT"
                    />

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
                          class="
                            flex-c-m
                            size1
                            bg4
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
            </div>

            <Pagination />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import Select2 from "@/components/Select2.vue";
import Pagination from "@/components/Pagination.vue";
import LeftBar from "./LeftBar.vue";

export default {
  name: "Products",
  components: {
    Select2,
    Pagination,
    LeftBar,
  },
  data() {
    return {
      isLoading: true,
      products: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        this.products = response.data[0];
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => (this.isLoading = false));
  },
};
</script>