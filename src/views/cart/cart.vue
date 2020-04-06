<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import navBar from 'components/common/navbar/navBar'
  import cartList from './childComps/cartList'
  import cartBottomBar from './childComps/cartBottomBar'

  import {mapGetters} from 'vuex'

  export default {
    name: "cart",
    components: {
      navBar,
      cartList,
      cartBottomBar
    },
    computed: {
        ...mapGetters(['cartLength'])
    }
  }
</script>

<style scoped>
  .cart {
    height: calc(var(--vh) * 100);
  }

  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>