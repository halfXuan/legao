<template>
	<view class="page">
		<cu-custom bgColor="bg-gradual-white" :isBack="true"></cu-custom>
		<view class="main">
			<view class="actions">
				<view :class="type == 1 ? 'btn actived' : 'btn'">找回密码</view>
			</view>
			<input type="text" class="input" v-model="phone" placeholder-style="color:#ccc" placeholder="请输入手机号" />
			<view class="code" v-if="type==1">
				<input type="text" class="input" v-model="phone" placeholder-style="color:#ccc" placeholder="请输入验证码" />
				<view class="codeBtn">
					获取验证码
				</view>
			</view>
			<input  v-if="type==2" type="text" class="input" v-model="password" placeholder-style="color:#ccc" placeholder="请输入密码" />
			<view class="login">
				确定
			</view>
			<view class="bottomTip">
				如果您是邮箱帐号未绑定手机，请致电4006-111111
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			type: 1,
			phone: '',
			code: '',
			password: '',
			read:false
		};
	},
	methods: {
		toIndex(index) {
			this.type = index
			this.phone = ''
			this.code = ''
			this.password = ''
		},
		toPwd() {
		   uni.navigateTo({
		   	url:"/pages/login/findPwd"
		   })
		}
	}
};
</script>

<style lang="scss" scoped>
	
	input::-webkit-input-placeholder { /* WebKit browsers */ 
	
	
	color: #ddd; 
	font-size:14px;
	}
.page {
	height: 100vh;
	background-color: #fff;
	.main {
		padding: 40px 30px;
		height: calc(100% - 45px);
	}
	.actions {
		margin-bottom: 42px;
		display: flex;
		justify-content: flex-start;
		height: 26px;
		line-height: 26px;
		font-size: 18px;
		align-items: center;
		.line {
			height: 18px;
			width: 1px;
			background-color: #aaa;
			margin: 0 10px;
		}
		.btn {
			color: #999;
		}
		.actived {
			color: #666;
		}
	}
	.input{
		width: 100%;
		height: 44px;
		line-height: 44px;
		border-bottom: 1upx solid #ccc;
		color: #666;
		text-indent: 20px;
	}
	.code{
		position: relative;
		.codeBtn{
			position: absolute;
			right: 15px;
			height:20px;
			line-height: 20px;
			font-size: 14px;
			color: #666;
			bottom: 11px;
		}
	}
	.login{
		height: 38px;
		line-height: 38px;
		width: 90%;
		margin: 50px auto 0;
		border-radius: 19px;
		text-align: center;
		color: #a5a5a5;
		background-color: #fcf5a7;
	}
	.forgot{
		margin-top: 10px;
		line-height: 20px;
		text-align: center;
		font-size: 14px;
		color: #333;
	}
	.tip{
		margin-top: 40px;
		padding-left: 10px;
	}
}
.bottomTip{
	color: #999;
	text-align: center;
	line-height: 20px;
	height: 20px;
	position: fixed;
	bottom: 30px;
	left: 0;
	right: 0;
}
</style>
