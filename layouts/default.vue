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

    .search {
      width: 300px;
      margin: 10px auto;
      input {
        // border-bottom: 1px dotted #999;
        padding: 10px;
        outline: none;
        background-color: #f3f1f1b4;
        letter-spacing: 2px;
        border-radius: 5px;
        &:focus {
          background: #fff;
        }      
      }
    }
    .cross {
      color: rgb(185, 185, 185);
      cursor: pointer;
      &:hover {
        color: #fff;
      }
    }
    .emptyResults {
      color: #ccc;
    }
    .results {
      width: 60%;
      padding: 5px;
      margin: 10px auto;
      p {
        width: 90%;
        margin: 0 auto;
        padding: 20px;
        text-align: left;
        background-color: #ccc9c9a2;
        border-bottom: 1px dashed rgb(73, 72, 72);
      }
    }
  }
}
</style>