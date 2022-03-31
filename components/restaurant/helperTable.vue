<template>
  <ul class="table">
    <template v-for="(menu, index) in partMenu">
      <li v-if="menu.category == category" :key="index">
        <span class="item">{{ menu.item.slice(0, 40) }}</span>
        <span class="price">{{ menu.price }}</span>
        <div class="add">
          <cartPlus
            class="cartPlus"
            title="Add to cart"
            @click="
              add_to_cart([menu.id, menu.price, menu.item.slice(0, 40), 1])
            "
          />
        </div>
        <itemQty :qty="qty" :menu="menu" />
      </li>
    </template>
  </ul>
</template>

<script>
import cartPlus from 'vue-material-design-icons/CartPlus.vue'
export default {
  components: { cartPlus },
  props: {
    menus: {
      type: [String, Object, Array],
      default: '',
    },
    category: {
      type: [String, Object, Array],
      default: '',
    },
  },
  computed: {
    current() {
      return this.$store.getters['restaurant/get_current_order']
    },
    partMenu() {
      return this.menus
        .filter((m) => m.category !== 'header')
        .filter((m) => m.category === this.category)
        .filter((m) => m.category !== '')
        .slice(-7)
    },
    qty() {
      const orders = this.$store.getters['restaurant/get_orders']
      const [order] = orders
        .filter((order) => order.id === this.current)
        .map((order) => order.cart)
      return order.map((order) => order.id + '--' + order.qty)
    },
  },
  methods: {
    add_to_cart(val) {
      this.$store.commit('restaurant/add_to_cart', val)
    },
  },
}
</script>
