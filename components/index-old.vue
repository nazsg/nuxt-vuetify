<template>
  <div class="wrapper">
    <div class="content">
        <section class="showcase" @click.self="init">
          <div class="video-container" :class="{hide}">
            <video src="/video.mp4" autoplay muted loop></video>
          </div> 

          <div class="content2" :class="{focus}" >
            <h3>
              Front-end web dev
            </h3>
            <h4>
              flavoured with bespoke APIs
            </h4>
            <input type="text" placeholder="find scratch pad" @click="search"  @keydown="search"
              v-model="keyword"
            > 
          </div>
            <div class="results">
              <div v-for="(data, index) in filteredTips" :key="index" v-html="data"></div>
            </div>


        </section>

      <appFooter />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'home',
  data() {
    return {
      tips: ['test'],
      keyword: '',
      result: false,
      focus: false,
      hide: false,
    }
  },
  methods: {
    hideHome() {
      this.home = false
    },
    search() {
      this.focus = true
      this.hide = true
    },
    init() {
      this.focus = false
      this.hide = false
      console.log('init')
    }
  },
  created() {
    // this.$axios.get('journal/show.php?showAll&orderBy=desc')
    //   .then(data => this.tips = data.data.map(d => d.comment))
  },
  computed: {
    bus() {
      return this.$bus.tips      
    },
    filteredTips() {
      return this.tips.filter( tip => {
        return tip.toLowerCase().match(this.keyword.toLowerCase())
      })
    },
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
  // height: 100%;
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
  // z-index: 2;
  display: block;
  position: absolute;
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
.focus {
  font-size: 20px;
  top: 10px;
  transition: .5s;
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