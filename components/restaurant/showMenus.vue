<template>
  <div class="menus">
    <menu-categories
      :category="category"
      :menus="menuCategories"
      @relay="category = arguments[0]"
    />
    <helper-table v-if="category != ''" :menus="menus" :category="category" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [],
      component: '',
      category: '',
    }
  },
  computed: {
    menuCategories() {
      return this.menus
        .map((menu) => menu.category)
        .filter((val, index, self) => self.indexOf(val) === index)
        .filter((m) => m !== 'header')
        .filter((m) => m !== 'category')
        .filter((m) => m !== '')
    },
  },
  mounted() {
    this.$axios.$get('https://nazs.net/api/menus').then((data) => {
      this.menus = data
      console.log(this.menus)
    })
  },
  methods: {
    setCategory(value) {
      this.category = value
    },
  },
}
</script>
