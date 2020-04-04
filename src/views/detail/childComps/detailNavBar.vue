<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.png" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" :key="item" class="title-item" :class="{active:index == currentIndex}" @click="titleClick(index)">{{item
          }}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import navBar from 'components/common/navbar/navBar'

  export default {
    name: "detailNavBar",
    components: {
      navBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },

    methods: {
      titleClick(index) {
        this.currentIndex = index;
        this.$emit('titleClick', index)
      },

      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 16px;
  }

  .title-item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text)
  }

  .back img {
    height: 15px;
    margin-top: 15px;
  }
</style>