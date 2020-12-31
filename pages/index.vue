<template>
  <div class="home">
    <!-- <div class="home" @click.self="cross = false;keyword = ''"> -->

    <!-- <button class="" @click="component = 'indexSearch'">Search</button>
  <button class="" @click="component = 'videoBg'">Video</button> -->
    <!-- <component v-bind:is="component"></component> -->

    <index-search :close="close" @click.native="close = true" />
    <!-- <cookies /> -->
    <!-- <indexOld /> -->
    <!-- <v-date-picker v-model="picker"></v-date-picker> -->
  </div>
</template>

<script>
import cookies from '~/components/cookies'
import videoBg from '~/components/video'
import indexOld from '~/components/index-old'
import cross from 'vue-material-design-icons/Close.vue'
export default {
  layout: 'default',
  components: { cross, indexOld, videoBg, cookies },
  head: {
    title: 'NazsNet | Front-end web dev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Resources and Such...',
      },
    ],
  },
  data() {
    return {
      tips: ['test'],
      keyword: '',
      result: false,
      focus: false,
      hide: false,
      cross: false,
      component: '',
      close: false,
      picker: new Date().toISOString().substr(0, 10),
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
    },
    validate() {
      let k = event.keyCode
      if (k == 106 || k == 107) event.preventDefault()
      // alert(k)
    },
    test() {
      // alert('ok')
      console.log('click from home')
      this.close = true
      console.log(this.close)
      this.$store.commit('set_show_home', true)
    },
  },
  created() {
    // this.$axios
    //   .get("journal/show.php?showAll&orderBy=desc")
    //   .then(data => (this.tips = data.data.map(d => d.comment)));
  },
  computed: {
    filteredTips() {
      return this.tips.filter((tip) => {
        return tip.toLowerCase().match(this.keyword.toLowerCase())
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../sass-mixins/_styles';
</style>
