import { config } from '@/config.js'
import store from '@/store'
import { Http } from '@/utils/http.js'
const http = new Http();

const API_AUTH = {
	login: function(loginParam) {
		uni.showLoading({
		    title: '自动登录...'
		});
		if(!loginParam) {
			loginParam = {}
		}
		if(!loginParam.code) {
			uni.login({
				success: (res) => {
					uni.hideLoading();
					if(res.code) {
						console.info(res.code)
						loginParam.code = res.code
						http.request({
							url: `/wx/ma/user/${config.appId}/login`,
							data: loginParam,
						}).then(res => {
							const token = res.data.token;
							if(token && token.length) {
								uni.setStorageSync(config.AUTH_TOKEN, token)
								store.dispatch('setToken', token)
							} else{
								uni.removeStorageSync(config.AUTH_TOKEN)
								uni.redirectTo({
									url: '/pages/auth/login'
								});
							}
						});
					}
				},
				fail: () => {
					 uni.hideLoading();
					 uni.showToast({
						title: '微信授权登录失败',
						icon: 'none'
					})
				}
			})
		}
	},
	
	getUserInfo: function() {
		return http.request({
			url: `/api/auth/currentUserInfo`,
		});
	}
}

export default API_AUTH