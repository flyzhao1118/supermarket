<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="item" class="tab-control-item" :class="{active:index==currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabControl",
    props: {
      titles: Array
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
  }

  .active span{
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-tint);
   }

  .tab-control-item span {
    padding: 5px;
  }
</style>