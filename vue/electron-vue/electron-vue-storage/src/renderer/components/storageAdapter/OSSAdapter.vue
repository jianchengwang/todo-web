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
            endpoint: 'oss-cn-hangzhou.aliyuncs.com',
            accessKeyId: 'pwRv2N55r5wzi1CJ',
            accessKeySecret: 'CB6SOFly6A5WXPHECqwRQXYtyPDxLT',
            bucketName: 'osswebtest'
         }
      }
   }
}
</script>

<style scoped>

</style>