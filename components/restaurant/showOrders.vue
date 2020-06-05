<template>
  <div class="orderNos">
    <template v-for="(menu, index) in orders">
      <button @click="setOrder(menu.id)" :key="index" class="selected" v-if="menu.id == selected" >{{menu.id}}</button>
      <button @click="setOrder(menu.id)" :key="index" class="others" v-else>{{menu.id}}</button>
    </template>
  </div>
</template>

<script>
export default {
  props: [ 'orders', 'selected' ],
  methods: {
    setOrder(val) {
      this.$emit('setOrder', val)
      this.$store.commit('restaurant/set_current_order', val)
    }
  }
}
</script>