<template>
  <div class="cartList">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="item in cartList" :key="item.id" :product="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  import scroll from 'components/common/scroll/scroll'
  import cartListItem from './cartListItem'

  export default {
    name: "cartList",
    components: {
      scroll,
      cartListItem
    },
    computed: {
      ...mapGetters(['cartList'])
    },
    activated() {
      this.$refs.scroll.refresh() //新数据进来时重新计算滚动距离
    }
  }
</script>

<style scoped>
  .content {
    height: calc(var(--vh) * 100 - 44px - 49px - 60px);
    overflow: hidden;
  }
</style>