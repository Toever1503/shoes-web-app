import Vue from 'vue'
import Vuex from 'vuex'
import products from './module/products'
import cart from './module/cart'
import address from './module/address'

Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    modules: {
      products: products,
      cart: cart,
      address: address
    }
  })
}
export default createStore