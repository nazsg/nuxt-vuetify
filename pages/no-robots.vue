<template>
  <div class="showcase">
    <div v-if="formSubmitted">
      <p class="submitted">..didn't think you'd submit but thank you.</p>
    </div>
    <form v-else class="robot">
      <li class="name">Implementation of captcha</li>
      <ul>
        <li class="name">
          <input type="text" placeholder="name" v-model="visitor.name" />
        </li>
        <li class="name">
          <input type="text" placeholder="email" v-model="visitor.email" />
        </li>
        <li class="message">
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="message"
            v-model="visitor.message"
          ></textarea>
        </li>

        <template v-if="pin.length > 0">
          <li class="choice">
            <template v-for="(no, index) in choice2">
              <i
                v-if="pin.includes(no.d)"
                :key="index"
                v-html="no.n"
                class="others"
              >
              </i>
            </template>
          </li>
        </template>
      </ul>
      <ul>
        <template v-if="pin.length > 0">
          <li style="font-style: italic">
            Click on the numbers below that appear above
          </li>
          <li class="choice">
            <template v-for="(no, index) in choice">
              <i
                :key="index"
                v-html="no.n"
                class="pin"
                @click="checkPin(no.d)"
              ></i>
            </template>
          </li>
        </template>
        <li class="action">
          <button @click.prevent="clear">Clear</button>
          <button @click.prevent="callPin">Reload</button>
          <button v-if="!allowForm" @click.prevent="" class="submit">
            Submit
          </button>
          <button v-else @click.prevent="validate" :class="{ allowForm }">
            Submit
          </button>
        </li>
        <p class="formErro">{{ formError }}</p>
      </ul>
    </form>
  </div>
</template>

