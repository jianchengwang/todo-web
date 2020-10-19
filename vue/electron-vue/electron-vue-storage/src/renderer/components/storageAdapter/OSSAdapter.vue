<template>
   <div>
      <div>阿里云OSS设置</div>
      <div>endpoint:<input type="text" value="@{oss.endpoint}" /></div>
   </div>
</template>

<script>
export default {
   data () {
      return {
         oss: {
            endpoint: '',
            accessKeyId: '',
            accessKeySecret: '',
            bucketName: ''
         }
      }
   }
}
</script>

<style scoped>

</style>
