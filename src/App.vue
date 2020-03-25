<template>
  <div id="app">
    <router-view></router-view>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
  import mainTabbar from 'components/content/mainTabbar'

  export default {
    name: 'App',
    components: {
      mainTabbar
    },
    mounted() {
      // 根据实际窗口大小定义vh
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);

      // 监听浏览器窗口大小变化
      window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`)
      })
    },
  }
</script>

<style>
 @import "./assets/css/base.css";
</style>
