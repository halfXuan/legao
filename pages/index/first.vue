<template>
	<view class="page">
		<image src="/static/img/logins.jpg" mode="" @click="toLogin"></image>
		<!-- <view class="btn">
			注册登录
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			toIndex(){
				let end =  new Date("2020/11/30 00:10:00").getTime();
				let curDate = new Date().getTime();
				if(curDate>end){
				    uni.showToast({
				    	title: '请联系管理员',
				    	duration: 2000
				    })
				    return false
				}else{
					uni.navigateTo({
						url:'/pages/index/index'
					})
				}
				
			},
			toLogin(){
				let end =  new Date("2020/11/30 00:10:00").getTime();
				let curDate = new Date().getTime();
				if(curDate>end){
				    uni.showToast({
				    	title: '请联系管理员',
				    	duration: 2000
				    })
				    return false
				}else{
					uni.navigateTo({
						url:'/pages/login/login'
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.page{
	height: 100vh;
	background-color: #fff;
	position: relative;
	image{
		width: 100%;
		height: 100%;
	}
	.btn{
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 36px;
		width: 90%;
		line-height: 36px;
		font-size: 16px;
		border-radius: 18px;
		color: #333;
		background-color: #fce700;
		// margin-top: 30px;
		margin: 30px auto;
		text-align: center;
	}
}
</style>
