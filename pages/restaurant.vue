<template>
  <div class="restaurant" >
    <h1>Order-Taking Web App</h1>
    <div>
      <!-- :total="total" :count="count"  
      closeModal="closeModal" 
      -->
      <cart-summary :selected="selectedOrder" 
      />

      <show-orders :selected="selectedOrder" :orders="orderIDs" v-on:setOrder='selectedOrder = arguments[0]' />
      <show-menus v-if="selectedOrder != ''" />
    </div>
    <br/>
  </div>
</template>

<script>
export default {
    head: {
    title: 'Restaurant sample',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Restaurant web app sample' }
    ]
  },
  data() {
    return {
      orderIDs: [],
      selectedOrder: '',
    }
  },
  methods: {
    send() {
      this.$store.commit('restaurant/set_orders', 'testing commit')
    },
  },
  computed: {
    // total() {
    //   return this.$store.getters['restaurant/get_cart_total']
    // },
    // count() {
    //   return this.$store.getters['restaurant/get_cart_count']
    // },
    // cart() {
    //   let curr = this.$store.getters['restaurant/get_current_order']
    //   let order = this.$store.getters['restaurant/get_orders'].filter(order => {
    //     return order.id == curr
    //   })
    //   // order.ma
    //   return order.map(o => {
    //     return o
    //   })
      
    // }
  },
  created() {
    this.$axios.$get('api/orders')
    .then(data => {
      this.orderIDs = data.filter(o => o.status ==1)
      console.log(this.orderIDs)
    })
  }  
}
</script>
