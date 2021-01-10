<template>
  <div class="login">
    <form>
      <input type="password" v-model="password" />
      <v-btn @click.prevent="login">Submit</v-btn>
      <p>{{ errors }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      errors: '',
    }
  },
  methods: {
    login() {
      if (this.password != '') {
        this.errors = ''
        this.$axios
          .post('/api/user/login', {
            email: 'test@google.org',
            password: this.password,
          })
          .then(res => {
            console.log(res.data)
            if (res.statusText === 'OK') {
              localStorage.setItem('token', res.data.token)
              this.$router.push('/journal')
            }
            // this.errors = ''
          })
          // .catch(err => console.log(err.response))
          .catch(err => {
            // this.errors = err.response.data
            // console.log(err.response)
            this.errors = err.response.data
          })
      } else {
        this.errors = 'empty credentials'
      }
    },
  },
}
</script>
