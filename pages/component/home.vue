<template name="components">
	<view>
		<scroll-view scroll-y class="page">
			<view class="list">
				<view class="listActice" v-for="(item,index) in list" :key='index' @click="toNext">
					<image :src="item.url" mode=""></image>
					<view class="title">
						{{item.title}}
					</view>
				</view>
			</view>
			<!-- <image src="/static/componentBg.png" mode="widthFix" class="response"></image> -->
			<!-- <view class="nav-list">
				<navigator hover-class='none' :url="'/pages/component/' + item.name" class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.name}}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</navigator>
			</view> -->
			<!-- <u-empty text="暂无数据" mode="car"></u-empty> -->
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{ url: '/static/img/act2.png', title: '价值288元英语视听礼包' },
				{ url: '/static/img/act1.png', title: '50部Hightlights动画，双语字幕外教原声' },
				{ url: '/static/img/act3.png', title: '系统帮助英语启蒙期孩子掌握字母发音规律' }
			],
			elements: [
				{
					title: '操作条',
					name: 'bar',
					color: 'purple',
					cuIcon: 'vipcard'
				},
				{
					title: '导航栏 ',
					name: 'nav',
					color: 'mauve',
					cuIcon: 'formfill'
				},
				{
					title: '列表',
					name: 'list',
					color: 'pink',
					cuIcon: 'list'
				},
				{
					title: '卡片',
					name: 'card',
					color: 'brown',
					cuIcon: 'newsfill'
				},
				{
					title: '表单',
					name: 'form',
					color: 'red',
					cuIcon: 'formfill'
				},
				{
					title: '时间轴',
					name: 'timeline',
					color: 'orange',
					cuIcon: 'timefill'
				},
				{
					title: '聊天',
					name: 'chat',
					color: 'green',
					cuIcon: 'messagefill'
				},
				{
					title: '轮播',
					name: 'swiper',
					color: 'olive',
					cuIcon: 'album'
				},
				{
					title: '模态框',
					name: 'modal',
					color: 'grey',
					cuIcon: 'squarecheckfill'
				},
				{
					title: '步骤条',
					name: 'steps',
					color: 'cyan',
					cuIcon: 'roundcheckfill'
				}
			]
		};
	},
	methods:{
		toNext(){
			uni.navigateTo({
				url:'/pages/home/production?index='+0
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	height: 100vh;
	background-color: #f5f5f5;
	padding-bottom:15px;
}
.list{
		padding: 15px;width: 100%;
		.listActice{
			background-color: #fff;
			border-radius: 8px;
			margin-bottom: 15px;
			image{
				width: 100%;
				height: 130px;
			}
			.title{
				height: 50px;
				line-height: 50px;
				padding: 0 15px;
				font-size: 16px;
				overflow-y: hidden;
			}
		}
	}
</style>
