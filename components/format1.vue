<template>
  <div class="group1">
    <button @click.prevent="format('richTextField', 'bold')">
      <i class="material-icons">&#xE238;</i>
    </button>
    <button @click.prevent="format('richTextField', 'italic')">
      <i class="material-icons">&#xE23F;</i>
    </button>
    <button @click.prevent="format('richTextField', 'underline')">
      <i class="material-icons">&#xE249;</i>
    </button>
    <button @click.prevent="format('richTextField', 'insertunorderedlist')">
      <i class="material-icons">&#xE241;</i>
    </button>
    <button @click.prevent="format('richTextField', 'insertorderedlist')">
      <i class="material-icons">&#xE242;</i>
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
