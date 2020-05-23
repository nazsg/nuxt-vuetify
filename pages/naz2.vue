<template>
  <div id="naz">
    <h1>test</h1>
    <p class="huge">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, eius laudantium. Debitis voluptates voluptate voluptatem minus vel in. Asperiores sed cupiditate quas corporis? Hic doloribus at quisquam impedit! Expedita, eligendi.</p>
  </div>
</template>

<style lang="scss" scoped>
@import '../../sass-mixins/_styles';
#naz {
  h1 { color: #ddd}
  @include fullPage;
  background-image: url('/blue-and-purple-cosmic-sky.jpg');
  height: 100%;
}
</style>