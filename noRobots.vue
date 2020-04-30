<template>
  <!-- <div> -->
    <div class="main">

        <template v-if="!submitted">
          <form class="animated fadeIn">
            <div class="form-group">
              <label for="">Name</label>
              <input type="text" v-model="hi.name" class="form-control" placeholder="name">
            </div>
            <div class="form-group">
              <label for="">Email</label>
              <input type="email" v-model="hi.email" class="form-control" placeholder="email address">
            </div>
            <div class="form-group">
              <label for="">Message</label>
              <textarea v-model="hi.message" rows="8" cols="80" class="form-control" placeholder="message"

              ></textarea>
            </div>

            <template v-if="disable">
              <label for="" class="code">{{ nos }}  {{ temp }}</label>
              <i class="ok" v-if="check"></i>
            </template>

            <div  v-if="disable" class="choice">
              <template >
                <p>Reproduce the code above using the numbers below</p>
                <i v-for="(no, index) in choice" :key="index" v-html="no.n" @click="choose(no.d)"></i>
              </template>
            </div>

            <v-btn v-if="disable" type="button" name="button" class="btn btn-default" @click="resetCode">Reset code</v-btn>
            <v-btn v-else type="button" name="button" class="btn btn-default" @click="resetForm">Reset</v-btn>

            <v-btn :class="{disable: disable}" type="button" @click="sayHi"
            class="btn btn-default">Submit</v-btn>
            <div class="errors">{{error}}</div>
          </form>
        </template>
        <template v-else>
          <p class="submitted">Your message is sent. You have been part of a home-coded robot-deterrent captcha demo. -- naz</p>
          <v-btn @click="doOver">Start over</v-btn>
        </template>
  </div>

  <!-- </div> -->
</template>

<script>
import norobots from '~/functions/norobots'
import axios from 'axios'
export default {
  components: {
    // 'app-helper': helper
  },
  data () {
    return {
        // items: items
        hi: {
          "name": '', "email": '', "message": '', "submitToNaz":''
        },
        nos : '',
        answer: '',
        guess: '',
        choice : norobots.choice,
        check: false,
        cross: false,
        disable: true,
        temp: '',
        error: '',
        submitted: false

    }
  },
  computed: {
    welcome() {
      var x = '';
      if(this.disable) {
          x = '';
      } else {
        x = '';
      }
      return x;
    }

  },
  methods: {
    doOver() {
      this.submitted = false;
      this.hi = {};
      this.resetCode();
    },
    choose(no) {
      // norobots.getResult(no, this.guess, this.temp, this.check, this.disable, this.nos)
      this.guess = this.guess.concat(no);
      this.temp = this.temp.concat('*');
      if(this.guess.length == 4) {
        if(this.guess == this.nos ) {
          this.check = true;
          this.disable = false;
        } 
      }
    },
    sayHi() {
      if(this.hi.name != '' && this.hi.message != '' && this.hi.email != '') {
        var atpost = this.hi.email.indexOf("@");
        var dotpos = this.hi.email.lastIndexOf(".");
        if(atpost < 1 || dotpos < atpost + 2 || dotpos + 2 >= this.hi.email.length) {
          this.error = 'please enter a valid email address';
        } else {
          this.$http.post(this.$store.state.url + 'mailer', this.hi).then(function(){
          this.submitted = true;
          });
        }
      } else {
        this.error = this.disable ? '' : "please fill out all fields";
      }
    },
    resetCode() {
      this.guess = '';
      axios.get(this.$store.state.url + 'noRobot')
      .then(data => {
        this.nos = data.data;
        this.check = false;
        this.disable = true;
        this.temp = '';
        this.error = '';
      });
    },
    resetForm() {
      this.hi.name = ''
      this.hi.email = ''
      this.hi.message = ""
    }
},
  created() {
    // this.guess = '';
    // console.log(data.bodyText);
    axios.get(this.$store.state.url + 'noRobot')
    .then(data => { this.nos = data.data })
    .catch(err => console.log('Error: ', err))
  }
}
</script>

<style lang="scss" scoped>
// @import "../style";


.main {
  display: flex;
  flex-direction: column;
  background-color: blue;
  // padding: 40px 0;
  justify-content: center;
  align-items: center;
  // flex: 1 auto 1;
  height: 100vh;
  background-image: url('https://nazs.net/static/abst8.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}
.submitted {
  background-color: #ccc;
  padding: 20px;
  color: #333;
  border-radius: 7px;
}
h4 {
  flex: 1;
}
form {

  .errors {
    font-style: italic;
    margin-top: 10px;
    height: 10px;
  }
  // margin: auto;
  // flex: 3;

// text-align: left;
  // @include push--auto(90%);
  // text-align: left;
  color: #333;
  // margin:  auto 0;
  width: 600px;
  // background: lightblue;
  border-radius: 7px;
  padding: 30px;
}

.noRobots {
  width: 0%;
  // @include push--auto(90%);
}

.choice {

  i {
    @media (max-width:500px) {
      font-size: 2.3em;
    }
    font-style: normal;
    cursor: pointer;
    letter-spacing: 0.2em;
    font-size: 2.5em;
    color: red;
    &:hover {
      color: #000;
    }
  }
}
.nos .guess {
  display: block;
  clear: both;
}
.ok {
  color: green;
  font-size: 1.5em;
  &:after {
    content: "\02714"
  }
}
.code {
  letter-spacing: 0.5em;
  font-family: monospace;
  font-size: 1.5em;
  color: red;
}
h5 {
  font-size: 1.2em;
}
button {
  background-color: rgb(204,204,204);
}
</style>
