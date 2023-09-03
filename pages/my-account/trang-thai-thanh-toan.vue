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

    <section class="p-5 text-center">
      <h3>Đơn hàng đã được tạo thành công!</h3>
      <p class="mb-3">
        Mã đơn hàng của bạn là: #883738
        <br />
        Chúng tôi sẽ liên hệ lại với bạn để xác nhận đơn hàng. Cảm ơn quý khách đã sử dụng dịch vụ!
      </p>
     

      <div class="order_review box-shadow bg-white">
        <div class="check-heading">
          <h3>Chi Tiết Đơn Hàng</h3>
        </div>
        <div class="table-responsive order_table">
          <table class="table">
            <thead>
              <tr>
                <th>Sản phẩm</th>
                <th>Tổng tiền</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Blue Dress For Woman
                  <span class="product-qty">x 2</span>
                </td>
                <td>$90.00</td>
              </tr>
              <tr>
                <td>
                  Lether Gray Tuxedo
                  <span class="product-qty">x 1</span>
                </td>
                <td>$55.00</td>
              </tr>
              <tr>
                <td>
                  Woman Full Sliv Dresss
                  <span class="product-qty">x 3</span>
                </td>
                <td>$204.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Tổng tiền sản phẩm</th>
                <td class="product-subtotal">$349.00</td>
              </tr>
              <tr>
                <th>Phí ship</th>
                <td>Free Shipping</td>
              </tr>
              <tr>
                <th>Tổng tiền thanh toán</th>
                <td class="product-subtotal">$349.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <button class="theme-btn-one btn-black-overlay btn_sm">
                  <router-link to="/"> Tiếp Tục Mua Sắm </router-link>
                </button>
    </section>
  </div>
</template>

<script>
export default {
  name: "checkout-1",

  data() {
    return {
      title: "Thanh toan ok",
      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Checkout",
          to: "/my-account/checkout",
        },
      ],
    };
  },
  mounted() {
    // For scroll page top for every Route
    window.scrollTo(0, 0);
  },
  methods: {},

  // Page head() Title, description for SEO
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Thanh toan ok",
        },
      ],
    };
  },
};
</script>
