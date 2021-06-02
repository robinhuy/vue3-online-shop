<template>
  <div>
    <!-- Title Page -->
    <section
      class="bg-title-page p-t-40 p-b-50 flex-col-c-m"
      :style="{
        backgroundImage:
          'url(' + require('@/assets/images/heading-pages-01.jpg') + ')',
      }"
    >
      <h2 class="l-text2 t-center">Cart</h2>
    </section>

    <!-- Cart -->
    <section class="cart bgwhite p-t-70 p-b-100">
      <div class="container">
        <!-- Cart item -->
        <div class="container-table-cart pos-relative">
          <div class="wrap-table-shopping-cart bgwhite">
            <table class="table-shopping-cart">
              <tr class="table-head">
                <th class="column-1"></th>
                <th class="column-2">Product</th>
                <th class="column-3">Price</th>
                <th class="column-4 p-l-70">Quantity</th>
                <th class="column-5">Total</th>
              </tr>

              <tr
                class="table-row"
                v-for="product in products"
                :key="product.id"
              >
                <td class="column-1">
                  <div class="cart-img-product b-rad-4 o-f-hidden">
                    <img :src="product.image" alt="IMG-PRODUCT" />
                  </div>
                </td>
                <td class="column-2">{{ product.name }}</td>
                <td class="column-3">${{ product.price }}</td>
                <td class="column-4">
                  <div class="flex-w bo5 of-hidden w-size17">
                    <button
                      class="btn-num-product-down color1 flex-c-m size7 bg8 eff2"
                      @click="decreaseQuantity(product.id)"
                    >
                      <i class="fs-12 fa fa-minus" aria-hidden="true"></i>
                    </button>

                    <input
                      class="size8 m-text18 t-center num-product"
                      type="number"
                      name="num-product1"
                      v-model.number="product.quantity"
                    />

                    <button
                      class="btn-num-product-up color1 flex-c-m size7 bg8 eff2"
                      @click="increaseQuantity(product.id)"
                    >
                      <i class="fs-12 fa fa-plus" aria-hidden="true"></i>
                    </button>
                  </div>
                </td>
                <td class="column-5">${{ product.totalPrice }}</td>
              </tr>
            </table>
          </div>
        </div>

        <div
          class="flex-w flex-sb-m p-t-25 p-b-25 bo8 p-l-35 p-r-60 p-lr-15-sm"
        >
          <div class="flex-w flex-m w-full-sm">
            <div class="size11 bo4 m-r-10">
              <input
                class="sizefull s-text7 p-l-22 p-r-22"
                type="text"
                name="coupon-code"
                placeholder="Coupon Code"
              />
            </div>

            <div class="size12 trans-0-4 m-t-10 m-b-10 m-r-10">
              <!-- Button -->
              <button
                class="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4"
              >
                Apply coupon
              </button>
            </div>
          </div>

          <div class="size10 trans-0-4 m-t-10 m-b-10">
            <!-- Button -->
            <button
              class="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4"
            >
              Update Cart
            </button>
          </div>
        </div>

        <!-- Total -->
        <div
          class="bo9 w-size18 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-r-0 m-l-auto p-lr-15-sm"
        >
          <h5 class="m-text20 p-b-24">Cart Totals</h5>

          <!--  -->
          <div class="flex-w flex-sb-m p-b-12">
            <span class="s-text18 w-size19 w-full-sm"> Subtotal: </span>

            <span class="m-text21 w-size20 w-full-sm"> $39.00 </span>
          </div>

          <!--  -->
          <div class="flex-w flex-sb bo10 p-t-15 p-b-20">
            <span class="s-text18 w-size19 w-full-sm"> Shipping: </span>

            <div class="w-size20 w-full-sm">
              <p class="s-text8 p-b-23">
                There are no shipping methods available. Please double check
                your address, or contact us if you need any help.
              </p>

              <span class="s-text19"> Calculate Shipping </span>

              <div class="bo4 w-size21 m-t-8 m-b-12">
                <Select2
                  :options="[
                    { value: '', label: 'Select a country...' },
                    { value: 'us', label: 'US' },
                    { value: 'uk', label: 'UK' },
                    { value: 'japan', label: 'Japan' },
                  ]"
                />
              </div>

              <div class="size13 bo4 m-b-12">
                <input
                  class="sizefull s-text7 p-l-15 p-r-15"
                  type="text"
                  name="state"
                  placeholder="State /  country"
                />
              </div>

              <div class="size13 bo4 m-b-22">
                <input
                  class="sizefull s-text7 p-l-15 p-r-15"
                  type="text"
                  name="postcode"
                  placeholder="Postcode / Zip"
                />
              </div>

              <div class="size14 trans-0-4 m-b-10">
                <!-- Button -->
                <button
                  class="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4"
                >
                  Update Totals
                </button>
              </div>
            </div>
          </div>

          <!--  -->
          <div class="flex-w flex-sb-m p-t-26 p-b-30">
            <span class="m-text22 w-size19 w-full-sm"> Total: </span>

            <span class="m-text21 w-size20 w-full-sm"> $39.00 </span>
          </div>

          <div class="size15 trans-0-4">
            <!-- Button -->
            <button
              class="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Select2 from "@/components/Select2.vue";

export default {
  name: "Cart",
  components: {
    Select2,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          image: require("@/assets/images/item-10.jpg"),
          name: "Men Tshirt",
          price: 36.0,
          quantity: 1,
          totalPrice: 36.0,
        },
        {
          id: 2,
          image: require("@/assets/images/item-05.jpg"),
          name: "Mug Adventure",
          price: 16.0,
          quantity: 1,
          totalPrice: 16.0,
        },
      ],
    };
  },
  watch: {
    products: {
      handler(value) {
        for (let product of value) {
          if (product.quantity < 1) {
            product.quantity = 1;
          }
          product.totalPrice = product.price * product.quantity;
        }
      },
      deep: true,
    },
  },
  methods: {
    decreaseQuantity(productId) {
      let product = this.products.find((product) => product.id === productId);
      if (product.quantity > 1) product.quantity--;
    },
    increaseQuantity(productId) {
      let product = this.products.find((product) => product.id === productId);
      product.quantity++;
    },
  },
};
</script>