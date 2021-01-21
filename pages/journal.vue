<template>
  <div>
    <div class="journalContainer">
      <div class="filter">
        <input type="text" v-model="search" class="search" />
        <Close @click="clearSearch" class="btn" />
        <Logout @click="logout" class="btn" />
      </div>
      <!-- {{tips}} -->
      <template v-if="search != ''">
        <div class="journal" v-for="(tip, index) in filteredTips" :key="index">
          <!-- <div class="date" v-html="tip.formattedDate"></div> -->
          <nuxt-link :to="`/editJournal/${tip._id}`"><Pencil /></nuxt-link>
          <div class="comment" v-html="tip.comment"></div>
        </div>
      </template>
    </div>
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
  middleware: 'login',
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
    this.el = this.$refs.richTextField.name
    setTimeout(() => {
      wys.editableFrame(this.el)
    }, 100)
    // console.log(localStorage)
  },
  created() {
    this.$axios.get('api/journals').then(data => (this.tips = data.data))
  },
  methods: {
    clearSearch() {
      this.search = ''
    },
    logout() {
      this.$store.commit('set_loggedIn', false)
      localStorage.removeItem('token')
      this.$router.push('/')
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

      let info = {
        comment: window.frames['richTextField'].document.body.innerHTML,
        topic: 'testing only',
      }
      console.log(info)
      this.$axios
        .post('/api/journals', info, {
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
    },
  },
}
</script>

<style lang="scss" scoped>
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
.material-design-icon.btn {
  color: #999;
  padding: 0 10px;
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
