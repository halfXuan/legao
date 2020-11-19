<template>
	<view>
		<scroll-view scroll-y class="page">
				<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="content">学习成就</block></cu-custom>
			<view class="main">
				<view class="list" v-for="i in 18" :key='i' @click="toNext(i)">
					{{`3-${i}这里标题`}}
				</view>
			</view>
		</scroll-view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			toNext(i){
				uni.navigateTo({
					url:'/pages/mine/studyRecord'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.page {
	height: 100vh;
	background-color: #fff;
	.main{
		padding: 0 10px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.list{
			width: 47%;
			height: 30px;
			line-height: 30px;
			margin-top: 30px;
			background-color: #ffcf00;
			border-radius: 15px;
			text-align: center;
		}
	}
	}
</style>
