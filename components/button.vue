<template functional>
    <button :class="[data.class, data.staticClass]"
        v-bind="data.attrs"
        v-on="listeners"
    >
      {{ props.name }}
    </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String, default: 'Button name'
    },
    size: {
      type: Number, default: 24
    }
  }
}
</script>