<template>
  <div class="qty-in-cart">
    <template v-for="(q, index) in qty">
      <div v-if="q.slice(0, q.indexOf('--')) == menu.id" :key="index">
        <cart title="Quantity in cart" />
        {{ q.substr(q.indexOf('--'), 10).replace('--', '') }}
        <div class="minus">
          <cartMinus
            v-if="q.substr(q.indexOf('--'), 10).replace('--', '') > 0"
            class="cartMinus"
            title="Remove 1 from cart"
            @click="
              add_to_cart([menu.id, menu.price, menu.item.slice(0, 40), -1])
            "
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import cart from 'vue-material-design-icons/CartOutline.vue'
import cartMinus from 'vue-material-design-icons/CartMinus.vue'
export default {
  components: { cart, cartMinus },
  props: {
    qty: {
      type: [String, Object, Array],
      default: '',
    },
    menu: {
      type: [String, Object, Array],
      default: '',
    },
  },
  computed: {
    // itemQty() {
    //   let q = this.qty
    //   return q.substr(q.indexOf("--"), 10).replace("--", "")
    // }
  },
  methods: {
    del(item) {
      alert('deleting ' + item)
    },
    add_to_cart(val) {
      this.$store.commit('restaurant/add_to_cart', val)
    },
  },
}
</script>
