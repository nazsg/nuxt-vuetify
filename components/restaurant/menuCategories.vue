<template>
  <div class="menuCategories">
    <div>
      <h5>Menu Categories</h5>
      <template v-for="(menu, index) in menus">
        <button
          v-if="menu == category"
          :key="menu.id"
          class="selected"
          @click="setCategory(menu)"
        >
          {{ menu.replace('_n_duck', '') }}
        </button>
        <button v-else :key="index" class="others" @click="setCategory(menu)">
          {{ menu.replace('_n_duck', '') }}
        </button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
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
  methods: {
    setCategory(val) {
      this.$emit('relay', val)
    },
  },
}
</script>
