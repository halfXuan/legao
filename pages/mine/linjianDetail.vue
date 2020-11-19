<template>
	<view>
		<scroll-view scroll-y class="page">
			<!-- <cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="content">零件表详情</block></cu-custom> -->
			<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="content">零件表详情</block></cu-custom>
			<view class="box">
				<view class="title">乐高集团宣布支持种族平等的新伙伴关系</view>
				<view class="date">2020-10-05</view>
				<view class="ling-content">2020年6月，乐高集团承诺与黑人社区站在一起反对种族主义和不平等，我们将向致力于支持黑人儿童并教育所有儿童种族不平等的组织捐款。</view>
				<view class="ling-content">
					SEO是一项为期八年的免费学术计划，旨在为来自服务水平低下和/或代表性不足的社区的有动机的年轻人提供服务。超过90％的SEO学生从大学毕业，并且作为SEO网络的一部分，获得了实习和职业培训方面的帮助。
					<image src="/static/img/ling-xq.png" alt="" />
				</view>
				<view class="ling-content">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一项支持成年人培养儿童健康种族学习的全国性计划，重点是学前班到初中。
					EmbraceRace为希望为孩子生活中的种族思维和包容性行为建模并提供支持的父母，教育工作者和其他成年照护者提供资源和社区。
					产品包括儿童书籍资源，网络研讨会，行动指南，博客和个人故事，课程等。
				</view>
				<view class="ling-content">
					25年以来，这个社会正义组织一直授权年轻人成为社会变革的推动者。该赠款将扩大用于解决粮食不安全的计划，并为在哈林区维护绿地（6,000平方英尺的社区花园，农夫市场和公共广场）的高中学生和校友提供带薪实习。
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.page {
	height: 100vh;
	background-color: #fff;
	.box {
		padding: 20px 15px 15px;
		.title {
			text-align: center;
			line-height: 20px;
			font-size: 16px;
			color: #666;
			margin-bottom: 15px;
		}
		.date {
			text-align: center;
			line-height: 20px;
			font-size: 14px;
			color: #666;
			margin-bottom: 15px;
		}
		.ling-content {
			text-indent: 30px;
			line-height: 26px;
			color: #666;
			image {
				width: 100%;
				margin: 10px 0;
			}
		}
	}
}
</style>
