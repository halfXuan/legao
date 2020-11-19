<template name="components">
	<view>
		<scroll-view scroll-y class="page">
			<!-- <cu-custom bgImage="https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg">
				<block slot="content">
					<image src="/static/cjkz.png" mode="aspectFill" style="width: 240upx;height: 60upx;"></image>
				</block>
			</cu-custom> -->
			<!-- <view class="cu-card">
				<view class="cu-item bg-img shadow-blur" :style="[{backgroundImage:'url('+item.img+')'}]" @tap="toChild" :data-url="item.url"
				 v-for="(item,index) in list" :key="index">
					<view class="cardTitle">
						{{item.title}}
					</view>
				</view>
			</view> -->
			<!-- <u-empty text="暂无数据" mode="car"></u-empty> -->
			<!-- <view class="cu-tabbar-height"></view> -->
			<view class="title">
				广场
			</view>
			<view class="list">
				<view class="list-list">
					<image src="/static/img/goods1.png" mode=""></image>
					乐高1
				</view>
				<view class="list-list">
					<image src="/static/img/goods2.png" mode=""></image>
					乐高2
				</view>
				<view class="list-list">
					<image src="/static/img/goods3.png" mode=""></image>
					乐高3
				</view>
				<view class="list-list">
					<image src="/static/img/goods4.png" mode=""></image>
					乐高4
				</view>
			</view>
			<view class="goods">
				<view class="goods_title">
					乐高
				</view>
				<view class="goods_list" v-for="(item,index) in goods" :key='index'>
					<view class="top">
						<image :src="item.url" mode=""></image>
						<view class="info">
							<view class="info-title">
								{{item.title}}
							</view>
							<view class="tip">
								<text v-for="(items,indexs) in item.tips" :key='indexs'>{{items}}</text>
							</view>
							<view class="card">
								火热报名中
							</view>
						</view>
					</view>
					<view class="down">
						<view class="left">
							<image :src="item.teacherUrl" mode=""></image>
							<view class="left-info">
								<view class="name">
									{{item.name}}
								</view>
								<view class="date">
									{{item.date}}
								</view>
							</view>
						</view>
						<view class="buy">
							购买
						</view>
					</view>
				</view>
			</view>
			<view class="goods">
				<view class="goods_title">
					乐高2
				</view>
				<view class="goods_list" v-for="(item,index) in goods" :key='index'>
					<view class="top">
						<image :src="item.url" mode=""></image>
						<view class="info">
							<view class="info-title">
								{{item.title}}
							</view>
							<view class="tip">
								<text v-for="(items,indexs) in item.tips" :key='indexs'>{{items}}</text>
							</view>
							<view class="card">
								火热报名中
							</view>
						</view>
					</view>
					<view class="down">
						<view class="left">
							<image :src="item.teacherUrl" mode=""></image>
							<view class="left-info">
								<view class="name">
									{{item.name}}
								</view>
								<view class="date">
									{{item.date}}
								</view>
							</view>
						</view>
						<view class="buy">
							购买
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "components",
		data() {
			return {
				goods:[
					{
						url:'/static/img/banner1.jpg',
						title:'【家长学院】让孩子摆脱手机诱惑-第二讲6个实用的',
						tips:['辅导作业','独立性','仅次卡兑换'],
						teacherUrl:'/static/img/john.png',
						name:'朝阳',
						date:'10月31日(星期六) 20:00 - 20:40'
					},
					{
						url:'/static/img/banner2.jpg',
						title:'【毕业生公开课】买房还是租房',
						tips:['初中','独立性','外教'],
						teacherUrl:'/static/img/john.png',
						name:'朝阳',
						date:'10月31日(星期六) 20:00 - 20:40'
					},
				],
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				list: [{
						title: '索引列表',
						img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
						url: '../plugin/indexes'
					},
					{
						title: '微动画',
						img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
						url: '../plugin/animation'
					},
					{
						title: '全屏抽屉',
						img: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
						url: '../plugin/drawer'
					},
					{
						title: '垂直导航',
						img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
						url: '../plugin/verticalnav'
					}
				]
			};
		},
		methods: {
			toChild(e) {
				uni.navigateTo({
					url: e.currentTarget.dataset.url
				})
			},
		},
	}
</script>

<style lang="scss">
	.page {
		height: 100vh;
		background-color: #fff;
		padding-bottom: 90px;
	}
	.title{
		font-size: 16px;
		padding-top: 15px;
		line-height: 40px;
		padding-left: 20px;
	}
	.list{
		display: flex;
		justify-content: space-between;
		padding: 15px;
		border-bottom: 15px solid #eee;
		&-list{
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
			image{
				width: 60px;
				height: 60px;
				margin-bottom: 15px;
			}
		}
	}
	.goods{
		&_title{
			height: 44px;
			line-height: 44px;
			font-size: 16px;
			padding: 0 15px;
			border-bottom: 1px solid #eee;
		}
		&_list{
			padding: 0 15px;
			border-bottom: 10px solid #eee;
			.top{
				display: flex;
				justify-content: flex-start;
				padding: 15px 0;
				image{
					width: 100px;
					height: 100px;
					margin-right: 10px;
				}
				.info{
					width: 240px;
					&-title{
						line-height: 20px;
						height: 40px;
						overflow: hidden;
					}
					.tip{
						display: flex;
						height: 20px;
						align-items: center;
						margin: 10px 0;
						text{
							font-size: 12px;
							color: #999;
							border: 1px solid #eee;
							height: 18px;
							padding: 0 3px;
							margin-right: 5px;
							border-radius: 8px;
						}
					}
					.card{
						color: #ccc;font-size: 12px;
					}
				}
			}
			.down{
				border-top: 1px solid #eee;
				display: flex;
				justify-content: space-between;
				padding: 5px 15px;
				align-items: center;
				.left{
					display: flex;
					image{
						width: 40px;
						height: 40px;
						margin-right: 15px;
					}
					.name,.date{
						line-height: 20px;
						color: #999;
					}
				}
				.buy{
					width: 50px;
					height: 30px;
					line-height: 30px;
					text-align: center;
					border-radius: 15px;
					border: 1px solid #eee;
				}
			}
		}
	}
	.cardTitle {
		color: #fff;
		padding: 90upx 60upx;
		font-size: 40upx;
		font-weight: 300;
		transform: skew(-10deg, 0deg);
		position: relative;
		text-shadow: 0px 0px 6upx rgba(0, 0, 0, 0.3)
	}

	.cardTitle::before {
		content: "";
		position: absolute;
		width: 60upx;
		height: 6upx;
		border-radius: 20upx;
		background-color: #fff;
		display: block;
		top: 60upx;
		left: 50upx;
		transform: skew(10deg, 0deg);
	}

	.cardTitle::after {
		content: "";
		position: absolute;
		width: 140upx;
		border-radius: 6upx;
		height: 24upx;
		background-color: #fff;
		display: block;
		bottom: 76upx;
		left: 90upx;
		transform: skew(10deg, 0deg);
		opacity: 0.1;
	}
</style>
