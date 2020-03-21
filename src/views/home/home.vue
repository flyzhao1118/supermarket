<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  </div>
</template>

<script>
  import navBar from 'components/common/navbar/navBar'
  import {getHomeMultidata} from "network/home";

  export default {
    name: "home",
    components: {
      navBar
    },

    data() {
      return {

      }
    },

    created() {
      getHomeMultidata().then (res => {

      })
    }

  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #FFF;
  }
</style>