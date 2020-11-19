<template>
	<view>
		<scroll-view scroll-y class="page">
			
			<!-- <cu-custom bgColor="bg-gradual-white" :isBack="true"></cu-custom> -->
			<view class="index-tou">
				<view class="logo heads"><image src="/static/img/logo.png"></image></view>
				<view class="taidu heads"><image src="/static/img/yit.png"></image></view>
				<view class="xinxi"><image src="/static/img/xinxi.png"></image></view>
			</view>
			<view class="content">
				<view class="content-up">
					<view class="content-up-list" v-for="(item, index) in upList" :key="index" @click="toCourse(index)">
						<image :src="item.url"></image>
						<view class="title">
							{{item.title}}
						</view>
						<view class="tip">
							{{item.tips1}}
						</view>
						<view class="tip">
							{{item.tips2}}
						</view>
					</view>
					</view>
				<view class="content-down">
					<view class="content-down-list" v-for="(item, index) in downList" :key="index">
						<image class="image" :src="item.url"></image>
						<view class="title" @click="toInfoList(index)">
							<image :src="item.url1"></image>
							{{item.title}}
						</view>
						<view class="tip">
							<view class="tip-list" v-for="(items, indexs) in item.video" :key="indexs" @click="toDetails(index)">
								<image class="image" :src="items.url"></image>
								<image class="icon" src="/static/img/bf.png"></image>
							</view>
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
			upList: [
				{
					title: '体验课预约',
					tips1: '孩子们可以与他们最好的',
					tips2: '乐高Friends一起捕捉有趣回忆！',
					url: '/static/img/back1.png'
				},
				{
					title: '会员服务',
					tips1: '孩子们可以与他们最好的',
					tips2: '乐高Friends一起捕捉有趣回忆！',
					url: '/static/img/back2.png'
				}
			],
			downList:[
				{
					title: '品牌介绍',
					tips1: '孩子们可以与他们最好的',
					tips2: '乐高Friends一起捕捉有趣回忆！',
					url: '/static/img/back3.png',
					url1:'/static/img/a1.png',
					video:[
						{url:'/static/img/tu2.png'},
						{url:'/static/img/tu3.png'},
						{url:'/static/img/tu4.png'},
					]
				},
				{
					title: '师资力量',
					tips1: '孩子们可以与他们最好的',
					tips2: '乐高Friends一起捕捉有趣回忆！',
					url: '/static/img/back4.png',
					url1:'/static/img/a2.png',
					video:[
						{url:'/static/img/tu2.png'},
						{url:'/static/img/tu3.png'},
						{url:'/static/img/tu4.png'},
					]
				},
				{
					title: '精彩瞬间',
					tips1: '孩子们可以与他们最好的',
					tips2: '乐高Friends一起捕捉有趣回忆！',
					url: '/static/img/back5.png',
					url1:'/static/img/a3.png',
					video:[
						{url:'/static/img/tu2.png'},
						{url:'/static/img/tu3.png'},
						{url:'/static/img/tu4.png'},
					]
				}
			]
		};
	},
	onLoad(){
		this.load()
	},
	methods: {
		load(){
			// this.$api.getCakeList({id:'22'}).then(res=>{
			// 	console.log(res)
			// })
			uni.request({
				url: '/api/category.php',
				method:'POST',
				dataType: 'json',
					data: {id:'33',cat_id:15},
			}).then(res => {
				console.log(res)
			})
			
			// uni.request({
			// 	url: 'api/article_cat.php?id=22',
			// 	method: 'POST',
			// 	data: {},
			// 	success: res => {console.log(JSON.stringify(res))},
			// 	fail: () => {},
			// 	complete: () => {}
			// });
		},
		toDetails(index){
			uni.navigateTo({
				url:'/pages/home/detail?id=' + index
			})
		},
		toCourse(index){
			if(index == 0){
				uni.navigateTo({
					url:'/pages/couse/couse'
				})
			}else{
				uni.navigateTo({
					url:'/pages/index/index?PageCur=mine'
				})
			}
		},
		toInfoList(index){
			uni.navigateTo({
				url:'/pages/home/production?index='+index
			})
		}
	}
};
</script>

<style scoped lang="scss">
.page {
	height: 100vh;
	background-color: #f5f5f5;
	.index-tou {
		width: 100%;
		background-color: #fff;
		padding: 0 10px 0;
		height: 60px;
		display: flex;
		// border-top: 40px solid #f2f2f2;
		justify-content: space-between;
	}
	.heads{
		height: 100%;
	}
	image {
		width: 100%;
		height: 100%;
	}
	.logo {
		width: 100px;
	}
	.taidu {
		width: 220px;
	}
	.xinxi {
		width: 18px;
		display: flex;
		align-items: center;
		image {
			height: 14px;
		}
	}
	.content{
		padding: 20px 0px 50px;
		&-up{
			// background-color: #fff;
			padding: 0 15px;
			&-list{
				position: relative;
				z-index: 1;
				padding: 15px;
				color: #fff;
				margin-bottom: 20px;
				image{
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					z-index: -1;
					border-radius: 13px;
				}
				.title{
					font-size: 20px;
					margin-bottom: 10px;
				}
				.tip{
					font-size: 14px;
					line-height: 20px;
				}
				&:last-child{
					.title{
						padding-left: 140px;
					}
					.tip{
						padding-left: 140px;
					}
				}
			}
		}
		&-down{
			// background-color: #fff;
			padding: 0 15px 30px;
			&-list{
				position: relative;
				z-index: 1;
				padding: 15px;
				color: #fff;
				margin-bottom: 20px;
				display: flex;
				justify-content: flex-start;
				.image{
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					z-index: -1;
					border-radius: 13px;
				}
				.title{
					height: 75px;
					width: 30%;
					font-size: 20px;
					margin-bottom: 10px;
					position: relative;
					text-align: center;
					padding-top: 15px;
					image{
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						z-index: -1;
					}
				}
				.tip{
					width: 70%;
					padding: 0 15px;
					display: flex;
					overflow-x: auto;
					&-list{
						flex-shrink: 0;
						width: 115px;
						height: 75px;
						margin-right: 15px;
						position: relative;
						.image{
							width: 115px;
							height: 75px;
						}
						.icon{
							width: 20px;
							height: 20px;
							position: absolute;
							top: 50%;
							left: 50%;
							transform: translate(-50%,-50%);
						}
					}
				}
				
			}
		}
	}	
}
</style>
