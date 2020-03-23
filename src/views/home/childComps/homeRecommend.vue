<template>
  <div id="recommend">
    <div v-for="item in recommend" :key="item.title" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "homeRecommend",
    props: {
      recommend: Array
    }
  }
</script>

<style scoped>
  #recommend {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 0;
    border-bottom: 8px solid #eee;
  }

  .recommend-item {
    flex: 0 0 25%;
    margin-bottom: 10px;
  }

  .recommend-item img {
    width: 70%;
    height: 70%;
    margin-bottom: 5px;
  }
</style>