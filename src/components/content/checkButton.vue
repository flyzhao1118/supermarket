<template>
  <div class="check-button">
    <img v-if="isChecked" src="~assets/img/common/checked.png" alt="">
    <img v-else src="~assets/img/common/unchecked.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "checkButton",
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .check-button {
    margin-right: 5px;
  }

  .check-button img{
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    border-radius: 50%;
  }
</style>