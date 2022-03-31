<template>
  <div>

    <!-- url /randomtext?id999 -->
    <!-- get the value after "/" -->
    <p>{{$route.params.id}}</p>
    
    <!-- get the value after ?id= -->
    <p>{{$route.query.id}}</p>
    <p> {{messasge}}</p>
    <h1>Nuxt Playground</h1>
    <ul>
      <li v-for='tip in tips' :key="tip.id">
        {{ tip.content }}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  // validate({params,query,store}) {
    // return /^\d+$/.test(params.id)
  // }
  // middleware 
  middleware: ['mw1'],
  asyncData(context) {
    return axios.post('http://localhost:4000/retrieve')
    .then(res => {
      if(res.data[0]) {
        console.log(context.store.state)
        return {tips:res.data} // tips will be merged with Vue data
      } else {
        context.error({message:res.data[1]})
      }
    })
    .catch(err => {
      context.error({message:err.message})
    })
  },  
}
</script>