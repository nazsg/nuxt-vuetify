<template>
  <div>
    {{ data }}
    <button @click="cors1">CORS</button>
    <button @click="cors2">CORS2</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: 'initial data'
    }
  },
  methods: {
    cors1() {
      this.$axios.$get('http://localhost:4000/cors?msg=hello from vue')
      // this.$axios.$get('http://localhost:4000/cors')
      .then(res => {
        console.log(res)
      })
      .catch(e => console.log(e))
    },
    cors2() {
      this.$axios.$post('http://localhost:4000/cors',
      {
        msg: 'hello posted by vue'
      })
      .then(res => {
        console.log(res)
      })
      .catch(e => console.log(e))      
    }
  },
  created() {

  }
}
</script>