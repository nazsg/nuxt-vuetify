<template>
<div>

  <div id="cookies" v-if="show">
      <p>
        cookies are used to optimise your user experience, 
        by navigating you agree to using cookies.

      <button @click="okCookie">OK</button>
      <button v-if="!custom" @click="custom = true">Show more </button>
      </p>
    <label for="cookie" class="checkContainer">don't ask again
      <input type="checkbox" id="cookie" ref="cookie"  checked="checked">
      <span class="checkmark"></span>
    </label>
    <div v-if="custom">
    <a href="https://www.allaboutcookies.org" target="_blank">all about cookies</a>
      <!-- <h2>Necessary</h2> -->
        <p>
  These technologies are essential for the functionality of this website 
  <!-- and  and your experience with them.  -->
  <!-- We use them to count visits and traffic sources so that we can improve our performance -->

        </p>
    </div>
    <button v-if="custom" @click="custom = false">Show less</button>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      custom: false
    }
  },
  mounted() {
    if(!localStorage.getItem('okCookie')) {
      this.show = true
    }
  },
  methods: {
    okCookie() {
      this.show = false
      if(this.$refs["cookie"].checked) {
        localStorage.setItem('okCookie', true)
      }
    }
  }
}
</script>

<style lang="scss">
#cookies {
  .checkContainer {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 12px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;    
      /* Hide the browser's default checkbox */
  }
    .checkContainer input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: #eee;
    }

    /* On mouse-over, add a grey background color */
    .checkContainer:hover input ~ .checkmark {
      background-color: #ccc;
    }

    /* When the checkbox is checked, add a blue background */
    .checkContainer input:checked ~ .checkmark {
      background-color: #6b21f3;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    /* Show the checkmark when checked */
    .checkContainer input:checked ~ .checkmark:after {
      display: block;
    }

    /* Style the checkmark/indicator */
    .checkContainer .checkmark:after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

  position: fixed;
  left: 0;
  right: 0;
  bottom: 50px;
  height: auto;
  color: rgb(230, 223, 223);
  background-color: #3d3b3b;
  padding: 10px;
  border-radius: 7px;
  text-transform: lowercase;
  border: 1px solid rgb(134, 133, 133);
  margin: 5px auto;
  width: 350px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; 
  p {
    display: block;
    text-align: center;
    margin: 10px 0;
  }

  button {
    background-color: #838080;
    outline: none;
    padding: 5px;
    border-radius: inherit;
    margin: 5px auto;
    width: 100px;
    &:hover {
      background-color: #979292;
    }
  }
}
</style>