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
                      class="
                        btn-num-product-down
                        color1
                        flex-c-m
                        size7
                        bg8
                        eff2
                      "
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
              @click="updateCart"
            >
              Update Cart
            </button>
          </div>
        </div>

        <!-- Total -->
        <CartTotals :sub-total="subTotal" />
      </div>
    </section>
  </div>
</template>

<script>
import CartTotals from "./CartTotals.vue";

export default {
  name: "Cart",
  components: {
    CartTotals,
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
      subTotal: 0,
    };
  },
  // computed: {
  //   subTotal() {
  //     return this.products.reduce(
  //       (totalPrice, product) =>
  //         (totalPrice + product.quantity * product.price),
  //       0
  //     );
  //   },
  // },
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
    updateCart() {
      this.subTotal = this.products.reduce(
        (totalPrice, product) => totalPrice + product.quantity * product.price,
        0
      );
    },
  },
};
</script>