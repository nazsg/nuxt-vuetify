<template>
  <div class="featured">
    <h2>Featured solutions</h2>
    <div class="featuredBox" v-for="(feature, i) in features" :key="i">
      <div class="featuredTitle">{{ feature.title }}</div>
      <div class="featuredContent">
        <div class="prompt">prompt:~$</div>
        <div class="entries">{{ feature.code }}</div>
        <ContentCopy />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          title: 'the title',
          prompt: 'the prompt',
          code: 'the code',
        },
        {
          title: 'the title 2',
          prompt: 'the prompt 2',
          code: 'the code 2',
        },
        {
          title: 'the title 3',
          prompt: 'the prompt 3',
          code: 'the code 3',
        },
      ],
    }
  },
}
</script>

<style></style>
