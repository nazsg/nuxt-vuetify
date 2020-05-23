<template>
  <div class="showcase">
    
      <form class="robot">
        <ul>
          <li class="name">
            <label for="name">Name</label>
            <input type="text" placeholder="Your name" v-model="visitor.name">
          </li>
          <li class="message">
            <label for="message">Message</label>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your message" v-model="visitor.message" ></textarea>
          </li>
          <template v-if="pin.length > 0">
            <li style="font-style:italic">
              Click on the numbers in green ({{pin.toString()}}) to enable form
            </li>
            <li class=" choice">
              <template v-for="(no, index) in choice">
                <i v-if="pin.includes(no.d)" :key="index" v-html="no.n"   
                  class="pin" @click="checkPin(no.d)"                
                ></i>
                <!-- <i v-else :key="index" v-html="no.n" class="others"></i> -->
              </template>
            </li>
          </template>
          <li class=" action">
            <button @click.prevent="resetForm">Clear</button>
            <button @click.prevent="submit" class="submit" :class="{allowForm}">Submit</button>
          </li>
        </ul>
      </form>
  </div>
</template>

<script>
import norobots from '~/functions/norobots'
export default {
  data() {
    return {
      pin: [], choice: norobots.choice,
      visitor: {
        name: '', email: '', message: ''
      },
      allowForm: true,
      guessPin: [],
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
      this.pin = []
      this.$axios.$get('noRobot')
      .then(data => {
        this.pin.push(Math.floor( (data /1000) %10))
        this.pin.push(Math.floor( (data /100) %10))
        this.pin.push(Math.floor( (data /10) %10))
        this.pin.push(Math.floor( (data /1) %10))
        this.pin = this.pin
          .filter( (val, index, self) => self.indexOf(val) === index )
        this.guessPin = []
        this.result = ''
        this.allowForm = false    
      })     
    },
    checkPin(no) {
      this.pin = this.pin.filter(p => p !== no)
      if(this.pin.length == 0) this.allowForm = true
    },
    submit() {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass-mixins/_styles';
$color: #240529;
$color2: #b345c2;
$border-size: 0px;

.showcase {
  @include fullPage;
  background: url('https://nazs.net/static/wallpaper.jpg') no-repeat;
  height: 100%;
}

form.robot {
  font-family: Roboto;
  color: $color;
  background-color: rgba(255, 255, 255, 0.842);
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 7px;
  margin-bottom: 25px;
  padding: 20px;
  ::placeholder {
    color: #9e74b9;
  }
  li {
    @include border1;
    display: flex;
    margin: 10px 0px;
    // flex-direction: column;
    justify-content: space-around;
    label {
      flex-basis: 30%;
      padding: 10px;
      // background-color: rgb(121, 104, 104);
    }
    input, textarea {
      border: 1px solid #4f0a5862;
      padding: 10px;
      width: 100%;
    }     
  }
  li.name, li.message {
    // width: 500px;
    margin: 10px auto;
    padding: 5px;
    background-color: #fff;
    flex-direction: row;
    border: $border-size dotted #999;
    text-align: right;
    @media (max-width: 600px) {
      flex-direction: column;
      label {
        text-align: left;
      }
    }
    @media (max-width: 750px) {
      width: 100%;
    }
  }
  li.action {
    flex-direction: row;
    justify-content: space-evenly;

    button {
      outline: none;
      padding: 10px;
      background-color: #fff;
      border: 1px solid #fff;
      &:hover {
        background-color: rgb(129, 127, 127);
        // border-color: #666;
      }
    }
    button.submit {
      color: rgb(219, 218, 218);
      background-color: #a09c9c;
      cursor: none; 
      cursor: not-allowed;
    }
    button.allowForm {
      background-color: #fff;
      color: inherit;
      cursor: pointer;
      &:hover {
        background-color: rgb(129, 127, 127);
      }
    }
  }
  .choice {
    display: inline-block;
    font-size: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    user-select: none;
      flex-wrap: wrap;
    // border-top: 1px solid $color;
    // border-bottom: 1px solid $color;
    i.pin {
      color: green;
      cursor: pointer;
      &:hover {
        color: #0c0c0c;
      }
    }
    i.others {
      color: rgb(76, 76, 102);
    }      
    i {
      font-style: normal;
      transition: .3s;
      letter-spacing: .2em;
      font-size: 1.2em;
      color: $color;
    }
    @media (max-width: 600px) {
      justify-content: center;
      i {        
        // font-size: 1rem;
        transition: .3s;
      }
    }
  }
}

</style>