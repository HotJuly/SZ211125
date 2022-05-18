import {SET_INDEXDATA_MUTATION} from '../mutation-types.js';
const state = {
	initData:"我是Vuex的初始数据",
	indexData:{}
	
}
const mutations = {
	[SET_INDEXDATA_MUTATION](state,data){
		state.indexData = data;
	},
	// SET_INDEXDATA_MUTATION(state,data){
	// 	state.indexData = data;
	// },
	// set_indexdata_mutation(state,data){
	// 	state.indexData = data;
	// }
	
	// a(){
	// 	// A程序书写的mutation
	// },
	// ....间隔1000行代码
	// a(){
		
	// }
}

const actions = {
	async getIndexData({commit}){
		// this->store对象,context对象其实是store对象的浅拷贝版本
		// console.log('getIndexData',this)
		const result = await this._vm.$myAxios('/getIndexData');
		
		commit(SET_INDEXDATA_MUTATION,result)
		// console.log('result',result)
		// this.state.home.initData = result;
	}
}

const getters = {
	
}





export default {
	namespaced:true,
	state,
	mutations,
	actions,
	getters
}
