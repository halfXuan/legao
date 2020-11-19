<template>
	<view>
		<scroll-view scroll-y class="page">
			<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">详情</block></cu-custom>
			<view class="videoBox">
			    <video id="myVideo" src="/static/video/ex.mp4" poster='/static/img/fmt.png' object-fit='contain' :initial-time='1' controls>
				</video>
			</view>
			<view class="videoMsg">
				<view class="up">
					<view class="title">
						<text>精品</text> 精美的乐高®幻影忍者船舶套装
					</view>
					<view class="count" >
						<image src="/static/img/yan.png" mode=""></image> 20
					</view>
					
				</view>
				<view class="info">
					喜爱拼搭经典乐高®幻影忍者船舶套装和玩乐有趣玩具的孩子，
					一定会喜欢上这款命运赏赐号 (71705)。这款精致的交互式儿童拼搭套装包含一艘幻影忍者乐高船舶
				</view>
			</view>
			<view class="cu-bar bg-white actionBottom">
				<view class="action">
					<image src="/static/img/dianzan.png" style="width: 18px;height: 18px;" mode="" @click="nums++"></image>
					<text style="padding: 0 10px;">{{nums}}</text>
					<image src="/static/img/xian.png" mode="" style="width: 120px; height: 3px;"></image>
				</view>
				<view class="action" @click="showModal">
					<image src="/static/img/fenx.png" style="width: 18px;height: 18px;" mode=""></image>
				</view>
			</view>
		</scroll-view>
		<view class="cu-modal bottom-modal" :class="modalName"  @click="cancel">
			<view class="cu-dialog" @tap.stop="">
				<!-- <view class="cu-bar bg-white">
					<view class="action text-green">确定</view>
					<view class="action text-blue" @tap="hideModal">取消</view>
				</view> -->
				<view class="padding-xl">
					<view class="title">
						分享至
					</view>
					<view class="list">
						<image src="/static/img/f1.png" @click="share" mode=""></image>
						<image src="/static/img/f2.png" @click="share" mode=""></image>
					</view>
				</view>
				<view class="cancelBtn" @click="cancel">
					取消
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name:'homeDetail',
	data() {
		return {
			nums: 19,
			modalName: ''
		};
	},
	methods: {
		showModal(e) {
			this.modalName = 'show'
		},
		cancel(){
			this.modalName = ''
		},
		share(){
			uni.shareWithSystem({
			  type:"text",
			  summary: '测试分享朋友圈文字',
			  href: 'https://www.baidu.com/',
			  // imageUrl:"../../static/logo.png",
			  success(){
			      console.log('分享成功');
			    // 分享完成，请注意此时不一定是成功分享
			  },
			  fail(){
			      console.log('分享失败');
			    // 分享失败  
			  }
			})
		}
	}
};
</script>

<style scoped lang="scss">
	/deep/.cu-dialog{
		border-radius: 20px 20px 0 0!important;
		background-color: #fff;
		.title{
			text-align: left;
		}
		.list{
			margin-top: 15px;
			text-align: left;
			image{
				width: 36px;
				height: 36px;
				margin-right: 15px;
			}
		}
		.cancelBtn{
			line-height: 46px;
			text-align: center;
			height: 46px;
			border-top: 1px solid #ccc;
		}
	}
.page {
	height: 100vh;
	background-color: #fff;
	position: relative;
	.actionBottom{
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 0 15px;
	}
	.videoBox{
		padding-top: 20px;
		video{
			width: 100%;
			height: 200px;
		}
	}
	.videoMsg{
		padding: 0 15px;
		.up{
			height: 60px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #cccccc;
			.title{
				height: 60px;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				font-size: 16px;
				text{
					background-color: #0071bc;
					height: 20px;
					width: 40px;
					margin-right: 10px;
					border-radius: 10px;
					line-height: 20px;
					text-align: center;
					font-size: 14px;
					color: #fff;
				}
			}
			.count{
				height: 60px;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				image{
					width: 15px;
					height: 10px;
					margin-right: 5px;
				}
			}
		}
		.info{
			padding-top: 20px;
			line-height: 30px;
			text-indent: 30px;
		}
	}
}
</style>
