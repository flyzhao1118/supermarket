<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
  import navBar from 'components/common/navbar/navBar'
  import {getHomeMultidata} from "network/home";
  import homeSwiper from './childComps/homeSwiper';


  export default {
    name: "home",
    components: {
      navBar,
      homeSwiper
    },

    data() {
      return {
        banners: [
          {link: "https://pages.tmall.com/wow/a/act/tmall/tmc/25316/wupr?spm=a21bo.2017.201862-1.d1.5af911d9jm5DP1&amp;pos=1&amp;wh_pid=industry-184397&amp;acm=20140506001.1003.8.7422847&amp;scm=1003.8.20140506001.OTHER_1583911614991_7422847", image: "//img.alicdn.com/tfs/TB1dcjQwebviK0jSZFNXXaApXXa-520-280.jpg_q90_.webp"},
          {link: "https://pages.tmall.com/wow/a/act/tmall/tmc/25786/wupr?spm=a21bo.2017.201862-5.d1.5af911d9jm5DP1&amp;pos=1&amp;wx_navbar_hidden=true&amp;wh_pid=main-186615&amp;disableNav=YES&amp;acm=20140506002.1003.2.7516443&amp;scm=1003.2.20140506002.OTHER_1583711556800_7516443", image: "//img.alicdn.com/tfs/TB1actTy.Y1gK0jSZFMXXaWcVXa-520-280.jpg_q90_.webp"},
          {link: "https://click.mz.simba.taobao.com/ecpm?e=G0xZw8R1guVHp1phml%2FgwukEgPc%2FvVVFpKZl54tBY0NqXMdhu6WdQls%2F9aUO4fuulXkpv7i%2BCL1b21XY8p3njAYpA4Y98xrwtbR9sxq9q4hbP149m5qBPJPRH1ggI8FUUzYkd7Z85oCF1m9e399j5NfuL2LdHntGfix%2FKudUUVE3f%2Fi6RQWDQVE%2BwWYBVLvheG7X2UMQaricosAW3hvDaMazG68%2BAFnE6kyoPlI8kS6PJSqLFl2xrG05KTmcL3Ja3vq1aD8iFB0onlBPU45tz8oTJsevU1AGKFhbmYPb2v3pq01orEoT9sBbNM5tNagihEFES10LxHMArsN1%2FUTzXeJJPF2oez0T%2BmNPpKtf65EI9M7eNqv10YkQTZg7iKVgjGYDtk5xViPBKlbHanoRgnXbVxr%2BBxTPVXI7wP0PNDkRF3BnaTpqXywj9ZCH6FUHCsoNgpIMpGo%3D&amp;u=https%3A%2F%2Fre.taobao.com%2Faction_ecpm_home&amp;k=461", image: "https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg"}
        ]
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