<template>
  <div class="wrapper">
    <div class="content">
      <appHeader />
      <nuxt />
    </div>
    <appFooter />
  </div>
</template>

<style lang="scss">
@import "../../sass-mixins/_styles";
$color: #4f0a58;
$color2: #b345c2;

html {
  overflow: auto;
}
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  flex: 1 0 auto;
  font-family: Helvetica;

  .home {
    @include fullPage;
    background-image: url("/wallpaper.jpg");
    justify-content: flex-start;
    height: 100%;
    .dimBanner {
      // position: absolute;
      // z-index: -9;
      h3,
      h4 {
        color: #690e0e3a;
        transition: 0.3s;
      }
    }
    .banner {
      color: #d8d3d3e8;
      padding: 30px;
      font-size: 4rem;
      font-family: "Caveat", cursive;
      letter-spacing: 3px;
      h3,
      h4 {
        transition: 0.3s;
      }
      h4 {
        font-family: "Stardos Stencil", cursive;
        font-size: 2.5rem;
      }
    }
    .search {
      margin: 20px auto;
      transition: 0.3s;
      input {
        // border-bottom: 1px dotted #999;
        transition: 0.3s;
        padding: 10px;
        outline: none;
        background-color: #f3f1f1b4;
        letter-spacing: 2px;
        border-radius: 5px;
        width: 200px;
        &:focus {
          background: #fff;
        }
      }
    }
    .newPos {
      width: 400px;
      margin: 0 auto;
      margin-top: -120px;
      transition: 0.3s;
      @media (max-width: 500px) {
        margin-top: -200px;
      }
      input {
        display: inline-block;
        width: 350px;
        transition: 0.3s;
      }
    }
    .video {
      color: white;
    }
    .cross {
      color: rgb(185, 185, 185);
      cursor: pointer;
      display: inline;
      &:hover {
        color: #fff;
      }
    }
    .emptyResults {
      color: #ccc;
    }
    .results {
      width: 80%;
      padding: 5px;
      margin: 20px auto;
      p {
        width: 90%;
        margin: 5px auto;
        padding: 20px;
        text-align: left;
        background-color: #ccc9c9a2;
        border: 2px dashed rgb(241, 241, 241);
        transform: rotate(1deg);
        overflow: auto;
        div {
          width: 100%;
        }
        font {
          font-weight: bold;
        }
      }
      @media (max-width: 500px) {
        width: 95%;
      }
    }
  }
}
</style>