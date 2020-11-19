<template>
	<view>
		<scroll-view scroll-y class="page">
			<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="content">免费领取体验课</block></cu-custom>
			<view class="main">
				<view class="age">
				<image src="/static/img/tiao.png" mode=""></image>	年龄：{{age}} +
			</view>
			<view class="title">
				孩子学习乐高的目的
			</view>
			<view class="box">
				<view class="ages" v-for="(item,index) in 4" :key='index' @click="toNext(index)">
					栏目名称
				</view>
			</view>
			</view>
			
			
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				age: 3,
				list:[
					3,4,5,6,7,8,9
				]
			};
		},
		onLoad(options){
			this.age = options.age
		},
		methods:{
			toNext(index){
				uni.navigateTo({
					url:'/pages/login/total?age='+this.age+'&type='+index
				})
			}
		}
	}
</script>

<style lang="scss">
.page{
	height: 100vh;
	background-color: #fff;
	padding: 10px 0 0;
	.main{
		padding: 50px 20px 0;
		font-size: 16px;
	}
	.age{
		height: 45px;
		display: flex;
		align-items: center;
		padding-left: 15px;
		border-bottom: 1px solid #ccc;
		image{
			width: 20px;
			height: 20px;
			margin-right: 15px;
			font-size: 16px;
		}
	}
	.title{
		padding-left: 20px;
		font-size: 20px;
		color: #333;
		line-height: 26px;
		margin: 40px 0;
	}
	.box{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.ages{
			width: 45%;
			height: 40px;
			line-height: 40px;
			border: 1px solid #ccc;
			text-align: center;
			font-size: 16px;
			border-radius: 7px;
			margin-bottom: 25px;
			background-color: #f5f5f5;
		}
	}
	
}
</style>
