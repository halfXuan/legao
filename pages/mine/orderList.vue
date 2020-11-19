<template>
	<view>
		<scroll-view scroll-y class="page">
			<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="content">我的订单</block></cu-custom>
			<view class="box">
				<view class="list" v-for="(item, index) in list" :key="index" @click="toNext">
					<view class="up">
						<image :src="item.url" mode=""></image>
						<view class="info">
							<view class="title">{{ item.title }}</view>
							<view class="date">付款时间：{{ item.date }}</view>
							<view class="money">金额：{{ item.money }} 元</view>
						</view>
					</view>
					<view class="down">
						<view class="num">订单编号： {{ item.orderNum }}</view>
						<view class="btn">已付款</view>
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
				{ title: '孩子们要使用起重机把马桶模型', date: '2020-02-10', money: '3690', url: '/static/img/ding.png', orderNum: '128918521890050505' },
				{ title: '孩子们要使用起重机把马桶模型', date: '2020-02-10', money: '3690', url: '/static/img/ding.png', orderNum: '128918521890050505' },
				{ title: '孩子们要使用起重机把马桶模型', date: '2020-02-10', money: '3690', url: '/static/img/ding.png', orderNum: '128918521890050505' },
				{ title: '孩子们要使用起重机把马桶模型', date: '2020-02-10', money: '3690', url: '/static/img/ding.png', orderNum: '128918521890050505' },
				{ title: '孩子们要使用起重机把马桶模型', date: '2020-02-10', money: '3690', url: '/static/img/ding.png', orderNum: '128918521890050505' },
				{ title: '孩子们要使用起重机把马桶模型', date: '2020-02-10', money: '3690', url: '/static/img/ding.png', orderNum: '128918521890050505' }
			]
		};
	},
	methods:{
		toNext(){
			uni.navigateTo({
				url:'/pages/mine/orderDetail'
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	height: 100vh;
	background-color: #fff;
	
	.box {padding: 10px 15px;
		.list {
			padding: 15px 0;
			border-bottom: 1px solid #eee;
			&:last-child{
				border-color: transparent;
			}
			.up {
				display: flex;
				justify-content: flex-start;
				image {
					width: 100px;
					height: 65px;
					margin-right: 15px;
				}
				.title {
					height: 18px;
					line-height: 18px;
					font-size: 16px;
					text-align: center;
					color: #666;
					margin-bottom: 10px;overflow: hidden;
				}
				.date,.money{
					line-height: 16px;
					font-size: 14px;
					color: #999;overflow: hidden;
				}
			}
			
			.down{
				display: flex;
				justify-content: space-between;
				height: 30px;
				margin-top: 10px;
				color: #999;
				align-items: center;
				.btn{
					height: 30px;
					width: 85px;
					line-height: 30px;
					border-radius: 15px;
					color: #666;
					background-color: #ffe83d;
					text-align: center;
				}
			}
		}
	}
}
</style>
