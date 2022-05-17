<template>
	<view class= "indexContainer">
		<view class="header">
			<image class="logo" src="../../static/images/logo.png" mode=""></image>
			<view class="search">
				<i class="iconfont icon-sousuo"></i>
				<input 
				class="searchInput" 
				type="text" 
				value="" 
				placeholder-class="placeholder"
				placeholder="搜索商品"/>
			</view>
			<button class="username">七月</button>
		</view>
	</view>
	<!-- <div>
		<div>123</div>
		<div>123</div>
	</div> -->
	<!-- uniapp同时兼容小程序和HTML的标签,推荐使用小程序的 -->
</template>

<script>
	export default {
		data() {
			return {
				title:'Hello43'
			}
		},
		onLoad() {},
		methods:{}
	}
</script>

<style lang="stylus">
	// tab向后缩紧,shift+tab向前缩进
	.indexContainer
		.header
			display flex
			// margin-top 20upx
			padding-top 20upx
			.logo
				width 118upx
				height 40upx
				margin 0 20upx
				flex-shrink  0
			.search
				// width 100%
				position relative
				background-color  #ccc
				height 60upx
				flex-grow 1
				border-radius  10upx
				padding-left 60upx
				.iconfont
					position absolute
					left 20upx
					top 50%
					transform translateY(-50%)
				.searchInput
					height 100%
					// text-align center
					.placeholder
						text-align center
						font-size 24upx
						text-indent -40upx
			.username
				width 140upx
				height 60upx
				margin 0 20upx
				font-size 24upx
				flex-shrink  0
				color red
</style>
