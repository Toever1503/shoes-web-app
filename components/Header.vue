<template>
  <div>
    <!-- Start Header Area -->
    <header class="header-section d-none d-xl-block">
      <div class="header-wrapper">
        <div
          id="header"
          class="
            header-bottom
            header-bottom-color--golden
            section-fluid
            sticky-header
            sticky-color--golden
          "
        >
          <div class="container">
            <div class="row">
              <div
                class="col-12 d-flex align-items-center justify-content-between"
              >
                <!-- Start Header Logo -->
                <div class="header-logo">
                  <div class="logo">
                    <nuxt-link to="/"
                      ><img :src="require('@/assets/img/logo.png')" alt="logo"
                    /></nuxt-link>
                  </div>
                </div>
                <!-- End Header Logo -->

                <!-- Start Header Main Menu -->
                <div
                  class="main-menu menu-color--black menu-hover-color--golden"
                >
                  <nav>
                    <ul>
                      <li class="has-dropdown">
                        <a href="/shop/shop-4">Sản phẩm <i class="fa fa-angle-down"></i></a>
                        <!-- Sub Menu -->
                        <ul class="sub-menu">
                          <li><nuxt-link to="/">Fashion</nuxt-link></li>
                          <li>
                            <nuxt-link to="/furniture">Furniture</nuxt-link>
                          </li>
                          <li>
                            <nuxt-link to="/electronics">Electronics</nuxt-link>
                          </li>
                          <li>
                            <nuxt-link to="/grocery">Grocery</nuxt-link>
                          </li>
                          <li>
                            <nuxt-link to="/pharmacy">Pharmacy</nuxt-link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <nuxt-link to="/shop/shop-4">Tra cứu đơn</nuxt-link>
                      </li>

                      <li  v-if="false" class="has-dropdown has-megaitem">
                        <a href="#">Shop <i class="fa fa-angle-down"></i></a>
                        <!-- Mega Menu -->
                        <div class="mega-menu">
                          <ul class="mega-menu-inner">
                            <!-- Mega Menu Sub Link -->
                            <li class="mega-menu-item">
                              <a href="#" class="mega-menu-item-title"
                                >Shop Layouts</a
                              >
                              <ul class="mega-menu-sub">
                                <li>
                                  <nuxt-link to="/shop"
                                    >Shop Four Grid</nuxt-link
                                  >
                                </li>
                                <li>
                                  <nuxt-link to="/shop/shop-2"
                                    >Shop Three Grid</nuxt-link
                                  >
                                </li>
                                <li>
                                  <nuxt-link to="/shop/shop-3"
                                    >Shop List View</nuxt-link
                                  >
                                </li>
                                <li>
                                  <nuxt-link to="/shop/shop-4"
                                    >Shop Left Sidebar</nuxt-link
                                  >
                                </li>
                                <li>
                                  <nuxt-link to="/shop/shop-5"
                                    >Shop Right Sidebar</nuxt-link
                                  >
                                </li>
                                <li>
                                  <nuxt-link to="/product/1"
                                    >Product Single</nuxt-link
                                  >
                                </li>
                                <li>
                                  <nuxt-link to="/product/product-single-2"
                                    >Product Single Two</nuxt-link
                                  >
                                </li>
                                <li>
                                  <nuxt-link to="/product/product-single-3"
                                    >Product Single Three</nuxt-link
                                  >
                                </li>
                                <li>
                                  <nuxt-link to="/lookbook">Lookbook</nuxt-link>
                                </li>
                              </ul>
                            </li>
                            <!-- Mega Menu Sub Link -->
                            <li class="mega-menu-item">
                              <a href="#" class="mega-menu-item-title"
                                >Other Pages</a
                              >
                              <ul class="mega-menu-sub">
                                <li>
                                  <nuxt-link to="/cart/"
                                    >Cart View One</nuxt-link
                                  >
                                </li>
                                <li>
                                  <nuxt-link to="/cart/cart-2"
                                    >Cart View Two
                                  </nuxt-link>
                                </li>
                                <li>
                                  <nuxt-link to="/cart/cart-3"
                                    >Cart View Three
                                  </nuxt-link>
                                </li>
                                <li>
                                  <nuxt-link to="/cart/cart-4"
                                    >Cart View Four
                                  </nuxt-link>
                                </li>
                                <li>
                                  <nuxt-link to="/cart/empty-cart"
                                    >Empty Cart</nuxt-link
                                  >
                                </li>
                                <li>
                                  <nuxt-link to="/my-account/checkout-1"
                                    >Checkout View One</nuxt-link
                                  >
                                </li>
                                <li>
                                  <nuxt-link to="/my-account/checkout-2"
                                    >Checkout View Two</nuxt-link
                                  >
                                </li>
                                <li>
                                  <nuxt-link to="/my-account/wishlist"
                                    >Wishlist</nuxt-link
                                  >
                                </li>
                                <li>
                                  <nuxt-link to="/my-account/compare"
                                    >Compare</nuxt-link
                                  >
                                </li>
                                <li>
                                  <nuxt-link to="/my-account/order-tracking"
                                    >Order Tracking</nuxt-link
                                  >
                                </li>
                              </ul>
                            </li>

                            <!-- Mega Menu Sub Link -->
                            <li class="mega-menu-item">
                              <div class="menu-banner">
                                <nuxt-link to="/shop" class="menu-banner-link">
                                  <img
                                    class="menu-banner-img"
                                    :src="
                                      require('@/assets/img/common/nav_banner.png')
                                    "
                                    alt="img"
                                  />
                                </nuxt-link>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li v-if="false" class="has-dropdown">
                        <a href="#">Blog <i class="fa fa-angle-down"></i></a>
                        <!-- Sub Menu -->
                        <ul class="sub-menu">
                          <li>
                            <nuxt-link to="/blog">Blog Grid View One</nuxt-link>
                          </li>
                          <li>
                            <nuxt-link to="/blog/blog-2"
                              >Blog Grid View Two</nuxt-link
                            >
                          </li>
                          <li>
                            <nuxt-link to="/blog/blog-3"
                              >Blog List View</nuxt-link
                            >
                          </li>
                          <li>
                            <nuxt-link to="/blog/blog-single"
                              >Blog Single View One
                            </nuxt-link>
                          </li>
                          <li>
                            <nuxt-link to="/blog/blog-single-2"
                              >Blog Single View TWo</nuxt-link
                            >
                          </li>
                        </ul>
                      </li>
                      <li class="has-dropdown">
                        <a href="#">Pages <i class="fa fa-angle-down"></i></a>
                        <!-- Sub Menu -->
                        <ul class="sub-menu">
                          <li>
                            <nuxt-link to="/faq"
                              >Frequently Questions</nuxt-link
                            >
                          </li>
                          <li>
                            <nuxt-link to="/privacy-policy"
                              >Privacy Policy</nuxt-link
                            >
                          </li>
                          <li><nuxt-link to="/404">404 Page</nuxt-link></li>
                          <li>
                            <nuxt-link to="/contact-us"
                              >Contact Us One</nuxt-link
                            >
                          </li>
                          <li>
                            <nuxt-link to="/contact-us/contact-us-2"
                              >Contact Us Two</nuxt-link
                            >
                          </li>
                          <li>
                            <nuxt-link to="/coming-soon">Coming Soon</nuxt-link>
                          </li>
                          <li>
                            <nuxt-link to="/vendor-dashboard/"
                              >Vendor</nuxt-link
                            >
                          </li>
                          <li>
                            <nuxt-link to="/my-account">My Account</nuxt-link>
                          </li>
                          <li><nuxt-link to="/login">Login</nuxt-link></li>
                        </ul>
                      </li>
                      <li>
                        <nuxt-link to="/about-us">About Us</nuxt-link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <!-- End Header Main Menu Start -->

                <!-- Start Header Action Link -->
                <ul
                  class="
                    header-action-link
                    action-color--black
                    action-hover-color--golden
                  "
                >
                  <li v-if="false">
                    <a v-b-toggle.offcanvas-wishlish class="offcanvas-toggle">
                      <i class="far fa-heart"></i>
                      <span class="item-count">{{ wishlist.length }}</span>
                    </a>
                  </li>
                  <li>
                    <a v-b-toggle.offcanvas-add-cart class="offcanvas-toggle">
                      <i class="fas fa-shopping-bag"></i>
                      <span class="item-count">{{ cart.length }}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      v-b-toggle.search_sidebar
                      class="search_width offcanvas-toggle"
                    >
                      <img src="~/assets/img/svg/search.svg" alt="img" />
                    </a>
                  </li>
                  <li>
                    <a
                      v-b-toggle.offcanvas-about
                      class="offacnvas offside-about offcanvas-toggle"
                      ><i class="fas fa-bars"></i
                    ></a>
                  </li>
                </ul>
                <!-- End Header Action Link -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Start Header Area -->

    <!-- Start Mobile Header -->
    <div
      id="mobile_header"
      class="
        mobile-header
        sticky-header
        sticky-color--golden
        mobile-header-bg-color--golden
        section-fluid
        d-lg-block d-xl-none
      "
    >
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex align-items-center justify-content-between">
            <!-- Start Mobile Left Side -->
            <div class="mobile-header-left">
              <ul class="mobile-menu-logo">
                <li>
                  <nuxt-link to="/">
                    <div class="logo">
                      <img :src="require('@/assets/img/logo.png')" alt="logo" />
                    </div>
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <!-- End Mobile Left Side -->

            <!-- Start Mobile Right Side -->
            <div class="mobile-right-side">
              <ul
                class="
                  header-action-link
                  action-color--black
                  action-hover-color--golden
                "
              >
                <li>
                  <a
                    v-b-toggle.search_sidebar
                    class="search_width offcanvas-toggle"
                  >
                    <img src="~/assets/img/svg/search.svg" alt="img" />
                  </a>
                </li>
                <li>
                  <a v-b-toggle.offcanvas-wishlish class="offcanvas-toggle">
                    <i class="far fa-heart"></i>
                    <span class="item-count">{{ wishlist.length }}</span>
                  </a>
                </li>
                <li>
                  <a v-b-toggle.offcanvas-add-cart class="offcanvas-toggle">
                    <i class="fas fa-shopping-bag"></i>
                    <span class="item-count">{{ cart.length }}</span>
                  </a>
                </li>
                <li>
                  <a
                    v-b-toggle.offcanvas-about
                    class="offacnvas offside-about offcanvas-toggle"
                    ><i class="fas fa-bars"></i
                  ></a>
                </li>
              </ul>
            </div>
            <!-- End Mobile Right Side -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Mobile Header -->

    <!-- ...:::: Start Offcanvas Mobile Menu Section:::... -->
    <b-sidebar
      id="offcanvas-about"
      class="offcanvas-mobile-about-section"
      backdrop
      right
    >
      <!-- Start Mobile Menu Navbar Wrap -->
      <div class="mobile-menu-navbar-wrap">
        <!-- Start Mobile Menu Nav -->
        <div class="offcanvas-menu">
          <sidebar-menu :menu="menu" />
        </div>
        <!-- End Mobile Menu Nav -->
      </div>
      <!-- End Mobile Menu Navbar Wrap -->

      <!-- Start Mobile contact Info -->
      <div class="mobile-contact-info">
        <address class="address">
          <img :src="require('@/assets/img/logo-white.png')" alt="logo" />
          <span>Address: Your address goes here.</span>
          <span>Call Us: 0123456789, 0123456789</span>
          <span>Email: demo@example.com</span>
        </address>

        <ul class="social-link">
          <li>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-linkedin"></i></a>
          </li>
        </ul>

        <ul class="user-link">
          <li><nuxt-link to="/my-account/wishlist">Wishlist</nuxt-link></li>
          <li><nuxt-link to="/cart/">Cart</nuxt-link></li>
          <li><nuxt-link to="/my-account/checkout-1">Checkout</nuxt-link></li>
        </ul>
      </div>
      <!-- End Mobile contact Info -->
    </b-sidebar>
    <!-- ...:::: End Offcanvas Mobile Menu Section:::... -->

    <!-- Start Offcanvas Addcart Section -->
    <b-sidebar
      id="offcanvas-add-cart"
      class="offcanvas-add-cart-section"
      backdrop
      right
    >
      <div class="offcanvas-add-cart-wrapper">
        <h4 class="offcanvas-title">Giỏ hàng</h4> 
        <div v-if="cart.length">
          <ul class="offcanvas-cart">
            <li
              class="offcanvas-cart-item-single"
              v-for="(item, index) in cart"
              :key="index"
            >
              <div class="offcanvas-cart-item-block">
                <nuxt-link
                  :to="{ path: '/product/' + item.productId }"
                  class="offcanvas-cart-item-image-link"
                >
                <!-- :src="getImageUrl(item.images[0].src)" -->
                  <img
                  :src="item.anh"
                    alt="img"
                    class="offcanvas-cart-image"
                  />
                </nuxt-link>
                <div class="offcanvas-cart-item-content">
                  <nuxt-link
                    :to="{ path: '/product/' + item.productId }"
                    class="offcanvas-cart-item-link"
                    >{{ item.productName }}
                    </nuxt-link>
                    <span>{{ item.variation }} </span> 
                  <div class="offcanvas-cart-item-details">
                    <span class="offcanvas-cart-item-details-quantity"
                      >{{ item.qty }} x</span
                    >
                   
                    <span class="offcanvas-cart-item-details-price"
                      >{{ item.price }} vnd</span
                    >
                  </div>
                </div>
              </div>
              <div class="offcanvas-cart-item-delete text-right">
                <button
                  @click="removeCartItem(item)"
                  class="offcanvas-cart-item-delete bg-transparent remove-btn"
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
            </li>
          </ul>

          <div class="offcanvas-cart-total-price">
            <span class="offcanvas-cart-total-price-text">Tổng tiền:</span>
            <span class="offcanvas-cart-total-price-value"
              >{{ cartTotal }} vnd</span
            >
          </div>

          <ul class="offcanvas-cart-action-button">
            <li>
              <nuxt-link
                to="/cart"
                class="theme-btn-one btn-black-overlay btn_md"
                >Xem giỏ hàng</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/my-account/checkout-1"
                class="theme-btn-one btn-black-overlay btn_md"
                >Đặt hàng</nuxt-link
              >
            </li>
          </ul>
        </div>

        <ul v-else class="offcanvas-cart">
          <li>Your cart is empty!</li>
        </ul>
      </div>
    </b-sidebar>
    <!-- End  Offcanvas Addcart Section -->

    <!-- Start Offcanvas Wishlist Sidebar Section -->
    <b-sidebar
      id="offcanvas-wishlish"
      class="offcanvas-add-cart-section"
      backdrop
      right
    >
      <div class="offcanvas-wishlist-wrapper">
        <h4 class="offcanvas-title">Wishlist</h4>

        <div v-if="wishlist.length">
          <ul class="offcanvas-wishlist">
            <li
              class="offcanvas-wishlist-item-single"
              v-for="(item, index) in wishlist"
              :key="index"
            >
              <div class="offcanvas-wishlist-item-block">
                <nuxt-link
                  :to="{ path: '/product/' + item.id }"
                  class="offcanvas-wishlist-item-image-link"
                >
                <!-- :src="getImageUrl(item.images[0].src)" -->
                  <img
                    
                    alt="img"
                    class="offcanvas-wishlist-image"
                  />
                </nuxt-link>
                <div class="offcanvas-wishlist-item-content">
                  <nuxt-link
                    :to="{ path: '/product/' + item.id }"
                    class="offcanvas-wishlist-item-link"
                    >{{ item.title }}</nuxt-link
                  >
                  <div class="offcanvas-wishlist-item-details">
                    <span class="offcanvas-wishlist-item-details-quantity"
                      >{{ item.quantity }} x</span
                    >
                    <span
                      v-if="item.discount"
                      class="offcanvas-wishlist-item-details-price"
                      >${{ discountedPrice(item) }}</span
                    >
                    <span v-else class="offcanvas-wishlist-item-details-price"
                      >${{ item.price }}</span
                    >
                  </div>
                </div>
              </div>
              <div class="offcanvas-wishlist-item-delete text-right">
                <button
                  @click="removeWishlistItem(item)"
                  class="
                    offcanvas-wishlist-item-delete
                    bg-transparent
                    remove-btn
                  "
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
            </li>
          </ul>
          <ul class="offcanvas-wishlist-action-button">
            <li>
              <nuxt-link
                to="/my-account/wishlist"
                class="theme-btn-one btn-black-overlay btn_md"
                >View wishlist</nuxt-link
              >
            </li>
          </ul>
        </div>

        <ul v-else class="offcanvas-wishlist">
          <li>No Item in your wishlist!</li>
        </ul>
      </div>
    </b-sidebar>
    <!-- End Offcanvas Wishlist Sidebar Section -->

    <!-- Start Offcanvas Search Bar Section -->
    <b-sidebar id="search_sidebar" backdrop>
      <div
        class="
          px-3
          py-2
          search-sidebar-content-wrap
          d-flex
          justify-content-center
          align-content-center
          w-100
          h-100
        "
      >
        <form
          class="d-flex flex-column justify-content-center product-search-form"
        >
          <input
            type="search"
            placeholder="Type keyword(s) here"
            v-model="searchString"
            @keyup="searchProduct"
          />
          <button class="btn btn-lg btn-golden">Search</button>

          <!-- Show search product here -->
          <ul v-if="searchItems.length" class="search-results-wrap">
            <li v-for="(product, index) in searchItems" :key="index">
              <div class="offcanvas-cart-item-block mb-3">
                <nuxt-link
                  :to="{ path: '/product/' + product.id }"
                  class="offcanvas-cart-item-image-link"
                >
                need fix
                  <!-- <img
                    :src="getImageUrl(product.images[0].src)"
                    alt="img"
                    class="offcanvas-cart-image"
                  /> -->
                </nuxt-link>
                <div class="offcanvas-cart-item-content">
                  <nuxt-link
                    :to="{ path: '/product/' + product.id }"
                    class="offcanvas-cart-item-link text-white"
                    >{{ product.title }}</nuxt-link
                  >
                  <div class="offcanvas-cart-item-details">
                    <span
                      v-if="product.discount"
                      class="offcanvas-cart-item-details-price text-white"
                      >${{ discountedPrice(product) }}</span
                    >
                    <span
                      v-else
                      class="offcanvas-cart-item-details-price text-white"
                      >${{ product.price }}</span
                    >
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <!-- Show search product here -->
        </form>
      </div>
    </b-sidebar>
    <!-- End Offcanvas Search Bar Section -->
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      // Mobile Menu Item Data
      menu: [
        {
          title: "Home",
          child: [
            {
              href: "/",
              title: "Fashion",
            },
            {
              href: "/furniture",
              title: "Furniture",
            },
            {
              href: "/electronics",
              title: "Electronics",
            },
          ],
        },
        {
          title: "Shop",
          child: [
            {
              title: "Shop Layout",
              child: [
                {
                  href: "/shop",
                  title: "Shop Four Grid",
                },
                {
                  href: "/shop/shop-2",
                  title: "Shop Three Grid",
                },
                {
                  href: "/shop/shop-3",
                  title: "Shop List View",
                },
                {
                  href: "/shop/shop-4",
                  title: "Shop Left Sidebar",
                },
                {
                  href: "/shop/shop-5",
                  title: "Shop Right Sidebar",
                },
              ],
            },
            {
              title: "Shop Pages",
              child: [
                {
                  href: "/cart/",
                  title: "Cart View One",
                },
                {
                  href: "/cart/cart-2",
                  title: "Cart View Two",
                },
                {
                  href: "/cart/empty-cart",
                  title: "Empty Cart",
                },
                {
                  href: "/my-account/checkout-1",
                  title: "Checkout View One",
                },
                {
                  href: "/my-account/checkout-2",
                  title: "Checkout View Two",
                },
                {
                  href: "/my-account/wishlist",
                  title: "Wishlist",
                },
                {
                  href: "/my-account/compare",
                  title: "Compare",
                },
                {
                  href: "/my-account/order-tracking",
                  title: "Order Tracking",
                },
              ],
            },
            {
              title: "Product Single",
              child: [
                {
                  href: "/product/1",
                  title: "Product Single",
                },
                {
                  href: "/product/product-single-2",
                  title: "Product Single Two",
                },
              ],
            },
          ],
        },
        {
          title: "Blogs",
          child: [
            {
              href: "/blog",
              title: "Blog Grid View One",
            },
            {
              href: "/blog/blog-2",
              title: "Blog Grid View Two",
            },
            {
              href: "/blog/blog-3",
              title: "Blog List View",
            },
            {
              href: "/blog/blog-single",
              title: "Blog Single View One",
            },
            {
              href: "/blog/blog-single-2",
              title: "Blog Single View TWo",
            },
          ],
        },
        {
          title: "Pages",
          child: [
            {
              href: "/faq",
              title: "Frequently Questions",
            },
            {
              href: "/privacy-policy",
              title: "Privacy Policy",
            },
            {
              href: "/404",
              title: "404 Page",
            },
            {
              href: "/contact-us",
              title: "Contact Us One",
            },
            {
              href: "/contact-us/contact-us-2",
              title: "Contact Us Two",
            },
            {
              href: "/coming-soon",
              title: "Coming Soon",
            },
            {
              href: "/vendor-dashboard",
              title: "Vendor",
            },
            {
              href: "/my-account",
              title: "My Account",
            },
            {
              href: "/login",
              title: "Login",
            },
          ],
        },
        {
          href: "/about-us",
          title: "About Us",
        },
      ],
      products: [],
      category: [],
      cartproduct: {},
      searchString: "",
    };
  },

  mounted: function () {
    // Menu Js
    this.$nextTick(function () {
      window.onscroll = function () {
        myFunction();
      };

      var header = document.getElementById("header");
      var mobile_header = document.getElementById("mobile_header");
      var sticky = header.offsetTop;

      function myFunction() {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
          mobile_header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
          mobile_header.classList.remove("sticky");
        }
      }
    });
    // Menu End

    // this.productsArray()
  },

  computed: {
    ...mapState({
      productslist: (state) => state.products.productslist,
      searchItems: (state) => state.products.searchProduct,
    }),
    ...mapGetters({
      cart: "cart/cartItems",
      cartTotal: "cart/cartTotalAmount",
      wishlist: "products/wishlistItems",
    }),
  },

  methods: {
    // Image Url
    getImageUrl(path) {
      // return require("@/assets/img/product-image/" + path);
      return '';
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
    // For Delete/Remove wishlist Item
    removeWishlistItem: function (product) {
      this.$store.dispatch("products/removeWishlistItem", product);
    },
    searchProduct() {
      this.$store.dispatch("products/searchProduct", this.searchString);
    },
  },
};
</script>

<style>
/* Mobile Menu Multi Dropdown Items Start */
.v-sidebar-menu .vsm--toggle-btn {
  display: none;
}
.v-sidebar-menu {
  position: relative;
  background-color: transparent;
}
.v-sidebar-menu.vsm_expanded .vsm--item_open .vsm--link_level-1 {
  background-color: var(--main-theme-color);
}
.v-sidebar-menu .vsm--link_level-1.vsm--link_exact-active,
.v-sidebar-menu .vsm--link_level-1.vsm--link_active {
  -webkit-box-shadow: 3px 0px 0px 0px var(--main-theme-color) inset;
  box-shadow: 3px 0px 0px 0px var(--main-theme-color) inset;
}
/* Mobile Menu Multi Dropdown Items End */
</style>