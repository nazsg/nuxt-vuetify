<template>
  <div class="showcase">
    
      <form class="robot">
        <div class="group name">
          <label for="name">Name:</label>
          <input type="text" placeholder="Your name" v-model="visitor.name">
        </div>
        <div class="group email">
          <label for="email">Email:</label>
          <input type="text" placeholder="Your email" v-model="visitor.email">
        </div>
        <div class="group message">
          <label for="message">Message</label>
          <textarea name="" id="" cols="30" rows="10" placeholder="Your message" v-model="visitor.message" ></textarea>
        </div>{{ pin }} {{ result }} {{ guessPin }}
        <div class="group">
          <p>Reproduce the code above using the numbers below</p>
        </div>
        <div class="group choice">
          <i v-for="(no, index) in choice" :key="index" v-html="no.n" @click="checkPin(no.d)"></i>
        </div>
        <div class="group action">
          <a @click="resetForm" class="not4Submit"><Delete title="Reset Form" fillColor="#4f0a58" :size="36" /></a>
          <a @click="callPin" class="not4Submit"><Refresh title="New PIN" fillColor="#4f0a58" :size="36" /></a>
          <a @click="1" class="submit" :class="{ allowForm }"><Send  :size="36" /></a>
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
      allowForm: false,
      guessPin: '',
      result: ''
    }
  },  
  created() {
    this.callPin()
  },

  methods: {
    resetForm() {
      this.visitor = {}
    },
    callPin() {
      this.$axios.$get('noRobot')
      .then(data => {
        this.pin = data
        this.guessPin = ''
        this.result = ''
        this.allowForm = false  
      })
    },
    checkPin(no) {
      let temp = ''
      temp = temp.concat(no)
      this.guessPin = this.guessPin.concat(no)
      if(this.guessPin.length == 4) { 
        if(parseInt(this.pin) === parseInt(this.guessPin)) {
          this.result = ' is equal to ' 
          this.allowForm = true
        } else {
          this.result = ' is not equal to '
        }
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
  // color: #000;
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
    .not4Submit {
      cursor: pointer;
    }
    // .submit {
    //   cursor: none;
    // }
  }

  .submit {
  color: rgb(146, 144, 144);
  cursor: none;
}
  .allowForm {
    color: #4f0a58;
    cursor: pointer;
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