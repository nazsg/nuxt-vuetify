<template>
  <div>

    <!-- url /randomtext?id999 -->
    <!-- get the value after "/" -->
    <p>{{$route.params.id}}</p>
    
    <!-- get the value after ?id= -->
    <p>{{$route.query.id}}</p>
    <!-- <p> {{message}}</p> -->
    <h1>Vuex Playground</h1>
    <p>Data from $store</p>
    <ul>
      <li v-for='tip in $store.state.tips' :key="tip.id">
        {{ tip.content }}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  middleware: ['mw1'],
  // fetch(context) {
  //   return axios.post('http://localhost:4000/retrieve')
  //   .then(res => {
  //     if(res.data[0]) {
  //       context.store.commit('set_tip', res.data)
  //       return {tips:res.data} // tips will be merged with Vue data
  //     } else {
  //       context.error({message:res.data[1]})
  //     }
  //   })
  //   .catch(err => {
  //     context.error({message:err.message})
  //   })
  // },  
}
</script>