<script>
import norobots from "~/functions/norobots";
export default {
  layout: "default",
  head: {
    title: "No Robots",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "No robots - human detection",
      },
    ],
  },
  // middleware: ['mw1'],
  data() {
    return {
      pin: [],
      choice: norobots.choice,
      visitor: {
        name: "",
        email: "",
        message: "",
        token: "licensed",
      },
      allowForm: true,
      guessPin: [],
      pin2: [],
      choice2: norobots.choice2,
      formSubmitted: false,
      formError: "",
    };
  },
  created() {
    this.callPin();
  },

  methods: {
    clear() {
      (this.visitor.name = ""),
        (this.visitor.email = ""),
        (this.visitor.message = ""),
        (this.formError = "");
    },
    callPin() {
      this.pin = [];
      this.pin.push(Math.floor(Math.random() * 7) + 1);
      this.pin.push(Math.floor(Math.random() * 7) + 1);
      this.pin.push(Math.floor(Math.random() * 7) + 1);
      this.pin.push(Math.floor(Math.random() * 7) + 1);
      this.pin = this.pin.filter(
        (val, index, self) => self.indexOf(val) === index
      );
      this.guessPin = [];
      this.result = "";
      this.allowForm = false;
      this.choice = norobots.choice;
      this.shuffleChoice(this.choice2);
    },
    genPin() {
      let all = [];
      // let r = Math.floor(Math.random() *7) +1
      // let n1, n2, n3, n4
      let n1 = Math.floor(Math.random() * 7) + 1;
      let n2 = Math.floor(Math.random() * 7) + 1;
      let n3 = Math.floor(Math.random() * 7) + 1;
      let n4 = Math.floor(Math.random() * 7) + 1;
      all.push(n1);
      all.push(n2);
      all.push(n3);
      all.push(n4);
      this.pin = all.filter((val, index, self) => self.indexOf(val) === index);
      // console.log(all)
      this.choice = norobots.choice;
    },
    checkPin(no) {
      this.pin = this.pin.filter((p) => p !== no); // remove clicked no from the Pin array
      if (this.pin.length == 0) this.allowForm = true;
      // this.shuffleChoice(this.choice)
    },
    validate() {
      let _ = this.visitor;
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let err = false;
      let email_err = "";
      if (_.name == "" || _.email == "" || _.message == "") err = true;
      if (_.email.trim() !== "") {
        if (re.test(String(_.email).toLowerCase()) == false) {
          err = true;
          email_err = " and email needs a valid format";
        }
      } else {
        err = true;
      }
      if (err == true) this.formError = "all fields required" + email_err;
      if (err == false) this.submit();
    },
    submit() {
      this.$axios
        .post("api/mail/mail2", this.visitor)
        .then((res) => {
          if (!res.data.error) {
            // email server error
            console.log(res);
            this.formSubmitted = true;
          } else {
            console.log(res);
            this.formError =
              "Sorry your message was not sent. Please try again later.";
          }
        })
        .catch((err) => {
          // route error
          console.log(err);
          this.formError =
            "Sorry your message was not sent. Please try again later.";
        });
    },
    shuffleChoice(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass-mixins/_styles";
$color: #240529;
$color2: #b345c2;
$border-size: 0px;

.showcase {
  .submitted {
    // color: white;
    letter-spacing: 4px;
    background: #999;
    padding: 15px;
  }
  @include fullPage;
  background-image: url("/wallpaper.jpg");
  height: 100%;

  form.robot {
    @media (min-width: 800px) {
      max-width: 800px;
      margin: 0 auto;
    }
    * {
      transition: 300ms;
    }
    font-family: Roboto;
    color: $color;
    background-color: rgba(255, 255, 255, 0.842);
    width: 100%;
    display: flex;
    flex-direction: column;
    // margin: 0 auto;
    border-radius: 7px;
    margin-bottom: 25px;
    // padding-bottom: 20px;
    ::placeholder {
      color: #9e74b9;
    }
    li {
      @include border1;
      display: flex;
      // margin: 5px 0px;
      // flex-direction: column;
      justify-content: space-around;
      label {
        flex-basis: 30%;
        // padding: 10px;
        // background-color: rgb(121, 104, 104);
      }
      input,
      textarea {
        border: 1px solid #4f0a5862;
        padding: 10px;
        width: 90%;
        outline: none;
        &:focus,
        &:active {
          border: 1px solid #000;
          background-color: #ece9e9;
        }
      }
      @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
        /* IE10+ CSS styles go here */
        padding: 10px 0 5px;
      }
    }
    li.name,
    li.message {
      // width: 500px;
      margin: 10px auto;
      padding: 5px;
      // background-color: #fff;
      flex-direction: row;
      // border: $border-size dotted #999;
      // text-align: right;
      letter-spacing: 1.4px;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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
      // flex-direction: row;
      justify-content: space-evenly;

      button {
        outline: none;
        padding: 10px;
        background-color: #fff;
        // width: 80%;
        // border: 1px solid #fff;
        // margin: 0 20px;
        &:hover {
          background-color: rgb(129, 127, 127);
          // border-color: #666;
        }
      }
      button.submit {
        color: rgb(219, 218, 218);
        background-color: #d82121;
        text-decoration: line-through;
        cursor: none;
        cursor: not-allowed;
      }
      button.allowForm {
        background-color: #fff;
        text-decoration: none;
        color: inherit;
        cursor: pointer;
        &:hover {
          background-color: rgb(129, 127, 127);
        }
      }
    }
    .choice {
      display: inline-block;
      font-size: 3em;
      display: flex;
      flex-direction: row;
      justify-content: center;
      user-select: none;
      flex-wrap: wrap;
      @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
        /* IE10+ CSS styles go here */
        font-size: 2em;
      }
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
        transition: 0.3s;
        letter-spacing: 0.2em;
        font-size: 1.2em;
        color: $color;
      }
      @media (max-width: 600px) {
        justify-content: center;
        i {
          transition: 0.3s;
        }
      }
    }
  }
  form.robot li.action {
    @media (max-width: 500px) {
      display: flex;
      // flex-direction: column;
    }
  }
  form.robot li {
    border: none;
  }
  .formErro {
    padding: 10px;
  }
}
</style>