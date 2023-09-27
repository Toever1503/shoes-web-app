import products from '../../data/products'

const state = {
  products: products.data,
  cart: []
};
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]));
}
else {
  try {
    state.cart = JSON.parse(localStorage.getItem('cart'));
  } catch (error) {
  }
}

const updateCartLocalstorage = () => {
  // check logged user
  if (!localStorage.getItem('loggedUser')) {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }
};
// getters
const getters = {
  cartItems: (state) => {
    return state.cart
  },
  // cartTotalAmount: (state) => {
  //     return state.cart.reduce( (total, product) => {
  //         return total + (product.price * product.quantity)
  //       }, 0 )
  // },
  cartTotalAmount: (state) => {
    return state.cart.reduce((total, product) => {
      return total + (product.price * product.qty)
    }, 0)
  }
}
// actions
const actions = {
  addToCart: (context, payload) => {
    context.commit('addToCart', payload)
  },
  updateCartQuantity: (context, payload) => {
    context.commit('updateCartQuantity', payload)
  },
  removeCartItem: (context, payload) => {
    context.commit('removeCartItem', payload)
  }
}

// mutations
const mutations = {
  addToCart: (state, payload) => {
    console.log("begin add item", payload);

    const cartItem = state.cart.find(item => item.id === payload.id);
    if (cartItem) {
      state.cart.forEach(item => {
        if (item.id == cartItem.id)
          item.qty = payload.quantity + item.qty;
      });
    } else {
      state.cart.push({
        id: payload.id,
        qty: payload.quantity,
        anh: payload.anh.url,
        productId: payload.productId,
        productName: payload.productName,
        price: payload.price,
        variation: payload.variation,
      });
    };
    updateCartLocalstorage();
  },
  updateCartQuantity: (state, payload) => {
    // Calculate Product Stock Counts
    function calculateStockCounts(product, quantity) {
      const qty = product.quantity + quantity
      const stock = product.stock
      if (stock < qty) {
        return false
      }
      return true
    }
    state.cart.find((items, index) => {
      if (items.id === payload.product.id) {
        const qty = state.cart[index].quantity + payload.qty
        const stock = calculateStockCounts(state.cart[index], payload.qty)
        if (qty !== 0 && stock) {
          state.cart[index].quantity = qty
        } else {

        }
        return true
      }
    });
    updateCartLocalstorage();
  },
  removeCartItem: (state, payload) => {
    const index = state.cart.indexOf(payload);
    state.cart.splice(index, 1);
    updateCartLocalstorage();
  }

}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
