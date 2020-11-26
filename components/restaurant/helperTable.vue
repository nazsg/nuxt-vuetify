<template>
  <ul class="table">
    <template v-for="(menu, index) in menus">
      <li
        v-if="menu.category == category"
        :key="index"        
      >
        <span class="item">{{ menu.item.slice(0, 40) }}</span>
        <span class="price">{{ menu.price }}</span>
        <div class="add">
          <cartPlus class="cartPlus" title="Add to cart" @click="add_to_cart([menu.id, menu.price, menu.item.slice(0, 40), 1])" />
        </div>        
        <itemQty :qty="qty" :menu="menu" />
      </li>
    </template>
  </ul>
</template>

<script>
import itemQty from "./item-qty";
import cartMinus from 'vue-material-design-icons/CartMinus.vue'
import cartPlus from 'vue-material-design-icons/CartPlus.vue'
export default {
  components: { itemQty, cartMinus, cartPlus },
  props: ["menus", "category"],
  methods: {
    add_to_cart(val) {
      this.$store.commit("restaurant/add_to_cart", val);
    }
  },
  computed: {
    current() {
      return this.$store.getters["restaurant/get_current_order"];
    },
    qty() {
      let orders = this.$store.getters["restaurant/get_orders"];
      let [order] = orders
        .filter(order => order.id === this.current)
        .map(order => order.cart);
      return order.map(order => order.id + "--" + order.qty);
    }
  }
};
</script>
