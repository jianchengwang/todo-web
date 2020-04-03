import config from '@/config.js'
import API from '@/api'
const app = {
	state: {
		userInfo: {
			username: '',
			nickname: '',
			phone: ''
		}
	},
	mutations: {
		SET_USER_INFO: (state, userInfo) => {
			state.userInfo = userInfo
			uni.switchTab({
			    url: '/pages/home/index'
			});
		}
	},
	actions: {
		// 缓存用户信息
		setToken({
			commit
		}, token) {
			uni.showLoading({
			    title: '获取用户信息...'
			});
			API.auth.getUserInfo().then(res => {
				uni.hideLoading()
				commit('SET_USER_INFO', res.data)
			})
		}
	},
	getters: {
		userInfo: state => state.userInfo
	}
}

export default app