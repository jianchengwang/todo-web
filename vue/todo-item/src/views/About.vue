<template>
  <div class="about">
    <h1>This is an about page</h1>

    <ul>
      <li v-for="(item,index) in itemList" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted () {
    this.itemList = this.$store.state.itemList
  },
  data () {
    return {
      itemList: []
    }
  }
}
</script>

<style lang="less" scoped>

</style>
