<template>
  <div class="cartSummary">
    <div>
      <receipt /> Order no: {{selected}}
    </div>
    <div>
      <sigma /> TOTAL
    </div>
    <div>
       <cart />, NUMBER_OF_ITEMS
    </div>
  </div>
</template>

<script>
import cart from 'vue-material-design-icons/CartOutline.vue'
import receipt from 'vue-material-design-icons/Receipt.vue'
import sigma from 'vue-material-design-icons/Sigma.vue'
export default {
  components: { cart, receipt, sigma },
  props: [ 'selected']
}
</script>