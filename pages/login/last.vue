<template>
	<view>
		<scroll-view scroll-y class="page">
			<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="content">免费领取体验课</block></cu-custom>
			<view class="main">
					<view class="age">
						<image src="/static/img/tiao.png" mode=""></image>	年龄：{{age}} +
					</view>
					<view class="age">
						<image src="/static/img/tiao.png" mode=""></image>	综合能力
					</view>
					<view class="age">
						<image src="/static/img/tiao.png" mode=""></image>	经常接触
					</view>
					<view class="title" @click="toNext">
						下一步 选择上课时间
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
				type:'',
				total:'',
				list:[
					'没接触过乐高相关产品',
					'偶尔接触乐高玩具',
					'经常接触乐高玩具',
					'接触过乐高教育课程',
					'正在学习乐高教育'
				]
			};
		},
		onLoad(options){
			this.age = options.age
			this.type = options.type
			this.total = options.total
		},
		methods:{
			toNext(){
				uni.navigateTo({
					url:'/pages/couse/couse'
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
		padding: 10px 15px 0;
	}
	.age{
		height: 45px;
		display: flex;
		align-items: center;
		padding-left: 15px;
		border-bottom: 1px solid #ccc;
		font-size: 16px;
		image{
			width: 20px;
			height: 20px;
			margin-right: 15px;
			font-size: 16px;
		}
	}
	.title{
		position: fixed;
		left: 50px;
		right: 50px;
		height: 36px;
		line-height: 36px;
		background-color: #fce700;
		border-radius: 18px;
		text-align: center;
		bottom: 50px;

	}
	
}
</style>
