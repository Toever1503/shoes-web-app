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
    <section id="cart_area_four" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="table_desc">
              <div class="table_page table-responsive">
                <table>
                  <!-- Start Cart Table Head -->
                  <thead>
                    <tr>
                      <th class="product_remove">Hành động</th>
                      <th class="product_thumb">Ảnh</th>
                      <th class="product_name">Sản phẩm</th>
                      <th class="product-price">Giá</th>
                      <th class="product_quantity">Số lượng</th>
                      <th class="product_total">Tổng tiền</th>
                    </tr>
                  </thead>
                  <!-- End Cart Table Head -->
                  <tbody>
                    <!-- Start Cart Single Item-->
                    <tr>
                      <td class="product_remove">
                        <a href="#"><i class="far fa-trash-alt"></i></a>
                      </td>
                      <td class="product_thumb">
                        <nuxt-link to="/product/product-single-2">
                          <img
                            :src="require('@/assets/img/product-image/1.png')"
                            alt="img"
                          />
                        </nuxt-link>
                      </td>
                      <td class="product_name">
                        <a href="product-single.html">Handbag fringilla</a>
                      </td>
                      <td class="product-price">$65.00</td>
                      <td class="product_quantity">
                        <label>Quantity</label>
                        <input min="1" max="100" value="1" type="number" />
                      </td>
                      <td class="product_total">$130.00</td>
                    </tr>
                    <!-- End Cart Single Item-->
                    <!-- Start Cart Single Item-->
                    <tr>
                      <td class="product_remove">
                        <a href="#"><i class="far fa-trash-alt"></i></a>
                      </td>
                      <td class="product_thumb">
                        <nuxt-link to="/product/product-single-2">
                          <img
                            :src="require('@/assets/img/product-image/2.png')"
                            alt="img"
                          />
                        </nuxt-link>
                      </td>
                      <td class="product_name">
                        <a href="product-single.html">Handbags justo</a>
                      </td>
                      <td class="product-price">$90.00</td>
                      <td class="product_quantity">
                        <label>Quantity</label>
                        <input min="1" max="100" value="1" type="number" />
                      </td>
                      <td class="product_total">$180.00</td>
                    </tr>
                    <!-- End Cart Single Item-->
                    <!-- Start Cart Single Item-->
                    <tr>
                      <td class="product_remove">
                        <a href="#"><i class="far fa-trash-alt"></i></a>
                      </td>
                      <td class="product_thumb">
                        <nuxt-link to="/product/product-single-2">
                          <img
                            :src="require('@/assets/img/product-image/3.png')"
                            alt="img"
                          />
                        </nuxt-link>
                      </td>
                      <td class="product_name">
                        <a href="product-single.html">Handbag elit</a>
                      </td>
                      <td class="product-price">$80.00</td>
                      <td class="product_quantity">
                        <label>Quantity</label>
                        <input min="1" max="100" value="1" type="number" />
                      </td>
                      <td class="product_total">$160.00</td>
                    </tr>
                    <!-- End Cart Single Item-->
                  </tbody>
                </table>
              </div>
            </div>
            <div class="cart_submit">
              <button
                class="theme-btn-one btn-black-overlay btn_sm"
                type="submit"
              >
                update cart
              </button>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="coupon_code left">
              <h3>Mã giảm giá</h3>
              <div class="coupon_inner">
                <p>Vui lòng nhập mã giảm giá nếu bạn có.</p>
                <input v-model="discountCode" class="mb-2" placeholder="Coupon code" type="text" />
                <button
                  type="submit"
                  class="theme-btn-one btn-black-overlay btn_sm"
                  @click="checkDiscountCode"
                >
                  Kiểm tra
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-12">
            <div
              class="coupon_code right"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3>Tổng đơn hàng</h3>
              <div class="coupon_inner">
                <div class="cart_subtotal">
                  <p>Tổng tiền</p>
                  <p class="cart_amount">$215.00</p>
                </div>
                <div class="cart_subtotal">
                  <p>Giảm giá</p>
                  <p class="cart_amount">$0</p>
                </div>
                <div class="cart_subtotal">
                  <p>Phí ship</p>
                  <p class="cart_amount">$255.00</p>
                </div>
                <!-- <a href="#!">Calculate shipping</a> -->
                <div class="cart_subtotal">
                  <p>Tổng tiền thanh toán</p>
                  <p class="cart_amount">$215.00</p>
                </div>
                <div class="checkout_btn">
                  <a
                    href="checkout.html"
                    class="theme-btn-one btn-black-overlay btn_sm"
                    >Đặt hàng</a
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
  methods: {
    checkDiscountCode(){
      if(!this.discountCode)
        alert("Vui lòng nhập mã giảm giá!");
      else
      alert("discount code: " + this.discountCode)
    }
  }
};
</script>