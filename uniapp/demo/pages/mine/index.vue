<template>
	<view>
		 <view class="image-content">
			<image style="width: 200px; height: 200px; background-color: #eeeeee;" :src="userInfo.avatar" />
		</view>
		 <list>
		    <!-- 注意事项: 不能使用 index 作为 key 的唯一标识 -->
		    <cell>
		      <text>{{ userInfo.nickname }}</text>
		    </cell>
			<cell>
			  <text>{{ userInfo.email }}</text>
			</cell>
		  </list>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
			};
		},
		computed: {
			userInfo: function() {
				console.info(this.$store.state.app.userInfo)
				return this.$store.state.app.userInfo
			}
		}
	}
</script>

<style lang="scss">

</style>
