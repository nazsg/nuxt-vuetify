<template>
  <div class="wrapper">
    <div class="content">
      <!-- <appHeader /> -->
          
      <section class="showcase">
        <div class="search">
            <input type="text" placeholder="find tip">
            <CloseCircle :size="24" fillColor="" />        
        </div>
        <div class="video-container">
          <video src="https://nazs.net/static/video.mp4" autoplay muted loop></video>
        </div>
        <div class="content2">
          <h3>
            Front-end web dev
          </h3>
          <h4>
            flavoured with bespoke APIs
          </h4>
          <p>
            Parallax... just when scrolling almost becomes a chore
            <nuxt-link to="/no-robots">No Robots</nuxt-link>
          </p>
        </div>
      </section>
      <section id="about">dd        
      </section>

      <v-parallax height="450"
        src="https://panteli.biz/static/coffee.jpg">
      </v-parallax>   


      <appFooter />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'home'
}
</script>

<style lang="scss" scoped>
 @import '../../sass-mixins/_styles';

.showcase {
  @include fullPage;
  background: url('https://nazs.net/static/wallpaper.jpg') no-repeat;
}

.video-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  /* background: url('./cover.jpg') no-repeat center center/cover; */
}
.video-container:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(6, 16, 77, 0.507);

}
video {
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}

.search {
  z-index: 10;
  /* color: white; */
  background-color: rgba(255, 255, 255, 0.671);
  padding: 10px;
  border-radius: 7px;
  margin-top: -450px;
  margin-bottom: 190px;

  input {
    margin: 0;
    padding: 10px;
    border: 1px solid rgb(90, 89, 89);
    font-family: Helvetica;
    letter-spacing: 2px;
    color: #000;
  }  
}
.content2 {
  z-index: 10;
  background-color: rgba(170, 169, 169, 0.699);
  padding: 10px;
  border-radius: 7px;
  input {
    margin: 0;
    height: 30px;
    padding: 10px;
    border: 1px solid rgb(90, 89, 89);
    font-family: Helvetica;
    letter-spacing: 2px;
  }
}
.content2 a {
  display: inline-block;
  padding: 10px 30px;
  background: rgb(119, 116, 116);
  border: 1px solid #fff;
  border-radius: 5px;
  margin-top: 25px;
  opacity: 0.5;
  color: white;
  text-decoration: none;
}
.content2 a:hover {
  transform: scale(0.98);
}
</style>