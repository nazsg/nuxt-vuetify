<template>
  <nav class="nav-area">
    <ul>
      <li ><nuxt-link  to="/">Home</nuxt-link></li>
      <li class="drop-down" :class="{hideUL : hideUL}"
        @mouseover = "hideUL = false"
      >
        <a href="#">Projects
      </a>
        <ul >
          <li @click="hide"><nuxt-link to="/no-robots">No Robots</nuxt-link></li>
          <!-- <li  @click="hide"><nuxt-link to="/menus">Naz2</nuxt-link></li>
          <li  @click="hide"><nuxt-link to="/test">test</nuxt-link></li> -->
          <li  @click="hide"><nuxt-link to="/restaurant">Restaurant Sample</nuxt-link></li>
          <li><a href="https://nazs.net/holiday">Holiday Proto</a></li>
          <li  @click="hide"><nuxt-link to="/journal">Journal</nuxt-link></li>
        </ul>
      </li>
    </ul>
  </nav>  
</template>

<script>
export default {
  data() {
    return {
      show: false,
      hideUL: false
    }
  },
  methods: {
    hide() {
      this.show = !this.show
      this.hideUL = true
    }
  }
}
</script>
<style lang="scss" scoped>
$col1 : #000;
$col2 : #262626;
$a-color: #290953;
$hover: #532391;
$a-color2: #3f1772;
$a-border: #b386ee;

.afterHover {
  ul li {
    display: none;
  }
}

.hideUL {
  ul li {
  display: none;
  }
}

.nav-area {
  font-family: Arial, Helvetica, sans-serif;
  ul {
    background-color: $col1;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    // -ms-flex-wrap: wrap;
    // flex-wrap: wrap;

    li {
      width: 20%;

      &:hover > ul {
        display: flex;
      }

      > ul {
        display: none;
        flex-direction: column;

        li {
          width: 100%;
        }
      }
    }
  }

  a {
    text-transform: uppercase;
    display: block;
    background: $col1;
    padding: 15px;
    color: white;
    text-decoration: none;
    text-align: center;
    border: 1px solid #000;

    &:hover {
      background-color: $a-color;
      border: 1px solid $a-border;
      color: white;
    }
  }

  .drop-down {
    position: relative;
    > a:after {
      content: "+";
      padding: 5px;
    }
    li {
      a {
        // display: block;
        background: $a-color2;
        color: #ffffff;
        border-color: $a-color2;

        &:hover {
          background: $hover;
        }
      }
    }
  }
  .drop-down ul  {
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 1;
    width: 100%;
  }
}


@media (max-width:600px) {
    .nav-area ul li {
        width: 100%;
    }
}
</style>