<template>
	<view>
		<scroll-view scroll-y class="page">
			<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">{{title}}</block></cu-custom>
			<!-- <view class="videoBox">
			    <video id="myVideo" src="/static/video/ex.mp4" poster='/static/img/fmt.png' object-fit='contain' :initial-time='1' controls>
				</video>
			</view> -->
			<view class="videoMsg">
				<view class="up">
					<view class="title">
						<text>精品</text> {{title}}
					</view>
					<view class="count" >
						<image src="/static/img/yan.png" mode=""></image> 20
					</view>
					
				</view>
				<view class="info" v-if="title=='品牌介绍'||title=='精彩瞬间'">
					{{`凭借特殊的入门积木 (Starter Brick)，
					即便是首次接触乐高积木的拼搭者也能体验到独立拼搭的乐趣。
					简易的拼搭指南可以帮助孩子了解拼搭过程，增强他们的自信心，
					使他们对完成更具挑战性的乐高项目充满信心。`}}
					<image src="/static/img/pin.png" mode=""></image>
					{{`借助钢铁侠、托尔、浩克、惊奇队长和洛基小人仔，
					以及复仇者联盟大厦、昆式战斗机和洛基的滑翔机，
					孩子们可以重现精彩的漫威电影场景，
					创造属于他们自己的超级英雄故事。`}}
				</view>
				<view class="info" v-else>
					<view class="">
						张敬涛:中央电化教育馆党委委员，研究部研究员，原《中国电化教育》杂志社社长
					</view>
					<view class="">
						黄佩:北京邮电大学数字媒体与设计艺术学院教授、传播学博士，网络系统与网络文化北京市重点实验室副主任
					</view>
					<view class="">
						潘小敏:北京理工大学信息与电子学院教授
					</view>
					<view class="">
						邸泽民:北京市十一学校一分校科学技术主任，STEM课程研发工作室负责人，中国教科院首批STEM教育种子教师，
					“2018国培计划”专题课程主持专家
					</view>
				</view>
			</view>
			<view class="cu-bar bg-white">
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
			modalName: '',
			title:'',
		};
	},
	onLoad(val){
		if(val.index == 0){
			this.title = '品牌介绍'
		}else if(val.index == 1){
			this.title = '师资力量'
		}else if(val.index == 2){
			this.title = '精彩瞬间'
		}
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
			image{
				display: block;
				width: 100%;
				height: 200px;
				margin: 15px 0;
			}
		}
	}
}
</style>
