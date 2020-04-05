<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-params-info ref="param"></detail-params-info>
      <detail-comment-info ref="comment"></detail-comment-info>
      <good-list ref="recommend"></good-list>
    </scroll>
    <backtop @click.native="backtop" v-show="isShowBacktop"></backtop>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
  import detailNavBar from './childComps/detailNavBar'
  import detailSwiper from './childComps/detailSwiper'
  import detailParamsInfo from './childComps/detailParamsInfo'
  import detailCommentInfo from './childComps/detailCommentInfo'
  import goodList from 'components/content/goods/goodList'
  import detailBottomBar from './childComps/detailBottomBar'
  import scroll from 'components/common/scroll/scroll'

  import {getDetail, goods} from "network/detail"
  import {backtopMixin} from "../../common/mixin";

  export default {
    name: "detail",
    components: {
      detailNavBar,
      detailSwiper,
      detailParamsInfo,
      detailCommentInfo,
      goodList,
      detailBottomBar,
      scroll,
    },
    mixins: [backtopMixin],
    data() {
      return {
        id: null,
        topImages: [],
        goods: {},
        themeTopY: [],
        imageQuantity: 0,
        currentIndex: 0,
        isShowBacktop: false
      }
    },

    methods: {
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 500) //点击滚动到对应内容
      },

      //图片加载完事件
      imageLoadFinish() {
        // let loadImage = 3;
        // this.$bus.$on('detailItemImageLoad', () => {
        //   loadImage += 1;
        //   if (loadImage = this.imageQuantity) {
            //获取对应内容到顶部的距离并保存
            this.themeTopY = [];
            this.themeTopY.push(0);
            this.themeTopY.push(this.$refs.param.$el.offsetTop);
            this.themeTopY.push(this.$refs.comment.$el.offsetTop);
            this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
        //   }
        // })
      },

      //滚动内容显示对应标题
      contentScroll(position) {
        const positionY = -position.y;
        let length = this.themeTopY.length;
        for(let i = 0; i < this.themeTopY.length; i++) {
          if(this.currentIndex != i && (i < length-1 && positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1]) || (i == length-1 &&
              positionY >= this.themeTopY[i])) {
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }

        //判断backtop是否显示
        this.isShowBacktop = position.y < -200;
      },

      addToCart() {
        //获取购物车需要展示的信息
        const product = {};
        // product.image = this.topimage[0];
        // product.title = this.goodInfo.title;
        // product.desc = this.goodInfo.desc;
        // product.price = this.goodInfo.price;
        // product.id = this.id;

        product.image = "//g-search3.alicdn.com/img/bao/uploaded/i4/i5/TB1wuBGRpXXXXceXVXXYXGcGpXX_M2.SS2_180x180.jpg_.webp";
        product.title = "日系洛丽塔夏季女萝莉可爱lolita袜子蕾丝白色丝袜超薄打底连裤袜";
        product.price = 9.90;
        product.id = 1;

        //将商品添加到购物车
        this.$store.dispatch('addCart', product)
      }
    },

    created() {
      //保存传入的商品id
      this.id = this.$route.params.id;

      //根据id请求详情数据
      getDetail(this.id).then(res => {
        const data = res.result;
        // this.topImages = data.iteminfo.topImages
      });

      //获取商品信息
      // this.goods = new goods(data.itemInfo, data.columns, data.shopInfo.services)
      // 获取图片总数
      // this.imageQuantity = 3;
    },

    mounted() {
      this.imageLoadFinish()
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    /*掩盖tabbar*/
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    height: calc(var(--vh) * 100 - 44px - 49px);
  }
</style>