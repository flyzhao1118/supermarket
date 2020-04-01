<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goodsItem.img" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="rmb">￥</span>
      <span class="price">{{goodsItem.price}}</span>
      <span class="pay-number">{{goodsItem.payNumber}}人付款</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "goodsListItem",
    props: {
      goodsItem: Object
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('itemImageLoad')
      },

      itemClick() {
        this.$router.push('/detail/' + this.goodsItem.id)
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 70px;
    position: relative;
    width: 47vw;
    background-color: #fff;
    border-radius: 5px;
    margin: 5px;
    box-shadow: 0 -1px 1px rgba(100,100,100,0.1);
    overflow: hidden;
  }

  .goods-item img {
    width: 100%;
  }

  .goods-info {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  .goods-info .rmb {
    font-size: 8px;
    color: var(--color-high-text);
    margin-left: 5px;
  }

  .goods-info p {
    font-size: 14px;
    line-height: 18px;
    overflow: hidden;
    margin-bottom: 8px;
    height: 36px;
    text-align: center;
    padding: 0 5px;
  }

  .goods-info .price {
    color: var(--color-high-text);
  }

  .goods-info .pay-number {
    font-size: 11px;
    color: rgba(100,100,100,0.7);
    position: absolute;
    right: 10px;
    top: 49px;
  }
</style>