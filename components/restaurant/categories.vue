<template>
    <div class="menuCategories">
       <div>
        <h5>Menu Categories</h5>
        <template v-for="(menu, index) in menus">
          <button @click="setCategory(menu)" class="selected" v-if="menu == category" :key="index">{{menu.replace('_n_duck','')}}</button>
          <button @click="setCategory(menu)" class="others" v-else :key="index">{{menu.replace('_n_duck','')}}</button>
        </template>
       </div>
    </div>  
</template>

<script>
export default {
  props: [ 'menus', 'category'],
  methods: {
    setCategory(val) {
      this.$emit('relay', val)
    }
  }
}
</script>