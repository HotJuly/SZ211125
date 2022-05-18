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
		
		<scroll-view 
		v-if="indexData.kingKongModule"
		scroll-x="true" 
		class="navScroll" 
		enable-flex>
			<view 
			class="navItem" 
			:class="navIndex===-1?'active':''"
			@tap="changeNavIndex(-1)"
			>推荐</view>
			<view 
			class="navItem" 
			
			v-for="(item,index) in indexData.kingKongModule.kingKongList"
			
			:class="{
				active:navIndex===index
			}"
			:key="item.L1Id"
			@tap="changeNavIndex(index)">{{item.text}}</view>
		</scroll-view>
		
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
				title:'Hello43',
				navIndex:-1,
				indexData:{}
			}
		},
		// onLoad() {
		// 	console.log('onLoad')
		// },
		// created() {
		// 	console.log('created')
		// },
		mounted() {
			// uniapp同时兼容小程序和Vue的生命周期,习惯哪个用哪个
			// uniapp同时兼容小程序的绝大多数API
			// console.log('mounted')
			uni.request({
				url:"/api/getIndexData",
				success:(res)=>{
					// console.log('res',res)
					this.indexData = res.data;
				}
			})
		},
		methods:{
			changeNavIndex(index){
				this.navIndex = index;
			}
		}
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
		.navScroll
			// display flex
			white-space nowrap
			.navItem
				display inline-block
				width 140upx
				height 80upx
				text-align center
				line-height 80upx
				flex-shrink 0
				font-size 28upx
				&.active
					border-bottom 4upx solid red
</style>