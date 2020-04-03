<script>
	import API from '@/api'
	export default {
		onLaunch: function() {
		},
		onShow: function() {
			this.autoLogin()
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			// 静默登录
			autoLogin() {
				API.auth.login()
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
