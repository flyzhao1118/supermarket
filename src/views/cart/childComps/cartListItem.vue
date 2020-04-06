<template>
  <div id="shop-item">
    <div class="item-selector" >
      <checkButton :is-checked="product.checked" @click.native="checkClick"></checkButton>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="">
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="info-bottom">
        <div class="item-price">￥{{product.price}}</div>
        <div class="item-count">
          <button class="item-reduce" @click="reduceNum()" :disabled="product.count == 1" :class="{disabled:product.count == 1}">-</button>
          <div>{{product.count}}</div>
          <button class="item-increase" @click="increaseNum()">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import checkButton from 'components/content/checkButton'

  export default {
    name: "cartListItem",
    components: {
      checkButton
    },
    props: {
      product: Object
    },
    methods: {
      checkClick() {
        this.$store.commit('checkClick', this.product.id)
      },

      reduceNum() {
        this.$store.commit('reduceNum', this.product.id)
      },

      increaseNum() {
        this.$store.commit('increaseNum', this.product.id)
      }
    },
  }
</script>

<style scoped>
  #shop-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-img img {
    width: 100px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-title {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .info-bottom {
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
    display: flex;
    justify-content: space-between;
  }

  .info-bottom .item-price {
    color: orangered;
  }

  .item-count {
    width: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 5px;
  }

  .item-count .item-reduce, .item-increase {
    width: 15px;
    height: 20px;
    vertical-align: middle;
    background-color: #eee;
    border: none;
  }

  .item-count .item-reduce {
    padding-bottom: 2px;
  }

  .disabled {
    color: #ccc;
  }
</style>