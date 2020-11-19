<template>
	<view>
		<scroll-view scroll-y class="page">
			<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="content">零件表</block></cu-custom>
			<view class="box">
				<view class="list" v-for="(item, index) in list" :key="index" @click="toDetail">
					<view class="up">
						<image :src="item.url" mode=""></image>
						<view class="info">
							<view class="title">{{ item.title }}</view>
							<view class="money">{{ item.money }}</view>
							<view class="date">{{ item.date }}</view>
						</view>
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
			list: [
				{ title: '搭配有趣的角色和可以发射到空中', date: '2020-02-10', money: '拉绳直升机让孩子们的想象力在天际', url: '/static/img/ling.png', orderNum: '128918521890050505' },
				{ title: '搭配有趣的角色和可以发射到空中', date: '2020-02-10', money: '拉绳直升机让孩子们的想象力在天际', url: '/static/img/ling.png', orderNum: '128918521890050505' },
				{ title: '搭配有趣的角色和可以发射到空中', date: '2020-02-10', money: '拉绳直升机让孩子们的想象力在天际', url: '/static/img/ling.png', orderNum: '128918521890050505' },
				{ title: '搭配有趣的角色和可以发射到空中', date: '2020-02-10', money: '拉绳直升机让孩子们的想象力在天际', url: '/static/img/ling.png', orderNum: '128918521890050505' },
				{ title: '搭配有趣的角色和可以发射到空中', date: '2020-02-10', money: '拉绳直升机让孩子们的想象力在天际', url: '/static/img/ling.png', orderNum: '128918521890050505' },
				{ title: '搭配有趣的角色和可以发射到空中', date: '2020-02-10', money: '拉绳直升机让孩子们的想象力在天际', url: '/static/img/ling.png', orderNum: '128918521890050505' },
				{ title: '搭配有趣的角色和可以发射到空中', date: '2020-02-10', money: '拉绳直升机让孩子们的想象力在天际', url: '/static/img/ling.png', orderNum: '128918521890050505' },
			]
		};
	},
	methods:{
		toDetail(){
			uni.navigateTo({
				url:'/pages/mine/linjianDetail'
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	height: 100vh;
	background-color: #fff;

	.box {
		padding: 10px 15px;
		.list {
			padding: 15px 0 20px;
			border-bottom: 1px solid #eee;
			&:last-child {
				border-color: transparent;
			}
			.up {
				display: flex;
				justify-content: flex-start;
				text-align: left;
				image {
					width: 105px;
					height: 75px;
					margin-right: 15px;
					border-radius: 6px;
				}
				.title {
					text-align: left;
					height: 18px;
					line-height: 18px;
					font-size: 16px;
					text-align: center;
					color: #666;
					margin-bottom: 10px;
					overflow: hidden;
					
				}
				.date,
				.money {
					line-height: 16px;
					font-size: 14px;
					color: #999;
					overflow: hidden;
				}
			}
		}
	}
}
</style>
