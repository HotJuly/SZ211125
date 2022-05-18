<template>
	<view class="categoryContainer">
		<view class="header">
			<view class="search_div">
				搜索商品
			</view>
		</view>
		<view class="content">
			<view class="leftContainer">
				<scroll-view scroll-y="true" class="navScroll">
					<view 
					class="navItem"
					:class="currentIndex===index?'active':''"
					@click="changeCurrentIndex(index)"
					v-for="(name,index) in categoryNames"
					:key="name"
					>{{name}}</view>
				</scroll-view>
			</view>
			<view class="rightContainer">
				<scroll-view scroll-y="true" class="contentScroll">
					<view class="scrollHeader">
						<image class="headerImg" :src="cateObj.imgUrl" mode=""></image>
					</view>
					<view 
					class="contentItem"
					v-for="item in cateObj.subCateList"
					:key="item.id"
					>
						<image :src="item.wapBannerUrl" mode=""></image>
						<text>{{item.name}}</text>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				categoryDatas:[],
				currentIndex:0
			};
		},
		async created(){
			const result = await this.$myAxios('/getCategoryDatas');
			// console.log('result',result)
			this.categoryDatas = result;
		},
		methods:{
			changeCurrentIndex(index){
				this.currentIndex = index;
			}
		},
		computed:{
			/*
				问题:computed和watch的了解
				解答:
					1.相同点:
						都可以监视到某个响应式属性的变化
						如果响应式属性发生变化,就会重新执行函数体
						
					2.不同点:
						使用场景不同
							computed
								我需要一个数据,但是我头上没有,可是我可以通过现有数据计算得到
								例如:通过购物车中所有的商品信息,计算得到总价或者总数等数据
								
							watch
								当一个数据发生变化的时候,我需要做一些事情
								例如:搜索页面再次搜索商品,当前搜索页面不会重新挂载,导致搜索内容与展示内容不一致
									此时需要监视路由信息中的关键字,当关键字发生变化的时候,重新发送请求
									
							个人理解:computed更注重于结果,watch更注重于过程
							
						computed具有缓存功能
							computed在第一次使用的时候,会根据现有的数据计算出结果来使用
								如果监视的响应式属性没有发生变化,后续使用到该computed会直接复用上一次计算的结果
									不需要再次执行回调函数,重新进行计算
			*/
		   categoryNames(){
			   return this.categoryDatas.map((item)=>{
				   return item.name
			   })
		   },
		   cateObj(){
			   return this.categoryDatas[this.currentIndex]
		   }
		}
	}
</script>

<style lang="stylus">
.categoryContainer
	height 100%
	.header
		height 60upx
		padding 10upx 0
		border-bottom 2upx solid #eee
		.search_div
			height 60upx
			background #eee
			width 704upx
			margin 0 auto
			border-radius 10upx
			line-height 60upx
			text-align center
			font-size 28upx
	.content
		display flex
		height calc(100vh - 82upx)
		background #eee
		.leftContainer
			width 20%
			height 100%
			font-size 26upx
			text-align center
			border-right 1upx solid #eee
			//border-box 称为怪异盒模型 , 又称为IE盒模型,内缩盒模型,布局占位宽度 width(content+padding+border)+margin
			//content-box 标准盒模型,布局占位宽度 width+padding+border+margin
			box-sizing border-box  
			.navScroll
				height 100%
				background-color white
				.navItem
					position relative
					height 80upx
					line-height 80upx
					&.active::after
						position absolute
						content ''
						top 10upx
						left 4upx
						width 2upx
						height 60upx
						background-color #BB2C08
		.rightContainer
			width 80%
			height 100%
			background-color white
			.contentScroll
				width 100%
				height 100%
				.scrollHeader
					width 100%
					.headerImg
						display block
						width 520upx
						height 190upx
						margin 20upx auto
				.contentItem
					display inline-flex
					flex-direction column
					align-items center
					width 33.333% 
					image
						width 160upx
						height 144upx
					text
						font-size 26upx
</style>
