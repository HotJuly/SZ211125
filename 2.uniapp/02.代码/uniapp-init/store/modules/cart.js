import Vue from 'vue';
const state = {
	cartList: [{
			"selected": true,
			"count": 3,
			"promId": 0,
			"showPoints": false,
			"itemTagList": [{
				"itemId": 1535004,
				"tagId": 128111157,
				"freshmanExclusive": false,
				"name": "暖冬特惠",
				"subType": 204,
				"forbidJump": false,
				"type": 2
			}],
			"rank": 1,
			"id": 1535004,
			"sellVolume": 4001,
			"primaryPicUrl": "https://yanxuan-item.nosdn.127.net/f79906f1b1fe86420ea40473de66ec0e.png",
			"soldOut": false,
			"sortFlag": 0,
			"commentCount": 0,
			"onSaleTime": 1538101761748,
			"picMode": 1,
			"commentWithPicCount": 0,
			"underShelf": false,
			"status": 2,
			"couponConflict": true,
			"forbiddenBuy": false,
			"promotionDesc": "暖冬特惠",
			"limitedFlag": 204,
			"pieceNum": 0,
			"itemSizeTableDetailFlag": false,
			"forbidExclusiveCal": false,
			"rewardShareFlag": false,
			"updateTime": 1575893634989,
			"showCommentEntrance": true,
			"pieceUnitDesc": "件",
			"specialPromTag": "",
			"counterPrice": 299,
			"categoryL2Id": 0,
			"retailPrice": 209,
			"primarySkuPreSellPrice": 0,
			"preLimitFlag": 0,
			"itemPromValid": true,
			"promTag": "暖冬特惠",
			"source": 0,
			"points": 0,
			"primarySkuPreSellStatus": 0,
			"extraServiceFlag": 0,
			"flashPageLink": "",
			"autoOnsaleTimeLeft": 0,
			"innerData": {},
			"saleCenterSkuId": 0,
			"pointsStatus": 0,
			"extraPrice": "",
			"colorNum": 0,
			"showTime": 0,
			"autoOnsaleTime": 0,
			"preemptionStatus": 1,
			"isPreemption": 0,
			"zcSearchFlag": false,
			"name": "男式色拉姆内衣套装2.0",
			"appExclusiveFlag": false,
			"itemType": 1,
			"listPicUrl": "https://yanxuan-item.nosdn.127.net/c2eeb1b872af1b8efc179a7515aacdaa.png",
			"pointsPrice": 0,
			"simpleDesc": "色拉姆发热面料，加厚升级",
			"seoTitle": "",
			"newItemFlag": false,
			"buttonType": 0,
			"primarySkuId": 1636062,
			"displaySkuId": 1636056,
			"productPlace": "",
			"itemSizeTableFlag": false
		},
		{
			"selected": false,
			"count": 6,
			"promId": 0,
			"showPoints": false,
			"itemTagList": [{
				"itemId": 1536001,
				"tagId": 128111157,
				"freshmanExclusive": false,
				"name": "暖冬特惠",
				"subType": 204,
				"forbidJump": false,
				"type": 2
			}],
			"rank": 1,
			"id": 1536001,
			"sellVolume": 3634,
			"primaryPicUrl": "https://yanxuan-item.nosdn.127.net/32b8b2d07b1c4327593a4a70993eeac2.png",
			"soldOut": false,
			"sortFlag": 0,
			"commentCount": 0,
			"onSaleTime": 1538101896296,
			"picMode": 1,
			"commentWithPicCount": 0,
			"underShelf": false,
			"status": 2,
			"couponConflict": true,
			"forbiddenBuy": false,
			"promotionDesc": "暖冬特惠",
			"limitedFlag": 204,
			"pieceNum": 0,
			"itemSizeTableDetailFlag": false,
			"forbidExclusiveCal": false,
			"rewardShareFlag": false,
			"updateTime": 1575894115275,
			"showCommentEntrance": true,
			"pieceUnitDesc": "件",
			"specialPromTag": "",
			"counterPrice": 299,
			"categoryL2Id": 0,
			"retailPrice": 209,
			"primarySkuPreSellPrice": 0,
			"preLimitFlag": 0,
			"itemPromValid": true,
			"promTag": "暖冬特惠",
			"source": 0,
			"points": 0,
			"primarySkuPreSellStatus": 0,
			"extraServiceFlag": 0,
			"flashPageLink": "",
			"autoOnsaleTimeLeft": 0,
			"innerData": {},
			"saleCenterSkuId": 0,
			"pointsStatus": 0,
			"extraPrice": "",
			"colorNum": 0,
			"showTime": 0,
			"autoOnsaleTime": 0,
			"preemptionStatus": 1,
			"isPreemption": 0,
			"zcSearchFlag": false,
			"name": "女式色拉姆内衣套装2.0",
			"appExclusiveFlag": false,
			"itemType": 1,
			"listPicUrl": "https://yanxuan-item.nosdn.127.net/02b61fb5700aed6761b7524d98ed0837.png",
			"pointsPrice": 0,
			"simpleDesc": "色拉姆发热面料，加厚升级",
			"seoTitle": "",
			"newItemFlag": false,
			"buttonType": 0,
			"primarySkuId": 1634105,
			"displaySkuId": 1634104,
			"productPlace": "",
			"itemSizeTableFlag": false
		}
	]

}
const mutations = {
	ADD_SHOPITEM_MUTATION(state, good) {
		// console.log('ADD_SHOPITEM_MUTATION')
		/*
			需求:
				如果该商品已经存在购物车中,就将对应商品数量+1
				如果该商品没有存在购物车中,就将该商品推入购物车中
				
			拆解:
				1.如何知道购物车中是否存在该商品
				2.根据不同的情况实现不同的交互效果
		
		*/

		const shopItem = state.cartList.find((shopItem) => {
			return shopItem.id === good.id;
		})

		if (shopItem) {
			shopItem.count += 1;
			// console.log('+1',shopItem)
		} else {
			/*
			响应式:当某个属性值发生变化的时候,页面会展示出最新的数据
			问题1:如何添加响应式属性?
				1.vm.$set
				2.Vue.set
				3.Vue.observable
				
			问题2:如何快速识别一个属性是否是响应式属性?
				打印具有该属性的对象,
					如果该属性直接显示数值,就说明该属性肯定不是响应式属性
					如果该属性显示的是(...),就说明该属性是响应式属性
					
			问题3:响应式属性的创建时机(数据劫持的时机)?
				1.在组件初始化的时候,会将data函数返回的字面量对象变为响应式对象
				2.将一个对象赋值给响应式属性的时候,该对象内部所有的属性都会经过数据劫持,变为响应式属性
				
		   
		   */
			// good.count=1;
			Vue.set(good, 'count', 1);
			Vue.set(good, 'selected', true);
			state.cartList.push(good)
			// console.log('=1',good)
		}
	},
	CHANGE_SHOPITEM_COUNT_MUTATION(state, {
		type,
		index
	}) {
		// console.log('CHANGE_SHOPITEM_COUNT_MUTATION',type,index)
		const cartList = state.cartList;
		if (type) {
			cartList[index].count += 1;
		} else {
			const shopItem = cartList[index];
			if (shopItem.count === 1) {
				// 如果数量为1,在减少就是删除该商品
				// cartList[index]=null;
				// 数组的下标不具备响应式效果,所以只能使用Vue重写过的7种方法来操作数组,才具有响应式效果
				// 例如:push,pop,shift,unshift,splice,reverse,sort
				cartList.splice(index, 1);
			} else {
				shopItem.count -= 1;
			}
		}
	},
	CHANGE_SHOPITEM_SELECTED_MUTATION(state, index) {
		const shopItem = state.cartList[index];
		shopItem.selected = !shopItem.selected
	},
	CHANGE_SELECTED_ALL_MUTATION(state,selected){
		const result = state.cartList.forEach((shopItem)=>{
			shopItem.selected = selected
			return 123;
		})
		console.log('result',result)
	}
}

const actions = {}

const getters = {
	isSelectedAll(state) {
		/*
			1.返回值:布尔值
			2.如果购物车中所有商品都处于选中状态,那么全选按钮就是选中状态
			3.如果购物车中有一个商品是未选中状态,那么全选按钮就是未选中状态
			4.如果购物车中没有商品,那么全选按钮就是未选中状态
		
		*/
		if (!state.cartList.length) return false;
		return state.cartList.every((shopItem) => {
			return shopItem.selected
		})
	}
}





export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
