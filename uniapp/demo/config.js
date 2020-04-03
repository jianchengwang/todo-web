//uni-app内置有区别环境的不同，可以直接通过process.env.NODE_ENV获取
let BASE_URL = ''
if(process.env.NODE_ENV === 'development') {
	BASE_URL = "http://127.0.0.1:8080"
} else {
	BASE_URL = "http://127.0.0.1:8081"
}
const config = {
	base_url: BASE_URL,
	appId: 'wxde328f065b0dca41',
	appKey: '11db4154134bc47280d9a7cc0029c60b',
	
	AUTH_TOKEN: 'Authorization'
}

export { config }