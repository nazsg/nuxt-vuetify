<template>
  <div id="naz">
    <h1>test</h1>
    <!-- <p class="huge">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, eius laudantium. Debitis voluptates voluptate voluptatem minus vel in. Asperiores sed cupiditate quas corporis? Hic doloribus at quisquam impedit! Expedita, eligendi.</p> -->
    <slot-component>
      <p slot="header"> header</p> 
      <p slot="body"> body </p>
      <p>Test again</p>    
    </slot-component>
    <form action="" v-if="!loggedIn">
      <input type="text" v-model="username">
      <input type="text" v-model="password">
      <button @click.prevent="login">Login</button>
    </form>
    <div v-else>
      <h2>
        Logged In successfully
      </h2>
      <button @click.prevent="show">show</button>
      <p>{{ posts }}</p>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      username: 'test@google.org', password: '123456',
      loggedIn: false,
      posts: ''
    }
  },
  mounted() {
    this.loggedIn = false
    if(localStorage.getItem('token')) this.loggedIn = true
    
    // if(!localStorage.getItem('token'))  {
    //   this.loggedIn = false
    // } else {
    //   this.loggedIn = true
    // }
    // if(localStorage.getItem('token')) 
    // this.loggedIn = true
    

  },
  methods: {
    async show() {
      // await this.$axios.get('http://localhost:4000/api/posts')
      await this.$axios.get('http://localhost:3000/api/menus', { headers: {token: localStorage.getItem('token')} })
      .then(res => this.posts = res.data,
      err => {
        console.log(err.response)
        this.posts = 'error occurred'
      })
    },
    async login() {
      const loginData = {email: this.username, password: this.password}
      await this.$axios.post('http://localhost:3000/api/user/login', loginData)
      // this.$axios.post('http://localhost:3000/api/user/login', loginData)
      .then(res => {
        if(res.status ===200) {
          localStorage.setItem('token', res.data.token)
          this.loggedIn = true
        }
      }, err => {
        console.log(err.response)
      }
      )
    }
  }

}
</script>
<style lang="scss" scoped>
@import '../../sass-mixins/_styles';
#naz {
  h1, * { color: rgb(175, 166, 166)}
  @include fullPage;
  background-image: url('/blue-purple.jpg');
  height: 100%;
}

.test {
  width: 90%;
  word-wrap: break-word;
}

input {
  outline: none;
  border: 1px solid #999;
  padding: 5px;
  background-color: #494848;
  color: #000;
}
</style>