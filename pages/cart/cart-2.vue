<template>
  <div>
    <!-- Banner Area -->
    <section id="common_banner_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="common_banner_text">
              <h2>{{ this.title }}</h2>
              <b-breadcrumb
                :items="breadcrumbItems"
                class="bg-transparent"
              ></b-breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cart-Area -->
    <section id="cart_area_two" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="table_desc border-bottom-0">
              <div class="table_page table-responsive">
                <table>
                  <!-- Start Cart Table Head -->
                  <thead>
                    <tr>
                      <th class="product_thumb">Ảnh</th>
                      <th class="product_name">Sản phẩm</th>
                      <th class="product-price">Giá</th>
                      <th class="product_quantity">Số lượng</th>
                      <th class="product_total">Tổng tiền</th>
                      <th class="product_remove">Hành động</th>
                    </tr>
                  </thead>
                  <!-- End Cart Table Head -->
                  <tbody v-if="cart.length">
                    <!-- Start Cart Single Item-->
                    <tr v-for="(item, index) in cart" :key="index">
                      <td class="product_thumb">
                        <nuxt-link :to="{ path: '/product/' + item.id }">
                          <img
                            :src="getImageUrl(item.images[0].src)"
                            alt="img"
                          />
                        </nuxt-link>
                      </td>
                      <td class="product_name">
                        <nuxt-link :to="{ path: '/product/' + item.id }">{{
                          item.title
                        }}</nuxt-link>
                      </td>
                      <td class="product-price">
                        ${{ discountedPrice(item) }}
                      </td>
                      <td class="product_quantity">
                        <div class="product_count_one">
                          <b-form-spinbutton
                            id="sb-inline"
                            v-model="item.quantity"
                            inline
                            class="border-0"
                          ></b-form-spinbutton>
                        </div>
                      </td>
                      <td class="product_total">
                        ${{ discountedPrice(item) * item.quantity }}
                      </td>

                      <td class="product_remove">
                        <button
                          @click="removeCartItem(index)"
                          class="bg-transparent remove-btn"
                        >
                          <i class="far fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                    <!-- End Cart Single Item-->
                  </tbody>
                  <tbody v-else>
                    <tr>
                      <td class="border-0">Giỏ hàng hiện chưa có sản phẩm nào!</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="coupon_inner_two">
              <input v-model="discountCode" class="mb-2" placeholder="Mã code" type="text" />
              <button
                type="submit"
                class="theme-btn-one btn-black-overlay btn_sm"
                @click="checkDiscountCode"
              >
                Kiểm tra
              </button>
            </div>
          </div>
          <div class="col-lg-12 col-md-12">
            <div
              class="coupon_code right"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3>Tổng đơn hàng</h3>
              <div class="coupon_inner">
                <div class="cart_subtotal">
                  <p>Tổng tiền</p>
                  <p class="cart_amount">${{ cartTotal }}</p>
                </div>
                <div class="cart_subtotal">
                  <p>Giảm giá</p>
                  <p class="cart_amount">$0</p>
                </div>
                <div class="cart_subtotal">
                  <p>Phí ship</p>
                  <p class="cart_amount">$25.00</p>
                </div>
                <!-- <a href="#">Calculate shipping</a> -->

                <div class="cart_subtotal">
                  <p>Tổng tiền thanh toán</p>
                  <p class="cart_amount">${{ cartTotal + 25 }}</p>
                </div>
                <div class="checkout_btn">
                  <nuxt-link
                    to="/my-account/checkout-1"
                    class="theme-btn-one btn-black-overlay btn_sm"
                    >Đặt hàng</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "cart-2",

  data() {
    return {
      title: "Giỏ hàng",

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Giỏ hàng",
          to: "/cart",
        },
      ],
      discountCode: "",
      // Product Quanity Increment/ Decrement Data
      quantity: 1,
    };
  },
  computed: {
    // Cart Total Price
    ...mapGetters({
      cart: "cart/cartItems",
      cartTotal: "cart/cartTotalAmount",
    }),
  },
  mounted() {
    // For scroll page top for every Route
    window.scrollTo(0, 0);
  },
  methods: {
    getImageUrl(path) {
      return require("@/assets/img/product-image/" + path);
    },
    // Discount Price
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount) / 100;
      return price;
    },
    // For Delete/Remove Product Item
    removeCartItem: function (product) {
      this.$store.dispatch("cart/removeCartItem", product);
    },
    checkDiscountCode(){
      if(!this.discountCode)
        alert("Vui lòng nhập mã giảm giá!");
      else
      alert("discount code: " + this.discountCode)
    }
  },

  // Page head() Title, description for SEO
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Cart page - AndShop Ecommerce Vue js, Nuxt js Template",
        },
      ],
    };
  },
};
</script>