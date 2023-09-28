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

    <!-- Checkout-Area -->
    <section id="checkout_one" class="ptb-100">
      <div class="container">
        <form @submit.prevent="handleSubmit">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="checkout-area-bg bg-white">
                <div class="check-heading">
                  <h3>Thông Tin Mua Hàng</h3>
                </div>
                <div class="check-out-form">
                  <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="fname">Tên Người Nhận(*)</label>
                        <input
                          type="text"
                          v-model="user.fname"
                          id="fname"
                          name="fname"
                          class="form-control"
                          placeholder="Tên người nhận"
                          :class="{
                            'is-invalid': submitted && $v.user.fname.$error,
                          }"
                        />
                        <div
                          v-if="submitted && !$v.user.fname.required"
                          class="invalid-feedback"
                        >
                          Vui lòng nhập tên người nhận
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="lname">Họ(*)</label>
                        <input
                          type="text"
                          v-model="user.lname"
                          id="lname"
                          name="lname"
                          class="form-control"
                          placeholder="Họ"
                          :class="{
                            'is-invalid': submitted && $v.user.lname.$error,
                          }"
                        />
                        <div
                          v-if="submitted && !$v.user.lname.required"
                          class="invalid-feedback"
                        >
                          Vui lòng nhập họ của người nhận!
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="form-group">
                        <label>Số Điện Thoại(*)<span></span></label>
                        <input
                          type="number"
                          v-model="user.phone"
                          id="phone"
                          name="phone"
                          class="form-control"
                          placeholder="0584843998"
                          :maxlength="10"
                          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                          :class="{
                            'is-invalid': submitted && $v.user.phone.$error,
                          }"
                        />
                        <div
                          v-if="submitted && $v.user.phone.$error"
                          class="invalid-feedback"
                        >
                          <span v-if="!$v.user.phone.required"
                            >Vui lòng nhập số điện thoại!</span
                          >
                          <span v-if="!$v.user.phone.phoneValidator"
                            >Phone is invalid</span
                          >
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="form-group">
                        <label>Địa Chỉ Email <span></span></label>
                        <input
                          type="email"
                          v-model="user.email"
                          id="email"
                          name="email"
                          class="form-control"
                          placeholder="info@gmail.com"
                          :class="{
                            'is-invalid': submitted && $v.user.email.$error,
                          }"
                        />
                        <div
                          v-if="submitted && $v.user.email.$error"
                          class="invalid-feedback"
                        >
                          <span v-if="!$v.user.email.email"
                            >Địa chỉ email không hợp lệ!</span
                          >
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="province">Tỉnh/TP(*) </label>
                        <select
                          class="form-control first_null"
                          v-model="user.province"
                          id="province"
                          :class="{
                            'is-invalid': submitted && $v.user.province.$error,
                          }"
                          @change="onProvinceChange"
                        >
                          <option value="">Vui lòng chọn...</option>
                          <option
                            :value="`${item.code}##${item.name}`"
                            :key="index"
                            v-for="(item, index) in provinceList"
                          >
                            {{ item.name }}
                          </option>
                        </select>
                        <div
                          v-if="submitted && $v.user.province.$error"
                          class="invalid-feedback"
                        >
                          <span v-if="!$v.user.province.required"
                            >Vui lòng chọn tỉnh!</span
                          >
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="district">Quận/Huyện(*)</label>
                        <select
                          class="form-control first_null"
                          v-model="user.district"
                          id="district"
                          :class="{
                            'is-invalid': submitted && $v.user.district.$error,
                          }"
                          @change="onDistrictChange"
                        >
                          <option value="">Vui lòng chọn...</option>
                          <option
                            :value="`${item.code}##${item.name}`"
                            :key="index"
                            v-for="(item, index) in districtList"
                          >
                            {{ item.name }}
                          </option>
                        </select>
                        <div
                          v-if="submitted && $v.user.district.$error"
                          class="invalid-feedback"
                        >
                          <span v-if="!$v.user.district.required"
                            >Vui lòng chọn Quận/Huyện!</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="city">Phường/Xã(*)</label>
                        <select
                          class="form-control first_null"
                          v-model="user.ward"
                          id="ward"
                          :class="{
                            'is-invalid': submitted && $v.user.ward.$error,
                          }"
                        >
                          <option value="">Vui lòng chọn...</option>
                          <option
                            :value="`${item.code}##${item.name}`"
                            :key="index"
                            v-for="(item, index) in wardList"
                          >
                            {{ item.name }}
                          </option>
                        </select>
                        <div
                          v-if="submitted && $v.user.ward.$error"
                          class="invalid-feedback"
                        >
                          <span v-if="!$v.user.ward.required"
                            >Vui lòng chọn Phường/Xã!</span
                          >
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="faddress">Số nhà(*)</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="user.faddress"
                          id="faddress"
                          placeholder="Địa chỉ cụ thể để nhận hàng.."
                          :class="{
                            'is-invalid': submitted && $v.user.faddress.$error,
                          }"
                        />
                        <div
                          v-if="submitted && $v.user.faddress.$error"
                          class="invalid-feedback"
                        >
                          <span v-if="!$v.user.faddress.required"
                            >Vui lòng điền số nhà!</span
                          >
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="messages">Ghi chú</label>
                        <textarea
                          rows="5"
                          class="form-control"
                          v-model="user.messages"
                          id="messages"
                          placeholder="Ghi chú cho đơn hàng"
                        ></textarea>
                      </div>
                    </div>

                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="materialUnchecked"
                          v-model="user.isSavedAddress"
                        />
                        <label class="form-check-label" for="materialUnchecked"
                          >Lưu vào danh sách địa chỉ của tôi</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="order_review box-shadow bg-white">
                <div class="check-heading">
                  <h3>Thông Tin Đơn Hàng</h3>
                </div>
                <div class="table-responsive order_table">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Sản phẩm</th>
                        <th style="min-width: 200px">Tổng tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in cart" :key="index">
                        <td>
                          {{ item.productName }}
                          (<span style="color: #777c87">{{
                            item.variation
                          }}</span
                          >)
                          <br />
                          <span class="product-qty">x 2</span>
                        </td>
                        <td>{{ item.qty * item.price }} vnd</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Tổng tiền sản phẩm</th>
                        <td class="product-subtotal">{{ cartTotal }} vnd</td>
                      </tr>
                      <tr>
                        <th>Phí ship</th>
                        <td>
                          {{ cartTotal > 500000 ? "Miễn phí" : "30000 vnd" }}
                        </td>
                      </tr>
                      <tr>
                        <th>Tổng tiền thanh toán</th>
                        <td class="product-subtotal">
                          {{
                            cartTotal > 500000 ? cartTotal : cartTotal + 30000
                          }}
                          vnd
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              <div class="order_review bg-white">
                <div class="check-heading">
                  <h3>Hình Thức Thanh Toán</h3>
                </div>
                <div class="payment_method">
                  <div class="payment_option">
                    <!-- <div class="custome-radio">
                      <input
                        class="form-check-input"
                        required=""
                        type="radio"
                        name="payment_option"
                        id="exampleRadios3"
                        value="option3"
                        checked=""
                      />
                      <label class="form-check-label" for="exampleRadios3"
                        >Chuyển Khoản</label
                      >
                      <p data-method="option3" class="payment-text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration.
                      </p>
                    </div> -->
                    <div class="custome-radio">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="payment_option"
                        id="exampleRadios4"
                        value="option4"
                      />
                      <label class="form-check-label" for="exampleRadios4"
                        >Quét mã VNPAY</label
                      >
                      <p data-method="option4" class="payment-text">
                        Please send your cheque to Store Name, Store Street,
                        Store Town, Store State / County, Store Postcode.
                      </p>
                    </div>
                    <div class="custome-radio">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="payment_option"
                        id="exampleRadios5"
                        value="option5"
                      />
                      <label class="form-check-label" for="exampleRadios5"
                        >Cod</label
                      >
                      <p data-method="option5" class="payment-text">
                        Pay via PayPal; you can pay with your credit card if you
                        don't have a PayPal account.
                      </p>
                    </div>
                  </div>
                </div>
                <button class="theme-btn-one btn-black-overlay btn_sm">
                  Đặt hàng
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import { mapGetters, mapActions } from "vuex";

