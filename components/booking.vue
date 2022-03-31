<template>
  <div>
    <DatePicker type="date" placeholder="Select date" 
        style="width: 200px"></DatePicker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options1: {
          shortcuts: [
              {
                  text: 'Today',
                  value () {
                      return new Date();
                  },
                  onClick: (picker) => {
                      this.$Message.info('Click today');
                  }
              },
              {
                  text: 'Yesterday',
                  value () {
                      const date = new Date();
                      date.setTime(date.getTime() - 3600 * 1000 * 24);
                      return date;
                  },
                  onClick: (picker) => {
                      this.$Message.info('Click yesterday');
                  }
              },
              {
                  text: 'One week',
                  value () {
                      const date = new Date();
                      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                      return date;
                  },
                  onClick: (picker) => {
                      this.$Message.info('Click a week ago');
                  }
              }
          ]
      }        
    }
  }
}
</script>

<style lang="scss" scoped>
div {
    margin: 10px;
}
</style>