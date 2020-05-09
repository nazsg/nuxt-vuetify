<template>
  <div class="wrapper">
    <div class="content">
      <!-- <appHeader /> -->
        <section class="showcase">
          <div class="video-container">
            <video src="https://nazs.net/static/video.mp4" autoplay muted loop></video>
          </div> 

            <!-- <template v-for="(tip, index) in tips">
              <p style="border:1px solid #999;z-index:20" v-html="tip.comment" :key="index"></p>
            </template> -->

          <div class="content2">
            <h3>
              Front-end web dev
            </h3>
            <h4>
              flavoured with bespoke APIs
            </h4>
          </div>
            <p style="z-index:9;color:white">test</p>
        </section>
        <section>          
        </section>

        <v-parallax height="300"
          src="https://nazs.net/static/blue-purple.jpg">
          <div class="parallax">
            <p>
              Parallax... just when scrolling almost becomes a chore
            </p>
          </div>
        </v-parallax>   
      
      <div>
      
          <div class="search">

            <!-- <Icon type="md-send" size="30" /> -->
            <!-- <Input v-model="value16" maxlength="20" show-word-limit placeholder="Enter something..." style="width: 200px" /> -->
              <input type="text" placeholder="find tip" v-model="search" @keyup="result = true"> 
              <Icon type="md-backspace" size="30" />
              <Icon type="md-close-circle" size="30" />
              <CloseCircle :size="24" fillColor="" 
                @click="result = false"/>  
              <div v-if="result">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptate placeat labore ipsa. Exercitationem sapiente, molestiae rem officia, consequatur iusto odit, vel fuga animi similique cupiditate nemo minus maxime ipsam.</p>
              </div>
          <div style="border-bottom: 1px solid #999" v-for="(tip, index) in tips3" :key="index" v-html="tip">
          </div>            
          </div>
        <!-- {{ tips }} -->
      </div>


      <appFooter />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'home',
  data() {
    return {
      tips: ['test'],
      search: '',
      result: false,
      value: [
        { "id": 1, "name": "Laki", "dob": "0208", "postcode": "ct3", "comments": "", "timestamp": "2017-09-08 23:50:53" },
        { "id": 2, "name": "Dave", "dob": "2708", "postcode": "ct4", "comments": "", "timestamp": "0000-00-00 00:00:00" },
        { "id": 3, "name": "Naz", "dob": "0306", "postcode": "ct6", "comments": "", "timestamp": "2018-05-12 10:39:32" }        
      ],
      test: ''
    }
  },
  methods: {
    hideHome() {
      this.home = false
    }
  },
  created() {
    this.$axios.$get('http://localhost/nazs.net/journal/show.php?showAll&orderBy=desc')
    // this.$axios.$get('journal/show.php?showAll&orderBy=desc')
    .then(data => {
      this.tips = data
      // console.log(this.tips.length, this.tips)
    })
    // let myHTML = "<p>Go to this <a href='https://google.com'>website </b></p>";
    // console.log(JSON.parse(JSON.stringify(myHTML)))
  },
  computed: {
    tips2() {
      return this.tips.filter( (tip) => {
        return tip //.comment.includes(this.search)
      })
    },
    tips3() {
      return this.tips.filter( (tip) => {
        // return tip.name.includes('a')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
 @import '../../sass-mixins/_styles';
.banner {
  background-color: rgb(73, 34, 34);
  &:hover {
    color: red; 
  }
}
.push {
  font-size: 80px;
  color: #999;
}

.showcase {
  @include fullPage;
  background: url('https://nazs.net/static/wallpaper.jpg') no-repeat center center/cover;
  justify-content: flex-start;
  padding-top: 10%;
  // display: none;
}

.video-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
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
section {
  height: 10px;
  background-color: rgb(30, 30, 31);
}
.search {
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.671);
  padding: 10px;
  border-radius: 7px;
  margin: 40px 0 100px;

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
  z-index: 2;
  display: block;
  background-color: rgba(170, 169, 169, 0.288);
  padding: 10px 20px;
  border-radius: 7px;
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.726);
  border: 2px dashed rgba(179, 177, 177, 0.541);
  input {
    margin: 0;
    height: 30px;
    padding: 10px;
    border: 1px solid rgb(90, 89, 89);
    font-family: Helvetica;
    letter-spacing: 2px;
  }
  h3 {
    // font-family: 'Satisfy', cursive;
    font-family: 'Stardos Stencil', cursive;
    // font-family: 'Sacramento', cursive; 
    // font-family: 'Allerta Stencil', sans-serif;    
  }
  h4 {
    font-family: 'Caveat', cursive;

  }
    font-size: 3.5rem;   
}
.content2 a {
  display: inline-block;
  padding: 10px 30px;
  background: rgb(119, 116, 116);
  border: 1px solid #fff;
  border-radius: 5px;
  opacity: 0.5;
  color: white;
  text-decoration: none;
}
.content2 a:hover {
  transform: scale(0.98);
}
i.ivu-icon {
  cursor: pointer;
  color: red;
}
</style>