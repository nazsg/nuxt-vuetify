<template>
  <div class="cartSummary" >
    <div>
      <receipt /> Order no: {{selected}}
    </div>
    <div>
      <sigma /> 
      {{$store.getters['restaurant/get_total']}}
    </div>
    <div  >
        <cartIcon title="Show cart contents" @click="show = true" class="cartHeader"/>  
        <span>
          {{$store.getters['restaurant/get_count']}}
        </span>
    </div>

    <div v-if="show">
      <div class="modalBg" @click.self="show = false">
        <div class="modalContent" >
          <closeIcon @click="show = false" class="close" />
          <cart-details />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import closeIcon from 'vue-material-design-icons/CloseCircle.vue'
import cartIcon from 'vue-material-design-icons/Cart.vue'
import receipt from 'vue-material-design-icons/Receipt.vue'
import sigma from 'vue-material-design-icons/Sigma.vue'
export default {
  components: { cartIcon, receipt, sigma, closeIcon },
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

.modalBg {
  @include modalBg;

  .modalContent {
    @include modalContent;
  }
}
</style>