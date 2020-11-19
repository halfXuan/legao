<template>
	<view>
		<scroll-view scroll-y class="page">
			<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="content">免费领取体验课</block></cu-custom>
			<view class="main">
				<view class="age">
					<image src="/static/img/tiao.png" mode=""></image>
					年龄：{{ age }} +
				</view>
				<view class="age">
					<image src="/static/img/tiao.png" mode=""></image>
					综合能力
				</view>
				<view class="title">孩子和乐高接触的程度是</view>
				<view class="box">
					<view class="ages" v-for="(item, index) in list" :key="index" @click="toNext(index)">{{ item }}</view>
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
			type: '',
			list: ['没接触过乐高相关产品', '偶尔接触乐高玩具', '经常接触乐高玩具', '接触过乐高教育课程', '正在学习乐高教育']
		};
	},
	onLoad(options) {
		this.age = options.age;
		this.type = options.type;
	},
	methods: {
		toNext(index) {
			uni.navigateTo({
				url: '/pages/login/last?age=' + this.age + '&type=' + index + this.type + '&total=' + index
			});
		}
	}
};
</script>

<style lang="scss">
.page {
	height: 100vh;
	background-color: #fff;

	.main {
		padding: 10px 15px 0;
	}
	.age {
		height: 45px;
		display: flex;
		align-items: center;
		padding-left: 15px;
		border-bottom: 1px solid #ccc;
		font-size: 16px;
		image {
			width: 20px;
			height: 20px;
			margin-right: 15px;
			font-size: 16px;
		}
	}
	.title {
		padding-left: 20px;
		font-size: 18px;
		color: #333;
		line-height: 26px;
		margin: 40px 0;
	}
	.box {
		padding: 0 10px;
		// 	display: flex;
		// 	justify-content: space-between;
		// 	flex-wrap: wrap;
		.ages {
			// width: 45%;
			height: 44px;
			line-height: 44px;
			border: 1px solid #ccc;
			color: #333;
			text-align: center;
			font-size: 16px;
			border-radius: 7px;
			margin-bottom: 15px;
			background-color: #f5f5f5;
		}
	}
}
</style>
