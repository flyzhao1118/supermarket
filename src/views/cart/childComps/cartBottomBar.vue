<template>
  <div class="bottom-bar">
    <div class="check-all">
      <check-button :is-checked="isCheckAll" @click.native="checkAll"></check-button>
      <span>全选</span>
    </div>
    <div class="total-price">合计: <span>￥{{totalPrice}}</span></div>
    <button class="pay-button">结算({{checkLength}})</button>
  </div>
</template>

<script>
  import checkButton from 'components/content/checkButton'

  export default {
    name: "cartBottomBar",
    components: {
      checkButton
    },

    methods: {
      //全选功能
      checkAll() {
        if (this.isCheckAll) {
          this.$store.commit('cancelCheckAll')
        }
        else {
          this.$store.commit('checkAll')
        }
      }
    },

    computed: {
      //计算选中商品总价格
      totalPrice() {
        return this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },

      //计算选中商品种类数量
      checkLength() {
        return this.$store.state.cartList.filter(item => {
          return item.checked
        }).length
      },

      //判断购物车列表是否全选
      isCheckAll() {
        if (this.$store.state.cartList.length == 0) return false;
        return !this.$store.state.cartList.find(item => !item.checked)
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    height: 60px;
    background-color: #eee;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .check-all {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }

  .total-price {
    margin-left: 20px;
    color: var(--color-text)
  }

  .total-price span {
    color: var(--color-high-text);
    font-size: 17px;
  }

  .pay-button {
    margin-right: 5px;
    height: 40px;
    background-color: orangered;
    padding: 5px 20px;
    border-radius: 25px;
    color: white;
    outline: none;
    border: none;
  }
</style>