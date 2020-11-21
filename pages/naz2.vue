<template>
  <div id="naz">
    <h1>test</h1>
    <!-- <p class="huge">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, eius laudantium. Debitis voluptates voluptate voluptatem minus vel in. Asperiores sed cupiditate quas corporis? Hic doloribus at quisquam impedit! Expedita, eligendi.</p> -->
    <slotComponent>
      <p slot="header"> header</p> 
      <p slot="body"> body </p>
      <p>Test again</p>    
    </slotComponent>
      <section class="test">
        lsfjlsfjldksfjlskfjslkfjlsjflsjflksdjflsjflskjflsdkfjsfjlksdfjlsdkfjsldkfjsdlkfslfjslfjofjeojlklfjldflsdjfosdjflskjfslfjdl
      </section>

</div>
</template>

<script>
import slotComponent from '~/components/slot.vue'
export default {
  components: {
    slotComponent
  }

}
</script>
<style lang="scss" scoped>
@import '../../sass-mixins/_styles';
#naz {
  h1, * { color: #ddd}
  @include fullPage;
  background-image: url('/blue-purple.jpg');
  height: 100%;
}

.test {
  width: 90%;
  word-wrap: break-word;
}
</style>