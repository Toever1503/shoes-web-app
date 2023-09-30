<template>
  <div>
    <!-- Banner Area -->
    <section id="common_banner_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="common_banner_text">
              <h2>Shop</h2>
              <b-breadcrumb
                :items="breadcrumbItems"
                class="bg-transparent"
              ></b-breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Single Area -->
    <section id="product_single_one" class="ptb-100">
      <div class="container">
        <div class="row area_boxed">
          <div class="col-lg-4">
            <div class="product_single_one_img">
              <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
                <div class="swiper-wrapper" v-if="productDetail.anhPhu">
                  <div
                    class="swiper-slide"
                    v-for="(product, index) in productDetail.anhPhu"
                    :key="index"
                  >
                    <inner-image-zoom
                      :src="product.url"
                      :id="product.id"
                      :zoomSrc="product.url"
                      moveType="drag"
                      className="product-image-zoom"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="product_details_right_one">
              <div class="modal_product_content_one">
                <h3 class="text-capitalize">{{ getDetail.title }}</h3>
                <div v-if="getDetail.rating == 5" class="reviews_rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <span>(5 Customer Review)</span>
                </div>
                <div v-else-if="getDetail.rating == 4" class="reviews_rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star"></i>
                  <span>(4 Customer Review)</span>
                </div>
                <div v-else-if="getDetail.rating == 3" class="reviews_rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <span>(3 Customer Review)</span>
                </div>
                <div v-else-if="getDetail.rating == 2" class="reviews_rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <span>(2 Customer Review)</span>
                </div>
                <div v-else-if="getDetail.rating == 1" class="reviews_rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <span>(1 Customer Review)</span>
                </div>
                <div v-else class="product-review">
                  <span>No Rating</span>
                </div>

                <h4>
                  {{ getDetail.giaMoi }}vnd
                  <del>{{ getDetail.giaCu }}vnd</del>
                </h4>

                <!-- <p>{{ getDetail.moTa }}</p> -->

                <div class="d-flex">
                  <div
                    class="variable-single-item mr-5"
                    v-if="
                      productDetail.loaiBienThe == 'BOTH' ||
                      productDetail.loaiBienThe == 'COLOR'
                    "
                  >
                    <span>Màu</span>

                    <select
                      v-model="variationVal1"
                      style="width: 110px"
                      @change="onThayDoiBienTheMau"
                    >
                      <option value="">Chọn màu</option>
                      <option
                        :key="index"
                        :value="item.id"
                        v-for="(item, index) in variation1List"
                      >
                        {{ item.giaTri }}
                      </option>
                    </select>
                  </div>

                  <div
                    class="variable-single-item"
                    v-if="
                      productDetail.loaiBienThe == 'BOTH' ||
                      productDetail.loaiBienThe == 'SIZE'
                    "
                  >
                    <span>Size</span>

                    <select
                      v-model="variationVal2"
                      style="width: 100px"
                      @change="onThayDoiBienTheSize"
                    >
                      <option value="">Chọn size</option>
                      <option
                        :key="index"
                        :value="item.id"
                        v-for="(item, index) in variation2List"
                      >
                        {{ item.giaTri }}
                      </option>
                    </select>
                  </div>
                </div>

                <form
                  id="product_count_form_two"
                  class="d-flex justify-center align-items-center"
                >
                  <div class="product_count_one mr-3">
                    <b-form-spinbutton
                      id="sb-inline"
                      min="1"
                      :max="variationStockCnt"
                      v-model="quantity"
                      inline
                      class="border-0"
                    ></b-form-spinbutton>
                  </div>
                  <span v-if="variationStockCnt > 0">
                    {{ variationStockCnt }} sản phẩm có sẵn
                  </span>
                  <span v-else>
                    <span> Sản phẩm hiện đang hết hàng </span>
                  </span>
                </form>
                <div class="links_Product_areas">
                  <ul>
                    <li>
                      <button
                        @click="addToWishlist(getDetail)"
                        class="action wishlist bg-transparent"
                        title="Wishlist"
                      >
                        <i class="far fa-heart mr-1"></i>Add To Wishlist
                      </button>
                    </li>

                    <!-- <li>
                      <button
                        @click="addToCompare(getDetail)"
                        class="action compare bg-transparent"
                        title="Compare"
                      >
                        <i class="fas fa-exchange-alt mr-1"></i>Add To Compare
                      </button>
                    </li> -->
                  </ul>
                  <button
                    @click="addToCart(getDetail)"
                    class="theme-btn-one btn-black-overlay btn_sm"
                  >
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="product_details_tabs">
              <b-tabs>
                <b-tab title="Description" active id="description">
                  <div class="product_description">
                    {{ getDetail.moTa }}
                  </div>
                </b-tab>

                <!-- disable -->
                <b-tab
                  title="Additional Information"
                  id="additional"
                  v-if="false"
                >
                  <div class="product_additional">
                    <ul>
                      <li>Weight: <span>400 g</span></li>
                      <li>Dimensions: <span>10 x 10 x 15 cm</span></li>
                      <li>
                        Materials: <span> 60% cotton, 40% polyester</span>
                      </li>
                      <li>
                        Other Info:
                        <span>
                          American heirloom jean shorts pug seitan
                          letterpress</span
                        >
                      </li>
                    </ul>
                  </div>
                </b-tab>

                <b-tab title="Reviews" id="review">
                  <div class="product_reviews">
                    <ul>
                      <li class="media">
                        <div class="media-img">
                          <img
                            :src="require('@/assets/img/user/user1.png')"
                            alt="img"
                          />
                        </div>
                        <div class="media-body">
                          <div class="media-header">
                            <div class="media-name">
                              <h4>Sara Anela</h4>
                              <p>5 days ago</p>
                            </div>
                            <div class="post-share">
                              <a href="#!" class="replay">Replay</a>
                              <a href="#!" class="">Report</a>
                            </div>
                          </div>
                          <div class="media-pragraph">
                            <div class="product_review_strat">
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                            </div>
                            <p>
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque Praesent sapien massa,
                              convallis a pellentesque nec, egestas non nisi.
                              Cras ultricies ligula sed magna dictum porta.
                              Vestibulum ac diam sit amet quam vehicula
                              elementum sed sit amet dui. Vivamus magna justo.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-img">
                          <img
                            :src="require('@/assets/img/user/user2.png')"
                            alt="img"
                          />
                        </div>
                        <div class="media-body">
                          <div class="media-header">
                            <div class="media-name">
                              <h4>Sara Anela</h4>
                              <p>5 days ago</p>
                            </div>
                            <div class="post-share">
                              <a href="#!" class="replay">Replay</a>
                              <a href="#!" class="">Report</a>
                            </div>
                          </div>
                          <div class="media-pragraph">
                            <div class="product_review_strat">
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                            </div>
                            <p>
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque Praesent sapien massa,
                              convallis a pellentesque nec, egestas non nisi.
                              Cras ultricies ligula sed magna dictum porta.
                              Vestibulum ac diam sit amet quam vehicula
                              elementum sed sit amet dui. Vivamus magna justo.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-img">
                          <img
                            :src="require('@/assets/img/user/user3.png')"
                            alt="img"
                          />
                        </div>
                        <div class="media-body">
                          <div class="media-header">
                            <div class="media-name">
                              <h4>Sara Anela</h4>
                              <p>5 days ago</p>
                            </div>
                            <div class="post-share">
                              <a href="#!" class="replay">Replay</a>
                              <a href="#!" class="">Report</a>
                            </div>
                          </div>
                          <div class="media-pragraph">
                            <div class="product_review_strat">
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                            </div>
                            <p>
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque Praesent sapien massa,
                              convallis a pellentesque nec, egestas non nisi.
                              Cras ultricies ligula sed magna dictum porta.
                              Vestibulum ac diam sit amet quam vehicula
                              elementum sed sit amet dui. Vivamus magna justo.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </b-tab>
              </b-tabs>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <RelatedProducts :productType="productType" :productId="productId" /> -->

    <!-- Instagram Arae -->
    <InstagramArea />
  </div>
