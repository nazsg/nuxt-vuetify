<template>
  <div class="">
    <table>
      <tr v-for="(menu, index) in all_menus" :key="index">
        <td>{{menu.item}}</td> <td>{{menu.price}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      all_menus: []
    }
  },
  created() {
    this.$axios.$get('orders_2020.php?cat=beef')
    .then(data => this.all_menus = data)
  },
  // asyncData(context) {
  //   return context.$axios.get('orders_2020.php?cat=beef')
  //   .then(res => {
  //     return { all_menus: res.data }
  //   })
  //   .catch(error => { 
  //     context.error({
  //       message: 'ajax problem'
  //     })
  //   })
  // },
}
</script>
