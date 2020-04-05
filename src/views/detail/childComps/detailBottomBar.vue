<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <button @click="addToCart">加入购物车</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailBottomBar",
    methods: {
      addToCart() {
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    height: 49px;
    background-color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>