</template>

<script>
import ProductBox1 from "~/components/product-box/ProductBox1";
import InstagramArea from "~/components/instagram/InstagramArea";
import RelatedProducts from "~/components/widgets/RelatedProducts";
import ProductService from "../../services/ProductService";

export default {
  name: "product-single",
  components: {
    ProductBox1,
    InstagramArea,
    RelatedProducts,
  },
  data() {
    return {
      activeColor: "",
      selectedSize: "",
      qty: "",
      size: [],
      productType: "",
      productId: "",
      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Product Single",
          to: "/product",
        },
      ],
      // Product Quanity Increment/ Decrement Data
      quantity: 1,
      cartProduct: {},
      compareProduct: {},
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        freeMode: true,
      },
      // custom by shiki
      productDetail: {},
      variation1List: [],
      variation2List: [],
      variationVal1: "",
      variationVal2: "",
      variationStockCnt: 0,
    };
  },

  computed: {
    getDetail: function () {
      return this.productDetail;
    },
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },

  mounted() {
    // For displaying default color and size on pageload
    // this.uniqColor = this.getDetail.variants[0].color;
    // this.sizeVariant(this.getDetail.variants[0].image_id);
    // Active default color
    // this.activeColor = this.uniqColor;
    // this.changeSizeVariant(this.getDetail.variants[0].size);
    // this.relatedProducts();
    ProductService.chiTietSp(this.$route.params.id)
      .then((res) => {
        console.log("product data: ", res.data);
        this.productDetail = res.data;
        this.variation1List = this.productDetail.giaTri1List;
        this.variation2List = this.productDetail.giaTri2List;
        this.variationStockCnt = this.productDetail.soLuongKho;
      })
      .catch((err) => {
        console.log("error: ", err);
      });
    // For scroll page top for every Route
    window.scrollTo(0, 0);
  },

  methods: {
    getImageUrl(path) {
      return require("@/assets/img/product-image/" + path);
    },
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount) / 100;
      return price;
    },
    // add to cart
    addToCart: function (product, qty) {
      if (this.variationStockCnt == 0) {
        alert("Sản phẩm hiện tại đang hết!");
        return;
      }
      product.quantity = qty || 1;
      console.log("add cart: ", this.quantity);

      if (this.productDetail.loaiBienThe == "BOTH") {
        if (!this.variationVal1 || !this.variationVal2) {
          alert("Vui lòng chọn phân loại sản phẩm!");
          return;
        }
        const productVariation = this.productDetail.bienTheDTOS.find(
          (item) =>
            item.giatri1 == this.variationVal1 &&
            item.giatri2 == this.variationVal2
        );

        if (productVariation) {
          console.log("add variation: ", productVariation);
          this.$store.dispatch("cart/addToCart", {
            id: productVariation.id,
            quantity: this.quantity,
            anh: productVariation.anh || productVariation.anhSpChinh,
            productId: this.productDetail.id,
            productName: this.productDetail.tieuDe,
            price: this.productDetail.giaMoi,
            variation: `Màu: ${productVariation.giaTriObj1.giaTri}, Size: ${productVariation.giaTriObj2.giaTri}`,
          });
        }
      } else {
        if (this.productDetail.loaiBienThe == "COLOR") {
          // for color
          if (!this.variationVal1) {
            alert("Vui lòng chọn phân loại sản phẩm!");
            return;
          }

          const productVariation = this.productDetail.bienTheDTOS.find(
            (item) => item.giatri1 == this.variationVal1
          );
          if (productVariation) {
            console.log("add variation: ", productVariation);
            this.$store.dispatch("cart/addToCart", {
              id: productVariation.id,
              quantity: this.quantity,
              anh: productVariation.anh || productVariation.anhSpChinh,
              productId: this.productDetail.id,
              productName: this.productDetail.tieuDe,
              price: this.productDetail.giaMoi,
              variation: `Màu: ${productVariation.giaTriObj1.giaTri}`,
            });
          }
        } else {
          // for size
          if (!this.variationVal2) {
            alert("Vui lòng chọn phân loại sản phẩm!");
            return;
          }
          const productVariation = this.productDetail.bienTheDTOS.find(
            (item) => item.giatri2 == this.variationVal2
          );
          if (productVariation) {
            console.log("add variation: ", productVariation);
            this.$store.dispatch("cart/addToCart", {
              id: productVariation.id,
              quantity: this.quantity,
              anh: productVariation.anh || productVariation.anhSpChinh,
              productId: this.productDetail.id,
              productName: this.productDetail.tieuDe,
              price: this.productDetail.giaMoi,
              variation: `Size: ${productVariation.giaTriObj2.giaTri}`,
            });
          }
        }
      }
    },
    // add to wishlist
    addToWishlist: function (product) {
      this.$store.dispatch("products/addToWishlist", product);
    },
    // add to compare
    addToCompare: function (product) {
      this.$store.dispatch("products/addToCompare", product);
    },
    // Related Product Display
    relatedProducts() {
      this.productType = this.getDetail.type;
      this.productId = this.getDetail.id;
    },

    // Display Unique color
    Color(variants) {
      const uniqColor = [];
      // for (let i = 0; i < Object.keys(variants).length; i++) {
      //   if (uniqColor.indexOf(variants[i].color) === -1) {
      //     uniqColor.push(variants[i].color);
      //   }
      // }
      return uniqColor;
    },
    // Change Size Variant
    changeSizeVariant(variant) {
      this.selectedSize = variant;
    },
    slideTo(id) {
      this.swiper.slideTo(id, 1000, false);
    },
    sizeVariant(id, slideId, color) {
      this.swiper.slideTo(slideId, 1000, false);
      this.size = [];
      this.activeColor = color;
      this.getDetail.variants.filter((item) => {
        if (id === item.image_id) {
          this.size.push(item.size);
        }
      });
    },
    // custom func
    onThayDoiBienTheMau(event) {
      console.log("variation 1: ", event.target.value);
      if (!event.target.value) {
        this.variation2List = this.productDetail.giaTri2List;
        this.variationStockCnt = this.productDetail.soLuongKho;
        return;
      }

      if (this.productDetail.loaiBienThe == "BOTH") {
        const variationInfo = this.productDetail.giaTri1List.find(
          (item) => item.id == event.target.value
        );
        this.variation2List = variationInfo.bienThe2;

        // find stock in this variation
        if (this.variationVal2) {
          const productVariation = this.productDetail.bienTheDTOS.find(
            (item) =>
              item.giatri2 == this.variationVal2 &&
              item.giatri1 == event.target.value
          );
          console.log("product vatiation: ", productVariation);
          if (productVariation)
            this.variationStockCnt = productVariation.soLuong;
        }
        // end find stock in this variation
      } else if (this.productDetail.loaiBienThe == "COLOR") {
        const productVariation = this.productDetail.bienTheDTOS.find(
          (item) => item.giatri1 == event.target.value
        );
        console.log("product vatiation: ", productVariation);
        if (productVariation) this.variationStockCnt = productVariation.soLuong;
      }
    },
    onThayDoiBienTheSize(event) {
      console.log("variation 2: ", event.target.value);

      if (!event.target.value) {
        this.variation1List = this.productDetail.giaTri1List;
        this.variationStockCnt = this.productDetail.soLuongKho;
        return;
      }
      if (this.productDetail.loaiBienThe == "BOTH") {
        const variationInfo = this.productDetail.giaTri2List.find(
          (item) => item.id == event.target.value
        );
        this.variation1List = variationInfo.bienThe2;

        // find stock in this variation
        if (this.variationVal1) {
          const productVariation = this.productDetail.bienTheDTOS.find(
            (item) =>
              item.giatri1 == this.variationVal1 &&
              item.giatri2 == event.target.value
          );
          console.log("product vatiation: ", productVariation);
          if (productVariation)
            this.variationStockCnt = productVariation.soLuong;
        }
        // end find stock in this variation
      } else if (this.productDetail.loaiBienThe == "SIZE") {
        const productVariation = this.productDetail.bienTheDTOS.find(
          (item) => item.giatri2 == event.target.value
        );
        console.log("product vatiation: ", productVariation);
        if (productVariation) this.variationStockCnt = productVariation.soLuong;
      }
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
          content: "Shop page - AndShop Ecommerce Vue js, Nuxt js Template",
        },
      ],
    };
  },
};
</script>
