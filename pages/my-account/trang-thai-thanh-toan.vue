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

    <section class="p-5 text-center" v-if="orderDetail">
      <h3>Đơn hàng đã được tạo thành công!</h3>
      <p class="mb-3">
        Mã đơn hàng của bạn là: #{{ orderDetail.maDonHang }}
        <br />
        Chúng tôi sẽ liên hệ lại với bạn để xác nhận đơn hàng. Cảm ơn quý khách
        đã sử dụng dịch vụ!
      </p>

      <div class="order_review box-shadow bg-white">
        <div class="check-heading">
          <h3>Chi Tiết Đơn Hàng</h3>
        </div>
        <div class="table-responsive order_table">
          <table class="table">
            <thead>
              <tr>
                <th style="width: 50%">Sản phẩm</th>
                <th>Đơn giá</th>
                <th>Tổng tiền</th>
              </tr>
            </thead>
            <tbody>
              <tr
                :key="index"
                v-for="(item, index) in orderDetail.chiTietDonHang"
              >
                <td>
                  {{ item.sanPham.tieuDe }}
                  ({{ item.motaPhanLoai }})
                  <span class="product-qty">x {{ item.soLuong }}</span>
                </td>
                <td>{{ item.giaTien }} vnd</td>
                <td>{{ item.soLuong * item.giaTien }} vnd</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Tổng tiền sản phẩm</th>
                <td></td>
                <td class="product-subtotal" >{{ orderDetail.tongTienSp }} vnd</td>
              </tr>
              <tr>
                <th>Phí ship</th>
                <td></td>
                <td>Free Shipping</td>
              </tr>
              <tr>
                <th>Giảm giá</th>
                <td></td>
                <td>0 vnd</td>
              </tr>
              <tr>
                <th>Tổng tiền thanh toán</th>
                <td></td>
                <td class="product-subtotal" >
                  {{ orderDetail.tongGiaCuoiCung }} vnd
                </td>
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
import PaymentService from "../../services/PaymentService.js";

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

      // custom by shiki
      orderDetail: undefined,
    };
  },
  mounted() {
    // For scroll page top for every Route
    window.scrollTo(0, 0);
    if (this.$route.query.id)
      PaymentService.getDetailOrder(this.$route.query.id)
        .then((res) => {
          console.log("detail order: ", res.data);
          this.orderDetail = res.data;
        })
        .catch((err) => {
          console.log("get detail order failed: ", err);
          this.$router.push("/404");
        });
    else this.$router.push("/404");
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
