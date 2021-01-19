<template>
  <v-app>
    <div class="editJournal">
      <form>
        <iframe
          frameborder="1"
          name="journal"
          id="journal"
          ref="journal"
          class="myFrame2"
        ></iframe>
        <div class="actions">
          <v-btn>Cancel</v-btn>
          <v-btn>Submit</v-btn>
        </div>
      </form>
    </div>
  </v-app>
</template>

<script>
import wys from '~/functions/wysiwyg'
export default {
  data() {
    return {
      journal: {},
    }
  },
  methods: {
    getJournal() {
      let id = this.$route.params.journal
      this.$axios.get('api/journals/' + id).then(data => {
        this.journal = data.data
        window.frames['journal'].document.body.innerHTML = data.data.comment
      })
    },
  },
  mounted() {
    this.getJournal()
    if (this.$refs.journal != 'undefined') {
      setTimeout(() => {
        window.frames['journal'].document.designMode = 'On'
      }, 1000)
    }
  },
}
</script>

<style lang="scss">
@import '../../../sass-mixins/_styles';

.application.theme--light {
  height: 100%;
  @include fullPage;
}
.application--wrap {
  min-height: inherit;
  width: 100%;
}
.editJournal {
  @include fullPage;
  height: 100%;
}
form {
  margin-top: -20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  @include fullPage;
  iframe {
    width: 100%;
    height: 600px;
  }
}
</style>
