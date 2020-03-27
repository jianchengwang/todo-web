<template>
    <div>
        <div class="menu"><router-link :to="{ name: 'Upload'}">上传区</router-link></div>
        <div class="menu"><router-link :to="{ name: 'Storage'}">图床设置</router-link></div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style lang="css" scoped>
    .menu {
        font-size: 20px;
        color:darkcyan;
        margin-top: 8px;
    }
</style>