import urlConfig from './config.js'

const request = {}
const headers = {}
const PORT1 = '/baseinfo'

request.globalRequest = (url, method, data, power) => {
	/*     权限判断 因为有的接口请求头可能需要添加的参数不一样，所以这里做了区分
	    1 == 不通过access_token校验的接口
	    2 == 文件下载接口列表
	    3 == 验证码登录 */
	const token = uni.getStorageSync('token')
	switch (power) {
		case 1:
			// headers['Authorization'] = 'Bearer ' + token
			break;
		case 2:

			break;
		case 3:
			responseType = 'blob'
			break;
		default:
			headers['Authorization'] = `Bearer ${
                this.$store.getters.userInfo
            }`
			headers['TENANT-ID'] = this.$store.getters.userInfo.tenant_id
			break;
	}
	return uni.request({
		url: urlConfig + url,
		method,
		data: data,
		dataType: 'json',
		header: headers
	}).then(res => {
		// console.log('323237'+ JSON.stringify(res[1].data))
		// console.log('37'+res[1].data.isSuccess)
		let obj = res[1].data
		if (obj.isSuccess) {
			return res[1]
		} else {
			if (obj.code) {
				throw obj
			} else {
				return res[1]
			}
		}

	}).catch(parmas => {
		console.log('3434：' + parmas)
		switch (parmas.code) {
			case 401:
				// 　　　　　　　　　　uni.clearStorageSync()
				uni.removeStorageSync('token')
				uni.showToast({
					title: '未登录',
					icon: 'loading',
					duration: 2000
				})
				setTimeout(() => {
					uni.navigateTo({
						url: "../login/index"
					})
				}, 2000)
				break
			case 403:
				// 　　　　　　　　　　uni.clearStorageSync()
				uni.removeStorageSync('token')
				uni.showToast({
					title: 'token过期了',
					icon: 'loading',
					duration: 2000
				})
				setTimeout(() => {
					uni.navigateTo({
						url: "../login/index"
					})
				}, 2000)

				break
			default:
				uni.showToast({
					title: parmas.message,
					icon: 'none'
				})
				return Promise.reject()
				break
		}
	})
}

export default request
