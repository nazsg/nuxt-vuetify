import Vue from 'vue'
import axios from 'axios'

const eventBus = {}

eventBus.install = function (Vue) {
  Vue.prototype.$bus = new Vue({
    data() {
      return {
        myhost: 'https://panteli.biz/',
        home: [],
        no_cat: [],      
        cold_drinks_cans: [],
        tips: []
      }
    },
    methods: {
      async getHome2() { // not working
         await this.$axios.$get(this.myhost + 'others')
         .then(res => this.home2 = ndata)
         .catch(e => console.log(e))
        // this.home2 = ndata
      },
      getHome() {
         axios.get(this.myhost + 'others')
         .then(res => this.home = res.data)
         .catch(e => console.log(e))
      },
      getAllMenus(val) {
        axios.get(this.myhost + 'all2')
        .then(res => {
          this.down = res.data
          this.catDown()
        })
      },
      catDown() {
        const all = this.down
      },
      getUpMenus() {
        axios.get(this.myhost + 'upstairs-20')
        .then(res => {
          this.up = res.data
          this.catUp()
        })
        .catch(e => console.log(e))
      },
      catUp() {
        const all = this.up
        this.no_cat = all.filter(m => m.category === 'no cat')
      },
      testCall() {
        return 'this is a function from bus.js'
      }
    },
    created() {
      // this.getHome()
      // this.getUpMenus()
      // this.getAllMenus()
      // axios.get('journal/show.php?showAll&orderBy=desc')
      // .then(data => {
      //   this.tips = data
      // })
    }
  })
}

Vue.use(eventBus)