<template>
	<view>
		<scroll-view scroll-y class="page">
			<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="content">免费领取体验课</block></cu-custom>
			<view class="main">
				<view class="title">
				孩子现在的年龄
			</view>
			<view class="ages" v-for="(item,index) in list" :key='index' @click="toNext(item)">
				{{item}}+
			</view>
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					3,4,5,6,7,8,9
				]
			};
		},
		methods:{
			toNext(index){
				uni.navigateTo({
					url:'/pages/login/cates?age='+index
				})
			}
		}
	}
</script>

<style lang="scss">
.page{
	height: 100vh;
	background-color: #fff;
	
	.main{
		padding: 50px 20px 0;
	}
	.title{
		padding-left: 20px;
		font-size: 22px;
		color: #333;
		line-height: 26px;
		margin-bottom: 20px;
	}
	.ages{
		height: 48px;
		line-height: 48px;
		border: 1px solid #ccc;
		text-align: center;
		font-size: 18px;
		border-radius: 7px;
		margin-bottom: 15px;
	}
}
</style>
