<template>
  <div class="restaurant" >
    <h1>Order-Taking Web App</h1>
    <div>
      <cart :selected="selectedOrder" :total="total" :count="count" closeModal="closeModal" />
      <orders :selected="selectedOrder" :orders="orderIDs" v-on:setOrder="selectedOrder = arguments[0]" />
      <menus v-if="selectedOrder != ''" />
    </div>
    <br/>
  </div>
</template>

<script>
import menus from '~/components/restaurant/showMenus'
import orders from '~/components/restaurant/showOrders'
import cart from '~/components/restaurant/cartSummary'
export default {
  data() {
    return {
      orderIDs: [],
      selectedOrder: '',
    }
  },
  components: { menus, orders, cart },
  methods: {
    send() {
      this.$store.commit('restaurant/set_orders', 'testing commit')
    },
  },
  computed: {
    total() {
      return this.$store.getters['restaurant/get_cart_total']
    },
    count() {
      return this.$store.getters['restaurant/get_cart_count']
    },
    cart() {
      let curr = this.$store.getters['restaurant/get_current_order']
      let order = this.$store.getters['restaurant/get_orders'].filter(order => {
        return order.id == curr
      })
      // order.ma
      return order.map(o => {
        return o
      })
      
    }
  },
  created() {
    this.$axios.$get('orders_2020.php')
    .then(data => {
      this.orderIDs = data
    })
  }  
}
</script>
