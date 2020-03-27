<template>
   <div>
      <div>
          <router-link :to="{ name: 'OSSAdapter'}">阿里云OSS</router-link>
          <router-link :to="{ name: 'COSAdapter'}">腾迅云COS</router-link>
        </div>
      <router-view></router-view>
   </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>