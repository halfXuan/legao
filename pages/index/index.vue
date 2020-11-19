<template>
	<view class="page">
		<cu-custom bgColor="bg-gradual-white"><block slot="content"></block></cu-custom>
		<view class="main">
			<basics v-if="PageCur=='basics'"></basics>
			<components v-if="PageCur=='component'"></components>
			<plugin v-if="PageCur=='plugin'"></plugin>
			<mine v-if="PageCur=='mine'"></mine>
			
		</view>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="basics">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/basics' + [PageCur=='basics'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='basics'?'text-green':'text-gray'">主页</view>
			</view>
			<view class="action" @click="NavChange" data-cur="component">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/component' + [PageCur == 'component'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='component'?'text-green':'text-gray'">活动</view>
			</view>
			<view class="action" @click="NavChange" data-cur="plugin">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/img/car' + [PageCur == 'plugin'?'-active':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='plugin'?'text-green':'text-gray'">购物</view>
			</view>
			<view class="action" @click="NavChange" data-cur="mine">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/img/mine' + [PageCur == 'mine'?'-active':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='mine'?'text-green':'text-gray'">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'basics'
			}
		},
		
		onReady(){
			    // plus.navigator.setStatusBarStyle("dark"); //只支持dark和light
			},
		onLoad(option) {
			this.PageCur = option.PageCur ? option.PageCur : 'basics'
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style scoped lang="scss">
	.page{
		height: 100%;
		overflow: hidden;
	}
	/deep/.cu-custom{
		height: 30px!important;
		 // height: var(--status-bar-height);
		.bg-gradual-white{
			height: 30px!important;
		}
	}
	.main{
		height: calc(100%);
		position: fixed;
		left: 0;
		right: 0;
		overflow-y: auto;
	}
</style>
