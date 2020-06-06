<template>
  <div class="home">
    <div class="search">
      <input type="text" v-model="keyword" placeholder="find scratch pad">
      <cross class="cross" @click="keyword = ''" />
    </div>
    <div class="results" v-if="keyword != '' ">
      <p v-for="(data, index) in filteredTips" :key="index" v-html="data"></p>
    </div>
    <div class="emptyResults" v-if="filteredTips.length == 0">None found</div>
  </div>
</template>

<script>
import cross from 'vue-material-design-icons/Close.vue'
export default {
  components: { cross },
  data() {
    return {
      tips: ['test'],
      keyword: '',
      result: false,
      focus: false,
      hide: false,
    }
  },
  methods: {
    search() {
      this.focus = true
      this.hide = true
    },
    init() {
      this.focus = false
      this.hide = false
      console.log('init')
    }
  },
  created() {
    this.$axios.get('journal/show.php?showAll&orderBy=desc')
      .then(data => this.tips = data.data.map(d => d.comment))
  },
  computed: {
    filteredTips() {
      return this.tips.filter( tip => {
        return tip.toLowerCase().match(this.keyword.toLowerCase())
      })
    },
  }
}
</script>

<style lang="scss" scoped>
 @import '../../sass-mixins/_styles';

</style>