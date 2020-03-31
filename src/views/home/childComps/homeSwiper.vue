<template>
  <div id="swiper">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in banners" :key="item.image">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import {Swipe, SwipeItem} from 'mint-ui';

  export default {
    name: "homeSwiper",
    components: {
      'mt-swipe': Swipe,
      'mt-swipe-item': SwipeItem,
    },
    data() {
      return {
        isLoad: false
      }
    },
    props: {
      banners: Array
    },
    methods: {
      imageLoad() {
        if (!this.isLoad) {
          this.$emit('swiperImageLoad');
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>
  #swiper {
    height: 200px;
    padding: 3px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
</style>