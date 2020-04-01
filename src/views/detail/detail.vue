<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
  </div>
</template>

<script>
  import detailNavBar from './childComps/detailNavBar'
  import detailSwiper from './childComps/detailSwiper'

  import {getDetail} from "network/detail";

  export default {
    name: "detail",
    components: {
      detailNavBar,
      detailSwiper
    },
    data() {
      return {
        id: null,
        topImages: []
      }
    },

    created() {
      //保存传入的商品id
      this.id = this.$route.params.id;

      //根据id请求详情数据
      getDetail(this.id).then(res => {
        // this.topImages = res.iteminfo.topImages
      })
    }
  }
</script>

<style scoped>

</style>