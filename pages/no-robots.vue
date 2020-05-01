<template>
  <div class="showcase">
    
      <form class="robot">
        <div class="group name">
          <label for="name">Name:</label>
          <input type="text" placeholder="Your name">
        </div>
        <div class="group email">
          <label for="email">Email:</label>
          <input type="text" placeholder="Your email">
        </div>
        <div class="group message">
          <label for="message">Message</label>
          <textarea name="" id="" cols="30" rows="10" placeholder="Your message"></textarea>
        </div>{{ pin }} {{ result }} {{ guessPin }}
        <div class="group">
          <p>Reproduce the code above using the numbers below</p>
        </div>
        <div class="group choice">
          <i v-for="(no, index) in choice" :key="index" v-html="no.n" @click="checkPin(no.d)"></i>
        </div>
        <div class="group action">
          <a @click="callPin">Clear</a>
          <a @click="1">Submit</a>
        </div>
      </form>
  </div>
</template>

<script>
import norobots from '~/functions/norobots'
export default {
  data() {
    return {
      pin: '', choice: norobots.choice,
      visitor: {
        name: '', email: '', message: ''
      },
      stopForm: true,
      guessPin: '',
      result: ''
    }
  },  
  created() {
    this.callPin()
  },

  methods: {
    callPin() {
      this.$axios.$get('noRobot')
      .then(data => {
        this.pin = data
        this.guessPin = ''
        this.result = ''  
      })
    },
    checkPin(no) {
      let temp = ''
      let r = this.result
      temp = temp.concat(no)
      this.guessPin = this.guessPin.concat(no)
      if(this.guessPin.length == 4) { 
        (parseInt(this.pin) === parseInt(this.guessPin)) 
          ? r = ' is equal to ' 
          : r = ' is not equal to '
        this.result = r
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass-mixins/_styles';

.showcase {
  @include fullPage;
  background: url('https://nazs.net/static/wallpaper.jpg') no-repeat;
}

form.robot {
  background-color: rgba(255, 255, 255, 0.842);
  color: #000;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 7px;

  .group {
    display: flex;
    margin: 10px 20px;
    border: 1px dotted #999;
    flex-direction: column;
    justify-content: space-around;

    input {
      border: 1px dotted #666;
    }     
  }
  .group.name, .group.email, .group.message {
    justify-content: start;
    align-items: flex-start;
  }
  .group.action {
    flex-direction: row;
    justify-content: space-evenly;
  }
  .choice {
    display: inline-block;
    font-size: 40px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    user-select: none;
    i {
      font-style: normal;
      cursor: pointer;
      letter-spacing: .2em;
      font-size: 1.3em;
      color: #4f0a58;
    }
  }
}

</style>