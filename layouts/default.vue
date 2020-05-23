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
}
</style>