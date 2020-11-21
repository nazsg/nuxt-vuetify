<template>
  <div class="home2" @click.self="test2">
    <div class="banner" :class="{dimBanner: cross}">
      <h3>Front-end web dev</h3>
      <h4>flavoured with bespoke APIs</h4>
    </div>
    <div class="search" :class="{newPos:cross}">
      <input @keydown="validate" type="text" v-model="keyword" @click="cross =true" placeholder="find resource... eg css, ssl, ubuntu, etc" />
      <cross title="Cancel and return" v-if="cross" class="cross" @click="keyword = '';cross = false" />
    </div>

    <div class="results" v-if="keyword != '' ">
      <p v-for="(data, index) in filteredTips" :key="index" v-html="data"></p>
    </div>
    <div class="emptyResults" v-if="filteredTips.length == 0">None found</div>
  </div>
</template>

<script>
import cross from "vue-material-design-icons/Close.vue";
export default {
  props: [ 'close'],
  components: { cross },
  data() {
    return {
      tips: ["test"],
      keyword: "",
      result: false,
      focus: false,
      cross: false
    };
  },
  methods: {
    search() {
      this.focus = true;
      this.hide = true;
    },
    init() {
      this.focus = false;
      this.hide = false;
      console.log("init");
    },
    validate() {
      // console.log(event)
      let k = event.keyCode
      if(k == 106 || k == 107) event.preventDefault()
      // alert(k)
    },
    test2() {
      // console.log('test from child')
      // this.cross = true
    }
  },
  created() {
    this.$axios
      .get("journal/show.php?showAll&orderBy=desc")
      .then(data => (this.tips = data.data.map(d => d.comment)));
  },
  computed: {
    filteredTips() {
      return this.tips.filter(tip => {
        return tip.toLowerCase().match(this.keyword.toLowerCase());
      });
    },
    video() {
      return !this.hide && this.filteredTips.length == this.tips.length;
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "../../sass-mixins/_styles";
</style>