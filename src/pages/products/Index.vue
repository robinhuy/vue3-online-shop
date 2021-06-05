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
            <div class="leftbar p-r-20 p-r-0-sm">
              <!--  -->
              <h4 class="m-text14 p-b-7">Categories</h4>

              <ul class="p-b-54">
                <li
                  class="p-t-4"
                  v-for="category in categories"
                  :key="category.id"
                >
                  <a href="#" class="s-text13">{{ category.name }}</a>
                </li>
              </ul>

              <!--  -->
              <h4 class="m-text14 p-b-32">Filters</h4>

              <div class="filter-price p-t-22 p-b-50 bo3">
                <div class="m-text15 p-b-17">Price</div>

                <div class="wra-filter-bar">
                  <div id="filter-bar"></div>
                </div>

                <div class="flex-sb-m flex-w p-t-16">
                  <div class="w-size11">
                    <!-- Button -->
                    <button
                      class="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4"
                    >
                      Filter
                    </button>
                  </div>

                  <div class="s-text3 p-t-10 p-b-10">
                    Range: $<span id="value-lower">610</span> - $<span
                      id="value-upper"
                      >980</span
                    >
                  </div>
                </div>
              </div>

              <div class="filter-color p-t-22 p-b-50 bo3">
                <div class="m-text15 p-b-12">Color</div>

                <ul class="flex-w">
                  <li class="m-r-10">
                    <input
                      class="checkbox-color-filter"
                      id="color-filter1"
                      type="checkbox"
                      name="color-filter1"
                    />
                    <label
                      class="color-filter color-filter1"
                      for="color-filter1"
                    ></label>
                  </li>

                  <li class="m-r-10">
                    <input
                      class="checkbox-color-filter"
                      id="color-filter2"
                      type="checkbox"
                      name="color-filter2"
                    />
                    <label
                      class="color-filter color-filter2"
                      for="color-filter2"
                    ></label>
                  </li>

                  <li class="m-r-10">
                    <input
                      class="checkbox-color-filter"
                      id="color-filter3"
                      type="checkbox"
                      name="color-filter3"
                    />
                    <label
                      class="color-filter color-filter3"
                      for="color-filter3"
                    ></label>
                  </li>

                  <li class="m-r-10">
                    <input
                      class="checkbox-color-filter"
                      id="color-filter4"
                      type="checkbox"
                      name="color-filter4"
                    />
                    <label
                      class="color-filter color-filter4"
                      for="color-filter4"
                    ></label>
                  </li>

                  <li class="m-r-10">
                    <input
                      class="checkbox-color-filter"
                      id="color-filter5"
                      type="checkbox"
                      name="color-filter5"
                    />
                    <label
                      class="color-filter color-filter5"
                      for="color-filter5"
                    ></label>
                  </li>

                  <li class="m-r-10">
                    <input
                      class="checkbox-color-filter"
                      id="color-filter6"
                      type="checkbox"
                      name="color-filter6"
                    />
                    <label
                      class="color-filter color-filter6"
                      for="color-filter6"
                    ></label>
                  </li>

                  <li class="m-r-10">
                    <input
                      class="checkbox-color-filter"
                      id="color-filter7"
                      type="checkbox"
                      name="color-filter7"
                    />
                    <label
                      class="color-filter color-filter7"
                      for="color-filter7"
                    ></label>
                  </li>
                </ul>
              </div>

              <div class="search-product pos-relative bo4 of-hidden">
                <input
                  class="s-text7 size6 p-l-23 p-r-50"
                  type="text"
                  name="search-product"
                  placeholder="Search Products..."
                />

                <button
                  class="flex-c-m size5 ab-r-m color2 color0-hov trans-0-4"
                >
                  <i class="fs-12 fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-8 col-lg-9 p-b-50">
            <!--  -->
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
            <div class="row">
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
            </div>

            <Pagination />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Select2 from "@/components/Select2.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "Products",
  components: {
    Select2,
    Pagination
  },
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "All",
        },
        {
          id: 2,
          name: "Women",
        },
        {
          id: 3,
          name: "Men",
        },
        {
          id: 4,
          name: "Kids",
        },
        {
          id: 5,
          name: "Accesories",
        },
      ],
      products: [
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