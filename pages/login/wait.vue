<template>
	<view>
		<scroll-view scroll-y class="page">
			<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="content">敬请期待</block></cu-custom>
			<u-empty text="敬请期待" mode="permission"></u-empty>
		</scroll-view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.page{
	height: 100vh;
	background-color: #fff;
	}
</style>
