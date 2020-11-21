<template>
  <div class="video">
    <div v-if="show">
      <div class="modalBg">
        <div class="modalContent">
          <input type="text" placeholder="find scratch pad">
          <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui ipsa possimus eveniet quibusdam, eos totam ab dolorum magni aliquid dolorem consectetur illo rerum ipsum ex deserunt ratione obcaecati eum quos eaque! Necessitatibus dolores maiores vero quasi molestias ab voluptatem, nostrum debitis ullam. Necessitatibus, eos aspernatur blanditiis est ut sequi dolores officiis beatae, fuga tempore ex exercitationem optio excepturi, consequatur numquam perspiciatis quos repellendus. Officiis, assumenda! Rerum quidem obcaecati nemo assumenda autem corporis, eius sequi tempora quia, saepe dolorum illo aspernatur suscipit quis? Optio, vel alias tempora laboriosam rem labore nihil magni necessitatibus sit, rerum dolore. Aliquam itaque, dolore minus quibusdam deserunt, ipsa laudantium facere ab obcaecati labore id consequatur. Nesciunt harum cum id debitis similique delectus eos a ducimus et veniam placeat repellat quae esse corporis, eveniet, adipisci tenetur temporibus perspiciatis ad alias. Dolor cumque libero deserunt sequi molestiae pariatur expedita in fuga. Deleniti beatae, incidunt officia maiores fuga reprehenderit illum officiis iusto laboriosam ipsam placeat nostrum reiciendis molestias adipisci blanditiis rerum dolorum in recusandae similique nihil atque possimus animi. Facilis cumque architecto magni blanditiis ipsam, praesentium iure, nihil sapiente aut voluptatibus dolorem maiores amet sunt fugit commodi! Cum tempore vitae harum veritatis iste quo omnis quasi eum labore.  -->
        </div>
      </div>
    </div>

    <!-- <div class="video-container"> -->
      <video autoplay muted loop id="myVideo">
      <source src="/vid.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
      </video>      

    <!-- </div> -->
    <div class="video-footer">
      <section>
        <h1>Front-end web dev</h1>
        <h2>flavoured with bespoke APIs</h2>
      </section>
      <div>
        <a href="#" @click="show = !show">Scratch Pad</a>
      </div>
    </div>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss" >
.video {
    position: relative;
}
.modalBg {
  position: relative;
  z-index: 3;
  color: white;
  .modalContent {
    background-color: #ffffff88;
    overflow: auto;
    width: 600px;
    height: 70vh;
    margin: 0 auto;
    color: red;
    border: 1px solid rgb(240, 237, 237);
    input {
      margin: 20px;
    }
    @media (max-width: 500px) {
      width: 90%;
      height: 400px;
    }
  }
}
.video-footer {
  position: fixed;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  background-size: cover;
  background-position: top;
  color: #f1f1f1;
  width: 100%;
  padding: 40px;
  display: flex;
  h1 {
    font-family: "Caveat", cursive;
    font-size: 3rem;
  }
  h2 {
    font-family: "Stardos Stencil", cursive;
  }
  section,div {
    letter-spacing: 2px;
  }
  section {
    flex: 1;
    // background-color: rgb(145, 143, 143);
  }
  div {
    flex: 1;
    // background-color: rgb(102, 100, 100);
    input {
      outline: none;
      border: 1px solid #999;
    }
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
}
.video_contain {
    // position: absolute;
    // top: -50%;
    // left: -50%;
    // width: 200%;
    // height: 200%;
}
    #myVideo {
      position: fixed;
      right: 0;
      bottom: 0;
      min-width: 100%; 
      min-height: 100%;
      background-color: rgb(131, 117, 117);
      
      // position: absolute;
      // top: 0;
      // bottom: 0;
      // right: 0;
      // left: 0;
      // margin: auto;
      // min-height: 50%;
      // min-width: 50%;    
    }


</style>