<template>
	<view>
		<scroll-view scroll-y class="page">
			<cu-custom :isBack="true" bgColor="bg-gradual-blue"><block slot="content">引导师评语</block></cu-custom>
			<view class="form">
				<u-input v-model="value" type="text" :border="border" placeholder="标题" />
				<u-input v-model="teacher" :type="`select`" :border="border" @click="show = true" />
				<u-action-sheet :list="actionSheetList" v-model="show" @click="actionSheetCallback"></u-action-sheet>
				<u-input v-model="value" style="height: 95px;padding: 10px;" type="textarea" :border="border" placeholder="给老师留言" />
				
				<view class="submit">
					提交
				</view>
			</view>
			<view class="list">
				<view class="lists" v-for="(item,index) in list" :key='index'>
					<view class="student">
						<view class="info">
							<view class="infos">
								<image :src="item.student.img" mode=""></image> {{item.student.name}}
							</view>
							<view class="date">
								{{item.student.date}}
							</view>
						</view>
						<view class="text">
							{{item.student.content}}
						</view>
					</view>
					<view class="teacher">
						<view class="info">
							<view class="infos">
								<image :src="item.teacher.img" mode=""></image> {{item.teacher.name}}
							</view>
							<view class="date">
								{{item.teacher.date}}
							</view>
						</view>
						<view class="text">
							{{item.teacher.content}}
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
				show: false,
				value:'',
				teacher:'',
				border: true,
				actionSheetList:[
					{
						text: '迪迦老师'
					},
					{
						text: '奥特曼'
					},
					{
						text: '奥特曼'
					},
				],
				list:[
					{
						student:{
							img:'/static/img/john.png',name:'John',date:'2020-09-08',
							content:'你很繁忙，感觉自己总是在奔波。所以有空时，你就想沉浸于一项有趣且富有创意的挑战，为自己充电。'
						},
						teacher:{
							img:'/static/img/john2.png',name:'Mark老师',date:'2020-09-10',
							content:'玩乐这款手脑并用式手工艺项目，可以重现这座总统执行官邸的新古典主义圆柱及连接东西两翼和周围花园和喷泉的柱廊的细节。'
						}
					},
					{
						student:{
							img:'/static/img/john3.png',name:'John',date:'2020-09-08',
							content:'你很繁忙，感觉自己总是在奔波。所以有空时，你就想沉浸于一项有趣且富有创意的挑战，为自己充电。'
						},
						teacher:{
							img:'/static/img/john4.png',name:'Mark老师',date:'2020-09-10',
							content:'玩乐这款手脑并用式手工艺项目，可以重现这座总统执行官邸的新古典主义圆柱及连接东西两翼和周围花园和喷泉的柱廊的细节。'
						}
					},
				]
			};
		},
		methods:{
			actionSheetCallback(e){
				this.teacher = this.actionSheetList[e].text
			}
		}
	}
</script>

<style lang="scss">
	.page{
		height: 100vh;
		background-color: #fff;
		padding-bottom: 30px;
		.form{
			padding: 20px;
			.u-input{
				margin-bottom: 15px;
			}
			/deep/input{
				height: 40px;
				line-height: 40px;
			}
			.u-input-border{
				border-color: #eee;
				
			}
			.submit{
				width: 300px;
				height: 35px;
				line-height: 35px;
				border-radius: 35upx;
				text-align: center;
				background-color: #fce700;
				margin: 40px auto 0;
			}
		}
		.list{
			padding: 15px;
			.lists{
				padding: 25px 5px;
				border-bottom: 1upx solid #ccc;
				.student,.teacher{
					.info{
						height: 30px;
						display: flex;
						align-items: center;
						justify-content: space-between;
						.infos{
							height: 30px;
							display: flex;
							align-items: center;
							justify-content: flex-start;
							color: #333;
							image{
								height: 30px;
								width: 30px;
								border-radius: 50%;
								margin-right: 10px;
							}
						}
						.date{
							color: #999;
						}
					}
					.text{
						padding-top: 10px;
						padding-left: 10px;
						line-height: 20px;
						color: #666;
						font-size: 14px;
					}
				}
				.teacher{
					margin-top: 25px;
					background-color: #F5F5F5;
					border-radius: 6px;
					padding: 15px 10px;
				}
			}
		}
	}
</style>
