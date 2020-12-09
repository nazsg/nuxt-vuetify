<template>
  <div>
      <slot name="body">
      <p>Other paragraphs</p>

      </slot>
      <slot name="header">
      </slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
p {
    /* color: red; */
}
</style>