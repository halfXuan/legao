<template>
	<view>
		<scroll-view scroll-y class="page">
			<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="backText"></block>
				<block slot="content">选择上课方式</block>
			</cu-custom>
			<view class="type" @click="handle(1)">
				<view class="left">
					<image src="/static/img/yuyue.png" mode=""></image>
					<view class="info">
						<view class="name">
							电脑
						</view>
						<view class="tip">
							推荐3 ~ 9岁使用
						</view>
						<view class="tip">
							支持：Windows、Mac
						</view>
					</view>
				</view>
				<view class="status status1" v-if="status==2" @click="handle(1)">
					选择
				</view>
				<view class="status status3" v-if="status==1">
					<image src="/static/img/dui.png" mode=""></image>
				</view>
			</view>
			<view class="type" @click="handle(2)">
				<view class="left">
					<image src="/static/img/yuyue.png" mode=""></image>
					<view class="info">
						<view class="name">
							平板电脑
						</view>
						<view class="tip">
							推荐3 ~ 5岁使用
						</view>
						<view class="tip">
							支持：ipad、安卓pad
						</view>
					</view>
				</view>
				<view class="status status1" v-if="status==1">
					选择
				</view>
				<view class="status status3" v-if="status==2">
					<image src="/static/img/dui.png" mode=""></image>
				</view>
			</view>
			<view class="btn" @click="toNext">
				预约完成
			</view>
		</scroll-view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: 1
			};
		},
		methods:{
			handle(index){
				this.status = index
			},
			toNext(){
				uni.navigateTo({
					url:'/pages/couse/booked'
				})
			}
		}
	}
</script>

<style lang="scss">
.page {
	height: 100vh;
	background-color: #fff;
	position: relative;
	.btn{
		position: absolute;
		width: 90%;
		height: 50px;
		line-height: 50px;
		border-radius: 25px;
		background-color: #fce700;
		text-align: center;
		left: 50%;
		transform: translateX(-50%);
		bottom: 36px;
	}
	.type{
		padding: 25px 20px;
		border-bottom: 15px solid #eee;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.left{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			image{
				width: 65px;
				height: 65px;
				margin-right: 30px;
			}
			.name{
				line-height: 20px;
				color: #333;
				font-size: 16px;
			}
			.tip{
				line-height: 18px;
				color: #999;font-size: 14px;
			}
		}
	}
	.status1{
		width: 52px;
		height: 28px;line-height: 28px;
		border-radius: 14px;
		text-align: center;
		font-size: 14px;
		border: 1px solid #cccccc;
	}
	.status2{
		width: 52px;
		height: 28px;
		line-height: 28px;
		border-radius: 14px;
		text-align: center;
		font-size: 14px;
		border: 1px solid #cccccc;
		background-color: #f5f5f5;
		color: #ccc;
	}
	.status3{
		width: 52px;
		height: 26px;
		border-radius: 14px;
		text-align: center;
		
		image{
			width: 52px;
			height: 26px;
		}
	}
	}
</style>
