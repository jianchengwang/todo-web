<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Todo msg="A todo list made with Vue.js"/>
  </div>
</template>

<script>
import Todo from '_c/Todo.vue'

export default {
  name: 'home',
  components: {
    Todo
  }
}
</script>

<style lang="less" scoped>
  img {
    width: 100px;
  }
</style>
