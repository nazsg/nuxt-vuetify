<template>
  <div class="showcase">
    
      <form class="robot">
        <div class="group name">
          <label for="name">Name:</label>
          <input type="text">
        </div>
        <div class="group email">
          <label for="email">Email:</label>
          <input type="text">
        </div>
        <div class="group message">
          <label for="message">Message</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="group action">
          <a @click="1">Clear</a>
          <a @click="1">Submit</a>
        </div>
      </form>



  </div>
</template>

<style lang="scss" scoped>
@import '../../sass-mixins/_styles';

.showcase {
  @include fullPage;
  background: url('https://nazs.net/static/wallpaper.jpg') no-repeat;
}

form.robot {
  background-color: #fff;
  color: #000;
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

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
  .group.action {
    // display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
}

</style>