const phoneValidator = (value) =>
  /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(value);
export default {
  name: "checkout-1",

  data() {
    return {
      title: "Thông tin đặt hàng",
      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Thông tin đặt hàng",
          to: "/my-account/checkout",
        },
      ],
      // Form Validation
      user: {
        fname: "f",
        lname: "s",
        email: "",
        phone: "0981234567",
        province: "",
        district: "",
        ward: "",
        faddress: "",
        messages: "",
        isSavedAddress: false,
        phuongThucTT: ''
      },
      submitted: false,

      // custom
      provinceList: [],
      districtList: [],
      wardList: [],
      previousAddressId: undefined,
    };
  },
  validations: {
    user: {
      fname: { required },
      lname: { required },
      phone: { required, phoneValidator },
      email: { email },
      province: { required },
      district: { required },
      ward: { required },
      faddress: { required },
    },
  },
  computed: {
    ...mapGetters({
      cart: "cart/cartItems",
      cartTotal: "cart/cartTotalAmount",
    }),
  },
  async mounted() {
    // For scroll page top for every Route
    window.scrollTo(0, 0);
    this.provinceList = await this.getProvinces({
      p: undefined,
    });
  },
  methods: {
    ...mapActions({
      getProvinces: "address/getProvinces",
    }),
    async onProvinceChange() {
      this.districtList = [];
      this.wardList = [];
      this.user.district = "";
      this.user.ward = "";
      if (this.user.province.split("##").length == 2) {
        const province = await this.getProvinces({
          p: this.user.province.split("##")[0],
        });
        this.districtList = province[0].districts;
        console.log("on province change: ", province[0]);
      }
    },
    async onDistrictChange() {
      this.wardList = [];
      this.user.ward = "";
      if (this.user.district.split("##").length == 2) {
        const district = this.districtList.filter(
          (item) => this.user.district.split("##")[0] == item.code
        );
        this.wardList = district[0].wards;
        console.log("on district change: ", district[0]);
      }
    },
    handleSubmit(e) {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log(this.$v);
        alert("pls check agains");
        return;
      }

      const payload = {
        gioHangItemIds: this.cart.map(item => item.id),
        phuongThucTT: "",
        note: this.user.note,
        hoTenNguoiNhan: this.user.fname,
        soDienThoaiNhanHang: this.user.phone,
        diaChiNhanHang: undefined,
        diaChiId: undefined,
      };
      if (this.previousAddressId) payload.diaChiId = this.previousAddressId;
      else
        payload.diaChiNhanHang = `${this.user.faddress}__${this.user.province}__${this.user.district}__${this.user.ward}`;

      console.log('order payload: ', payload)
      // alert("Order placed Successfully! Thank you for shopping with us.");
      // this.$router.push("trang-thai-thanh-toan");
    },
  },

  // Page head() Title, description for SEO
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Checkout page - AndShop Ecommerce Vue js, Nuxt js Template",
        },
      ],
    };
  },
};
</script>
