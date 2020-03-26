<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item.title" :goods-item="item"></goods-list-item>
  </div>
</template>

<script>
  import goodsListItem from './goodsListItem'

  export default {
    name: "goodList",
    components: {
      goodsListItem
    },
    props: {
      goods: Array
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: #eee;
  }
</style>