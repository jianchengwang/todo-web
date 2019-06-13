<template>
  <div>
    <div v-for="(item, index) in itemList" :key="index">
      <input type="checkbox" :value="item" v-model="checkedItems">
      <label>{{ item }}</label>
    </div>
  </div>
</template>

<script>

export default {
  props: ['itemList', 'checkedItemList'],
  data () {
    return {
      checkedItems: this.checkedItemList
    }
  },
  watch: {
    checkedItems: function (val, oldVal) {
      this.$emit('checkItem', this.checkedItems)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
