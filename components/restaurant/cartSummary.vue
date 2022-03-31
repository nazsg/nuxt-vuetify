<template>
  <div class="cartSummary">
    <div><receipt /> Order no: {{ selected }}</div>
    <div>
      <sigma />
      {{ $store.getters['restaurant/get_total'] }}
    </div>
    <div>
      <!-- <cartIcon title="Show cart contents" @click="show = true" class="cartHeader"/>   -->
      <cartIcon
        title="Show cart contents"
        class="cartHeader"
        @click="dialogIsVisible = true"
      />
      <span>
        {{ $store.getters['restaurant/get_count'] }}
      </span>
    </div>

    <base-modal :open="dialogIsVisible" @close="hideDialog">
      <cart-details />
      <button @click="hideDialog">Close it!</button>
    </base-modal>

    <div v-if="show">
      <div class="modalBg" @click.self="show = false">
        <div class="modalContent">
          <closeIcon class="close" @click="show = false" />
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
  props: {
    selected: {
      type: [String],
      default: '',
    },
  },
  data() {
    return {
      show: false,
      dialogIsVisible: false,
    }
  },
  // props: [ 'selected'],
  methods: {
    hideDialog() {
      this.dialogIsVisible = false
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/style/_common';

.modalBg {
  @include modalBg;

  .modalContent {
    @include modalContent;
  }
}
</style>
