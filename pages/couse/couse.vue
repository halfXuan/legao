<template>
	<view>
		<scroll-view scroll-y class="page">
			<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="backText"></block>
				<block slot="content">选择上课时间</block>
			</cu-custom>
			<view class="tips">体验课的上课时间为60分钟，请提前安排好您的时间</view>
			<view class="content">
				<view class="times">
					<view class="list" v-for="(item, index) in list" :key="index" @click="cur = index">
						<view class="week">{{ item.week }}</view>
						<view :class="cur == index ? 'day actived' : 'day'">{{ item.day }}</view>
					</view>
				</view>
				<view class="course">
					<view class="list" v-for="(item, index) in course" :key="index"  @click="changeStaus(index)">
						<view class="left">
							<view class="begin">
							{{item.begin}}
						</view>
						<view class="end">
							{{item.end}} 结束
						</view>
						</view>
						
						<view class="status status1" v-if="item.status==0">
							预约
						</view>
						<view class="status status2" v-if="item.status==2">
							预约
						</view>
						<view class="status status3" v-if="item.status==1">
							<image src="/static/img/dui.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="btn" @click="toNext">
					下一步  选择上课方式
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			cur: 0,
			list: [
				{ day: 16, week: '今天' },
				{ day: 17, week: '六' },
				{ day: 18, week: '日' },
				{ day: 19, week: '一' },
				{ day: 20, week: '二' },
				{ day: 21, week: '三' },
				{ day: 22, week: '四' }
			],
			course: [
				{ begin: '13:00', end: '14:00', status: 1 },
				{ begin: '14:20', end: '15:20', status: 0 },
				{ begin: '15:40', end: '16:40', status: 2 },
				{ begin: '17:00', end: '18:00', status: 0 },
				{ begin: '18:20', end: '19:20', status: 0 },
				{ begin: '19:40', end: '20:40', status: 0 },
				{ begin: '21:00', end: '22:00', status: 0 }
			]
		};
	},
	methods:{
		changeStaus(index){
			let sta = this.course[index].status
			if(sta == 0){
				this.course[index].status = 1
			}
			if(sta == 1){
				this.course[index].status = 0
			}
		},
		
		toNext(){
			uni.navigateTo({
				url:'/pages/couse/courseType'
			})
		}
	}
};
</script>

<style lang="scss">
.page {
	height: 100vh;
	background-color: #fff;
	.tips {
		color: #f9af1f;
		background-color: #fffac7;
		height: 36px;
		line-height: 36px;
		font-size: 14px;
		text-align: center;
	}
	.content {
		padding: 0 15px;
	}
	.times {
		padding: 18px 15px 10px;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #ccc;
		.list {
			height: 42px;
			text-align: center;
			.week {
				line-height: 18px;
				color: #ccc;
			}
			.day {
				margin-top: 4px;
				line-height: 20px;
				height: 20px;
				width: 20px;
				text-align: center;
			}
			.actived {
				background-color: #fce700;
				border-radius: 50%;
			}
		}
	}
	.course{
		.list {
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #ccc;
			align-items: center;
			height: 76px;
			padding: 0 15px;
			.left{
				display: flex;
				justify-content: flex-start;
				height: 76px;
				align-items: center;
				.begin{
					height: 20px;
					line-height: 20px;
					color: #333;
					font-size: 16px;
					margin-right: 10px;
				}
				.end{
					height: 20px;
					line-height: 20px;
					color: #ccc;
					font-size: 14px;
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
	}
	.btn{
		width: 86%;
		height: 38px;
		line-height: 38px;
		margin: 100px auto 40px;
		text-align: center;
		background-color: #f5f5f5;
		color: #999;
	}
}
</style>
