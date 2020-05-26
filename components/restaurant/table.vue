<template>
  <ul class="table">
    <template v-for="(menu, index) in menus">
      <li v-if="menu.category == category" :key="index">
        <span class="item">{{menu.item}}</span> <span class="price">{{menu.price}}</span>
      </li>
    </template>
  </ul>
</template>

<script>
export default { 
  props: ['menus', 'category']
}
</script>