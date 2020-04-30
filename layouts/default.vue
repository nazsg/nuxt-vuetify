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