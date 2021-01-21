<template>
  <div>
    <div class="newEvent">
      <form>
        <div class="formats">
          <formattings />
        </div>
        <textarea
          style="display: none; font-family: Courier"
          name="myTextArea"
          id="myTextArea"
          cols="30"
          rows="5"
        ></textarea>
        <iframe
          frameborder="1"
          name="richTextField"
          id="richTextField"
          ref="richTextField"
          class="myFrame"
        ></iframe>
        <div class="actions">
          <v-btn @click="$router.push('/journal')">Cancel</v-btn>
          <v-btn @click="clear">Clear</v-btn>
          <v-btn @click="submitLog">Submit</v-btn>
        </div>
      </form>
      <!-- <button @click="login">login</button> -->
    </div>
  </div>
</template>

<script>
import wys from '~/functions/wysiwyg'
export default {
  data() {
    return {
      tips: [],
      search: '',
      el: '',
    }
  },
  computed: {
    filteredTips() {
      return this.tips.filter(tip => {
        return tip.comment.toLowerCase().match(this.search.toLowerCase())
      })
    },
  },
  mounted() {
    this.getJournal()
    this.el = this.$refs.richTextField.name
    if (this.$refs.richTextField != 'undefined') {
      setTimeout(() => {
        window.frames['richTextField'].document.designMode = 'On'
      }, 1000)
    }
  },
  created() {
    this.$axios.get('api/journals').then(data => (this.tips = data.data))
  },
  methods: {
    getJournal() {
      let id = this.$route.params.journal
      this.$axios.get('api/journals/' + id).then(data => {
        this.journal = data.data
        window.frames['richTextField'].document.body.innerHTML = data.data.comment
      })
    },
    clearSearch() {
      this.search = ''
    },
    logout() {
      this.$store.commit('set_loggedIn', false)
      localStorage.removeItem('token')
    },
    login() {
      this.$axios
        .post('/api/user/login', {
          email: 'test@google.org',
          password: '123456',
        })
        .then(res => {
          console.log(res.data)
          localStorage.setItem('token', res.data.token)
        })
    },
    clear() {
      window.frames['richTextField'].document.body.innerHTML = ''
    },
    submitLog() {
      // this.log.comment = wys.showForm(this.el)
      let id = this.$route.params.journal
      let info = {
        comment: window.frames['richTextField'].document.body.innerHTML,
        // topic: 'testing only',
      }
      console.log(info)
      this.$axios
        .put('/api/journals/' + id, info, {
          headers: { token: localStorage.getItem('token') },
        })
        .then(data => {
          console.log(data.data)
        })
      this.clearFrame()
    },
    clearFrame() {
      setTimeout(() => {
        // this.log.topic = ''
        document.getElementById(this.el).contentDocument.body.innerHTML = ''
      }, 1000)
      this.$router.push('/journal')
    },
  },
}
</script>

<style lang="scss" scoped>
.newEvent form {
  margin-top: 20px;
}
textarea {
  background-color: rgb(247, 173, 173);
  &:focus,
  &:active,
  &:hover {
    background-color: rgb(219, 224, 150);
  }
}
.filter {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 350px;
  margin: 0 auto;
}
.close-icon.btn {
  color: #999;
  cursor: pointer;
  &:hover {
    color: red;
  }
}
.search {
  display: flex;
  width: 300px;
  border: 1px solid #ccc;
  height: 30px;
  justify-content: center;
  align-items: center;
  margin: 5px auto;
  outline: none;
  padding: 10px;
}
.journalContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  .journal {
    // border: 1px solid #ccc;
    .date {
      background-color: #e7e6e6;
      padding: 5px;
    }

    .comment {
      padding: 15px;
      word-wrap: break-word;
      // word-wrap: break-all;
      // word-wrap: normal;
      white-space: initial;
      // width: 550px;
    }
    display: flex;
    flex-direction: column;
    background-color: #f8f4f4;
    margin: 5px 0;
  }
  @media (min-width: 600px) {
    .journal {
      flex-direction: column;
      width: 580px;
      margin: 2px auto;
      .date {
        width: 20%;
      }
      .comment {
        width: 80%;
      }
    }
  }
  @media (min-width: 800px) {
    .journal {
      width: 790px;
    }
  }
}
</style>
