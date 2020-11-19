<template name="mine">
	<view>
		<scroll-view scroll-y class="page">
			<view class="info">
				<view class="infoLeft">
					<image src="/static/img/tou.png" mode="" class="avtoar"></image>
					<view class="names">
						<view class="name">
							{{info.name}}
						</view>
						<view class="level">
							<image src="/static/img/pingce.png" mode=""></image>
						</view>
					</view>
				</view>
				<image src="/static/img/you.png" class="infoRight" mode=""></image>
			</view>
			<view class="list">
				<view class="listList">
					<view class="title">
						下节课时间
					</view>
					<view class="infos">
						<view style="font-size: 14px;line-height: 16px;">2020-10-16</view>
						<text style="font-size: 16px;line-height: 16px;">14：00</text>
					</view>
				</view>
				<view class="listList">
					<view class="title">
						累计学乐高
					</view>
					<view class="infos">
						<text>36</text>
						<text>课时</text>
					</view>
				</view>
				<view class="listList">
					<view class="title">
						本月上课
					</view>
					<view class="infos">
						<text>8</text>
						<text>课时</text>
					</view>
				</view>
				<view class="listList">
					<view class="title">
						本月目标
					</view>
					<view class="infos">
						<text>14</text>
						<text>课时</text>
					</view>
				</view>
			</view>
			<view class="content">
				<view class="contentTitle">
					下一节课
				</view>
				<view class="course">
					<view class="courseUp">
						<view class="date">
							20分钟后上课
						</view>
						<view class="time">
							09月27日 (星期六) 15:00 - 16:00
						</view>
					</view>
					<view class="courseDown">
						<image src="../../static/img/ding.png" mode=""></image>
						<view class="content-up-list">
							
							孩子们要使用起重机把马桶模型吊到指定位置，运送建筑材料，以及清理街上的碎石
						
						</view>
					</view>
					<view class="actions">
						<view class="left">
							<image src="../../static/img/legao.png" mode=""></image> 乐高教育 <text>teacher</text>
						</view>
						<view class="right">
							进入教室
						</view>
					</view>
				</view>
			</view>
			<view class="content contentmenu">
				<view class="menu" :data-url='item.url' v-for="(item,index) in list1" :key='index' @click="NavChange">
					<view class="title">
						{{item.title}}
					</view>
					<image src="/static/img/you.png" class="menuRight" mode=""></image>
				</view>
			</view>
			<view class="content contentmenu">
				<view class="menu" :data-url='item.url' v-for="(item,index) in list2" :key='index' @click="NavChange">
					<view class="title">
						{{item.title}}
					</view>
					<view class="menuRightBox" v-if="index == 0">
						 <image src="/static/img/new.png" class="text" mode=""></image>
						 <image src="/static/img/you.png" class="menuRight" mode=""></image>
					</view>
					<image src="/static/img/you.png" class="menuRight" mode="" v-else></image>
				</view>
			</view>
			<view class="content contentmenu">
				<view class="menu" :data-url='item.url' v-for="(item,index) in list3" :key='index' @click="NavChange">
					<view class="title">
						{{item.title}}
					</view>
					
					<image src="/static/img/you.png" class="menuRight" mode=""></image>
				</view>
			</view>
			<view class="content contentmenu">
				<view class="menu" :data-url='item.url' v-for="(item,index) in list4" :key='index' @click="NavChange">
					<view class="title">
						{{item.title}}
					</view>
					<view class="service" v-if="index == 1">
					每日9:00 - 22:00	<image src="/static/img/you.png" class="menuRight" mode=""></image>
					</view>
					<image src="/static/img/you.png" class="menuRight" mode="" v-else></image>
				</view>
			</view>
			<view class="content contentmenu">
				<view class="menu menulast" :data-url='item.url' v-for="(item,index) in list5" :key='index' @click="NavChange">
					<view class="title">
						{{item.title}}
					</view>
					<image src="/static/img/you.png" class="menuRight" mode=""></image>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	name: 'mine',
	data() {
		return {
			info:{
				url:'',
				name:'张德帅'
			},
			list1:[
				{title: '我的推荐', url:''},
				{title: '我的优惠券', url:'active'},
				{title: '邀请记录', url:''},
				{title: '我的快递', url:''},
			],
			list2:[
				{title: '购买课程', url:'car'},
				{title: '我的订单', url:'orderList'},
				{title: '我的任务', url:''},
			],
			list3:[
				{title: '学习成就', url:'studyList'},
				{title: '零件表', url:'linjianPre'},
				{title: '引导师评语', url:'teacherWord'},
			],
			list4:[
				{title: '在线客服', url:''},
				{title: '客服热线', url:'phone'},
				{title: '绑定服务号', url:''},
			],
			list5:[
				{title: '设置', url:''},
			]
		};
	},
	methods: {
		NavChange(e) {
			
			if(e.currentTarget.dataset.url == 'car'){
				uni.navigateTo({
					url:'/pages/index/index?PageCur=plugin'
				})
			}else if(e.currentTarget.dataset.url == 'active'){
				uni.navigateTo({
					url:'/pages/index/index?PageCur=component'
				})
			}else if(e.currentTarget.dataset.url == 'phone'){
				uni.makePhoneCall({
				 	
				 	// 手机号
				    phoneNumber: '400000000', 
				
					// 成功回调
					success: (res) => {
						console.log('调用成功!')	
					},
				
					// 失败回调
					fail: (res) => {
						console.log('调用失败!')
					}
					
				  });
			} else{
				uni.navigateTo({
					url: "/pages/mine/"+e.currentTarget.dataset.url
				})
			}
		}
	}
};
</script>

