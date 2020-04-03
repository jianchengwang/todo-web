<template>
	<view>
	   <view class="uni-form-item uni-column">
			<view>用户名</view>
			<input class="uni-input" v-model="loginParam.username" placeholder="请输入用户名" />
		</view>
		<view class="uni-form-item uni-column">
			<view>密码</view>
			<input class="uni-input" password=true v-model="loginParam.password" placeholder="请输入密码" />
		</view>
		<view class="uni-form-item uni-column">
			<button type="primary" @click="login">登录</button>
		</view>
	</view>
</template>

<script>
	import API from '@/api'
	export default {
		data() {
			return {
				loginParam: {
					username: '',
					password: ''
				}
			}
		},
		methods: {
			login: function() {
				API.auth.login(this.loginParam);
			}
		}
	}
</script>

<style>

</style>
