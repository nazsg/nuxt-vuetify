<template>
  <div class="cartSummary">
    <div>
      <receipt /> Order no: {{selected}}
    </div>
    <div>
      <sigma /> 
      {{$store.getters['restaurant/get_total']}}
      <!-- {{$store.getters['restaurant/get_cart_total']}}  -->
    </div>
    <div>
        <cartIcon />  
        <span>
          {{$store.getters['restaurant/get_count']}}
        </span>
    </div>
  </div>
</template>

<script>
import cartIcon from 'vue-material-design-icons/Cart.vue'
import receipt from 'vue-material-design-icons/Receipt.vue'
import sigma from 'vue-material-design-icons/Sigma.vue'
export default {
  components: { cartIcon, receipt, sigma },
  props: [ 'selected'],
}
</script>