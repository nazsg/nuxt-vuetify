import vuex from 'vuex'
import axios from 'axios'

var config = {
  state: {
      msg: 'msg defined in vuex store', 
      tips: []
  },
  getters: {},
  mutations: {
    set_tip(state,arg) {
      state.tips = arg
    }
  },
  actions: {
    nuxtServerInit(vuex_context, nuxt_context) {
      return axios.post('http://localhost:4000/retrieve')
      .then(res => {
        if(res.data[0]) {
          vuex_context.commit('set_tip', res.data)
          return {tips:res.data} // tips will be merged with Vue data
        } else {
          nuxt_context.error({message:res.data[1]})
        }
      })
      .catch(err => {
        nuxt_context.error({message:err.message})
      })      
    }
  }
}

export default function() {
  return new vuex.Store(config)
}