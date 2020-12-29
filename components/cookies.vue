<template>
<div>

  <div id="cookies" v-if="show">
    cookies are used to optimise your user experience, 
    by navigating you agree to using cookies.
    <button @click="show = false">OK</button>
    <button v-if="!custom" @click="custom = true">Show more </button>
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
      show: true,
      custom: false
    }
  }
}
</script>

<style lang="scss">
#cookies {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 50px;
  height: auto;
  background-color: rgb(148, 147, 147);
  padding: 10px;
  border-radius: 7px;
  text-transform: lowercase;
  border: 1px solid rgb(134, 133, 133);
  margin: 5px auto;
  width: 350px;
  * {
    display: block;
    text-align: center;
    margin: 10px 0;
  }

  button {
    background-color: rgb(202, 198, 198);
    outline: none;
    padding: 5px;
    border-radius: inherit;
    margin: 5px auto;
    width: 100px;
    &:hover {
      background-color: rgb(235, 235, 235);
    }
  }
}
</style>