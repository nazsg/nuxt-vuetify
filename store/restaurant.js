export const state = () => ({
  orders: [],
  current_order: '',
  current_cart: '',
  count: '',
  total: ''
});

export const getters = {
  get_orders: state => {
    return state.orders
  },
  get_current_order: state => {
    return state.current_order
  },
  get_current_cart: state => {
    return state.current_cart
  },
  get_count: state => {    
    return state.count
  },
  get_total: state => {
    return state.total
  }
};

export const mutations = {  
  set_orders(state, arg) {
    state.orders = arg.map(order => ({ ...order, cart: [], id: parseInt(order.id) }))
  },
  set_current_order(state, arg) { // triggered by showOrders
    state.current_order = parseInt(arg)
    this.commit('restaurant/set_count', arg)
    this.commit('restaurant/set_total', arg)
  },
  add_to_cart(state, arg) {
    state.orders.forEach(order => {
      if (order.id == state.current_order) {
        let newItem
        newItem = { id: arg[0], qty: 1, price: arg[1], item: arg[2] }
        for (let i in order.cart) {          
          if (order.cart[i].id == arg[0]) {
            order.cart[i].qty += arg[3] // add or minus depending on arg[3]     
            if(order.cart[i].qty === 0) order.cart.pop(order.cart[i]) // remove
            this.commit('restaurant/set_total', state.current_order)
            this.commit('restaurant/set_count', state.current_order)
            return
          }
        }
        order.cart = [...order.cart, newItem]
        this.commit('restaurant/set_total', state.current_order)
        this.commit('restaurant/set_count', state.current_order)
      }
    })
  },
  set_count(state, arg) { // for buttons to trigger in showOrders
    let [cart] = state.orders
      .filter(order => order.id == arg)
      .map(order => order.cart)
    state.count = cart
      .map(c => c.qty).reduce( (sum, num) => (sum + num), 0)
  },
  set_total(state, arg) { // for buttons to trigger in showOrders
    let [cart] = state.orders
      .filter(order => order.id == arg)
      .map(or => or.cart)
    state.total = cart
      .map(c => c.qty * c.price).reduce( (sum, num) => (sum + num), 0)
      .toFixed(2)
  },

} // MUTATIONS
