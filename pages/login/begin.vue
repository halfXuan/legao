<template>
	<view class="page">
		 <view class="title">
		 	快速领取体验课
		 </view>
		 <view class="list" @click="toNext(1)">
		 	<image src="/static/img/le.png" mode=""></image>
			<view class="info">
				孩子学乐高
			</view>
		 </view>
		 <view class="list" @click="toNext(2)">
		 	<image src="/static/img/le.png" mode=""></image>
		 			<view class="info">
		 				我要教乐高
		 			</view>
		 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				toNext(index){
					if(index == 1){
						uni.navigateTo({
							url:'/pages/login/age'
						})
					}else{
						// uni.showLoading({
						// 	title:'敬请期待！'
						// })
						// setTimeout(function () {
						//     uni.hideLoading();
						// }, 2000);
						uni.navigateTo({
							url:'/pages/login/wait'
						})
					}
					
				}
			};
		}
	}
</script>

<style lang="scss">
 .page{
	 height: 100vh;
	 background-color: #fff;
	padding: 150px 20px 0;
	 .title{
		 line-height: 30px;
		 font-size: 22px;
		 margin-bottom: 30px;
	 }
	 .list{
		 height: 136px;
		 margin-bottom: 20px;
		 padding: 25px;
		 display: flex;
		 justify-content: space-between;
		 align-items: center;
		 background-color: #fedd26;
		 border-radius: 10px;
		 &:last-child{
			 background-color: #27b7ff;
		 }
		 image{
			 width: 86px;
			 height: 86px;
		 }
		 .info{
			 height: 30px;
			 font-size: 24px;
			 line-height: 30px;
			 padding-right: 50px;
		 }
	 }
 }
</style>
