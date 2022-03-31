<template>
  <div>
    <h5>Open Bills</h5>
    <div class="orderNos">
      <template v-for="(menu, index) in orders">
        <button
          v-if="menu.id == selected"
          :key="index"
          class="selected"
          @click="setOrder(menu.id)"
        >
          {{ menu.id }}
        </button>
        <button v-else :key="menu.id" class="others" @click="setOrder(menu.id)">
          {{ menu.id }}
        </button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    orders: {
      type: [String, Object, Array],
      default: '',
    },
    selected: {
      type: [String, Object, Array],
      default: '',
    },
  },
  methods: {
    setOrder(val) {
      this.$emit('setOrder', val)
      this.$store.commit('restaurant/set_current_order', val)
    },
  },
}
</script>
