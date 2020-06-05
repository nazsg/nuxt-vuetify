<template>
  <div>
    <div class="cart-details">
      <h4>Cart Details</h4>
      <ul class="header">
        <li class="item">Item</li>
         <li>Quantity</li> 
         <li>Price</li>
         <li>Sub-total</li>
      </ul>
      <ul v-for="(cart, index) in cart_details" :key="index">
        <li class="item">{{ cart.item }}</li> 
        <li>{{ cart.qty }}</li>
        <li>{{ cart.price }}</li>
        <li>{{ (cart.price * cart.qty).toFixed(2) }}</li>
      </ul>
      <hr />
      {{total}}
    </div>
  </div>
</template>

<script>
export default {  
  computed: {
    current_order() {
      let curr = this.$store.getters['restaurant/get_current_order']
      if(curr) {
        return curr
      }    
    },
    cart_details() {
      let orders = this.$store.getters["restaurant/get_orders"];
      if (this.current_order) {
        [orders] = orders.filter(order => order.id === this.current_order)
        let { cart } = orders
        return cart
      } 
    },
    total() {      
      if(this.current_order) {
        let total = this.cart_details.map(item => item.price * item.qty)
          .reduce( (sum,num) => (sum + num), 0).toFixed(2)
        return total
      }      
    },
    cart_count() {
      if(this.current_order) {
        let count = this.cart_details.map(item => item.qty)
          .reduce( (sum, num) => (sum + num), 0)
        return count
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import '~/assets/style/_common';
.cart-details {
  ul {
    list-style-type: none;
      width: 99%;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      @include alt($color: #e6e4e4);

      @media (min-width: 720px) {
        max-width: 750px;
      }
      li {
        text-align: left;
        padding: 10px;
        flex-basis: 30%;
        flex-wrap: wrap;
        // @include border1;
        &.item {
          flex-basis: 50%;
        }
      }
      &.header {
        font-weight: bold;
      }
  }
}
</style>
