<template>
	<view>
		<scroll-view scroll-y class="page">
			<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="backText"></block>
				<block slot="content">预约成功</block>
			</cu-custom>
			<view class="result">
				<image src="/static/img/cheng.png" mode=""></image>
				<view class="type">
					您选择的上课方式： 电脑
				</view>
				<view class="tips">
					请提前官网下载： 乐高教育AC,并按时出席
					
				</view>
			</view>
			<view class="bottom">
				<view class="up">
					<view class="title">
						给自己选择一个乐高英雄伙伴吧
					</view>
					<view class="tip">
						请选择你喜欢的英雄人物
					</view>
					<view class="person">
						<image :src="isLeft==1?'/static/img/ma1.png':'/static/img/ma1-a.png'" mode="" @click="selectedLeft(1)"></image>
						<image :src="isLeft==1?'/static/img/ma2.png':'/static/img/ma2-a.png'" mode="" @click="selectedLeft(2)"></image>
					</view>
				</view>
				<view class="down">
					<view :class="selected==index?'list actived':'list'" v-for="(item,index) in list" :key='index' @click="selectedPerson(index)">
						{{item}}
					</view>
				</view>
				<view class="chenage" @click="changePerson">
					<image src="/static/img/huan.png" mode=""></image>换一换
				</view>
				<view class="finish" @click="toNext">
					预约完成
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
				'方头仔','蝙蝠侠','冰雪奇缘','悟空小侠','金刚狼','美国队长'
			],
			listBox:[
				['方头仔','蝙蝠侠','冰雪奇缘','悟空小侠','金刚狼','美国队长'],
				['神奇4侠','雷神','暴风女','毁灭博士','奇异博士','蜻蜓队长'],
				['奥丁','行星吞噬者','沙人','金刚狼','镭射眼','暴风'],
				['黑寡妇','鹰眼','富瑞','神奇4侠','蜘蛛侠','毒液']
			],
			cur: 0,
			selected: 1,
			isLeft: 1
		};
	},
	onLoad() {
		this.list = this.listBox[this.cur]
	},
	methods:{
		selectedLeft(index){
			this.isLeft = index
		},
		selectedPerson(index){
			this.selected = index
		},
		changePerson(){
			if(this.cur == 3){
				this.cur = 0
			}else{
				this.cur += 1
			}
			this.list = this.listBox[this.cur]
		},
		toNext(){
			uni.navigateTo({
				url:'/pages/index/index'
			})
		}
	}
};
</script>

<style lang="scss" scoped>
	.page{
		height: 100vh;
		background-color: #fff;
		.down{
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			padding-top: 10px;
			.actived{
				    background: url(/static/img/bei.png) no-repeat;
				    background-size: 100% 100%;
				    border: 1px solid #fce700;
			}
			.list{
				width: 94px;
				height: 35px;
				line-height: 35px;
				border-radius: 6px;
				text-align: center;
				font-size: 14px;
				color: #333;
				border: 1px solid #ccc;
				margin-top: 15px;
			}
			
		}
		.chenage{
			width: 94px;
			height: 38px;
			display: flex;
			margin: 20px auto;
			justify-content: center;
			align-items: center;
			border: 1px solid #ccc;
			border-radius: 8px;
			image{
				width: 12px;
				height: 12px;
				margin-right: 15px;
			}
			color: #999;
		}
		.finish{
			width: 300px;
			margin: 0 auto;
			height: 36px;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 18px;
			background-color: #fce700;
			margin-bottom: 20px;
		}
		.result{
			padding: 20px 0 30px;
			text-align: center;
			border-bottom: 15px solid #eee;
			image{
				height: 56px;
				width: 118px;
				
			}
			.type{
				margin-top: 30px;
				line-height: 20px;
				font-size: 16px;
			}
			.tips{
				padding-top: 20px;
				line-height: 20px;
				font-size: 14px;
				color: #999;
			}
		}
		.bottom{
			padding: 30px 20px 0;
			.up{
				text-align: center;
				border-bottom: 1px solid #ccc;
				.title{
					line-height: 20px;
					font-size: 16px;
					color: #333;
				}
				.tip{
					padding-top: 7px;
					line-height: 20px;
					font-size: 14px;
					color: #999;
				}
				.person{
					height: 73px;
					margin-top: 30px;
					padding-bottom: 15px;
					padding-left: 70px;
					padding-right: 70px;
					display: flex;
					justify-content: space-between;
					image{
						width: 58px;
						height: 58px;
					}
				}
			}
		}
	}
</style>
