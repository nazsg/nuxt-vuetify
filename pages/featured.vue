<template>
  <div class="featured">
    <h2>Featured solutions</h2>
    <div class="featuredBox" v-for="(feature, i) in features" :key="i">
      <div class="featuredTitle">{{ feature.title }}</div>
      <div class="featuredContent">
        <div class="prompt">prompt:~$</div>
        <div class="entries">
          <div v-for="(c, i) in feature.code" :key="i">
            {{ c }}
            <!-- <ContentCopy /> -->
          </div>
        </div>
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
          title: "the title",
          prompt: "the prompt",
          code: ["the code", "the second code", "the third code"],
        },
        {
          title: "the title 2",
          prompt: "the prompt 2",
          code: [
            "the code 2",
            "the second one",
            "the third one",
            "the fourth one",
          ],
        },
        {
          prompt: "the prompt 3",
          title: "add a user",
          code: [
            "sudo adduser user1",
            "sudo usermod -aG sudo user1",
            "id user1",
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
