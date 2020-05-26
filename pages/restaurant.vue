<template>
  <div class="restaurant">
    <h1>Restaurant Order-Taking App</h1>
    <div>
      <cart :selected="selectedOrder" />
      <orders :selected="selectedOrder" :orders="orderIDs" v-on:setOrder="selectedOrder = arguments[0]" />
      <menus v-if="selectedOrder != ''" />
    </div>
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
      selectedOrder: ''
    }
  },
  components: { menus, orders, cart },
  created() {
    this.$axios.$get('orders_2020.php')
    .then(data => {
      this.orderIDs = data
    })
  }  
}
</script>