<style scoped lang="scss">
.page {
	// position: fixed;
	// top: 0;
	// left: 0;
	// bottom: 0;
	// right: 0;
	height: 100vh;
	background-color: #f5f5f5;
	overflow-y: auto;
	padding-bottom: 70px;
	.menuRightBox{
		height: 50px;
		// width: 100px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		.text{
			height: 18px;
			width: 32px;
			margin-right: 15px;
		}
	}
	.service{
		height: 50px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 14px;
		color: #999;
		image{
			margin-left: 10px;
		}
	}
	.info{
		background-color: #fff;
		padding: 30px 10px 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		&Left{
			display: flex;
			justify-content: flex-start;
			.avtoar{
				width: 94px;
				height: 94px;
				margin-right: 15px;
				border-radius: 50%;
			}
			.names{
				display: flex;
				// align-items: center;
				flex-direction: column;
				padding-top: 15px;
				.name{
					line-height: 24px;
					font-size: 16px;
				}
				.level{
					height: 24px;
					margin-top: 15px;
					image{
						height: 100%;
						width: 78px;
					}
				}
			}
		}
	
		&Right{
			width: 10px;
			height: 15px;
		}
	
	}
	.list{
		padding: 0 10px 20px;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		&List{
			width: 25%;
			text-align: center;
			.title{
				font-size: 14px;
				color: #999;
				line-height: 18px;
			}
			.infos{
				height: 32px;
				line-height: 32px;
				margin-top: 8px;
				font-size: 12px;
				position: relative;
				text{
					width: 100%;
					&:first-child{
						font-size: 18px;
						padding-right: 5px;
					}
				}
				&:first-child{
					view{
					  
					}
					text{
						width: 100%;
						&:first-child{
						
							display: block;
						}
					}
				}
				&::after{
					position: absolute;
					    height: 20px;
					    width: 1px;
					    background-color: #eee;
					    content: '';
					    right: 0;
					    top: 6px;
					    z-index: 999;
						&:last-child{
							color: transparent;
						}
				}
			}
		}
	}
	.content{
		padding: 0 15px;
		&Title{
			height: 50px;
			line-height: 50px;
			font-size: 17px;
		}
		.course{
			border-radius: 5px;
			padding: 0 15px;
			background-color: #fff;
			margin-bottom: 10px;
			&Up{
				height: 60px;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				border-bottom: 1px solid #ccc;
				.date{
					height: 28px;
					line-height: 28px;
					font-size: 14px;
					text-align: center;
					border-radius: 14px;
					color: #fff;
					background-color: #ff7070;
					width: 96px;
					margin-right: 15px;
				}
				.time{
					color: #999;
				}
			}
			&Down{
				display: flex;
				justify-content: flex-start;
				padding-top: 15px;
				image{
					width: 100px;
					height: 65px;
					margin-right: 15px;
				}
				.content-up-list{
					width: calc(100% - 120px);
				}
			}
			.actions{
				display: flex;
				justify-content: space-between;
				height: 50px;
				align-items: center;
				.left{
					display: flex;
					justify-content: space-between;
					height: 50px;
					align-items: center;
					image{
						width: 32px;
						height: 32px;
						margin-right: 10px;
						font-size: 16px;
					}
					text{
						font-size: 14px;
						padding-left: 10px;
					}
				}
				.right{
					width: 90px;
					height: 26px;
					line-height: 26px;
					text-align: center;
					color: #666;
					border-radius: 13px;
					background-color: #ffe83d;
					font-size: 14px;
				}
			}
			
			
			
		}
	
	}
	.contentmenu{
		border-radius: 5px;
		padding: 0 15px;
		
		margin-bottom: 10px;
	}
	.menu{
		background-color: #fff;
		padding: 0 15px;
		display: flex;
		justify-content: space-between;
		height: 50px;
		align-items: center;
		font-size: 16px;
		color: #333;
		image{
			width: 10px;
			height: 15px;
			}
		&:first-child{
			border-radius: 5px 5px 0 0;
		}
				&:last-child{
					border-radius:  0 0 5px 5px;
				}
	}
	.menulast{
		border-radius: 5px!important;
	}
}
</style>
