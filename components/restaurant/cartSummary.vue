<template>
  <div class="cartSummary">
    <div>
      <receipt /> Order no: {{selected}}
    </div>
    <div>
      <sigma /> 
      {{$store.getters['restaurant/get_total']}}
    </div>
    <div  >
        <cartIcon title="Show cart contents" @click="show = !show" class="cart-details"/>  
        <span>
          {{$store.getters['restaurant/get_count']}}
        </span>
    </div>

    <div v-if="show">
      <div class="modalBg">
        <div class="modalContent">
          <button @click="show = false">X</button>
          <cartDetails />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import cartDetails from './cart-details'
import cartIcon from 'vue-material-design-icons/Cart.vue'
import receipt from 'vue-material-design-icons/Receipt.vue'
import sigma from 'vue-material-design-icons/Sigma.vue'
export default {
  components: { cartIcon, receipt, sigma, cartDetails },
  data() {
    return {
      show: false
    }
  },
  props: [ 'selected'],
}
</script>

<style lang="scss" >
@import '~/assets/style/_common';
.cart-details {
  cursor: pointer;
}
.modalBg {
  @include modalBg;

  .modalContent {
    @include modalContent;
  }
}
</style>