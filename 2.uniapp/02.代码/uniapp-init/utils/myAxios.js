import config from './config.js';
/*
	需求:由于uniapp需要同时实现一套代码,适配多端的效果
		所以当前的baseUrl必须根据运行环境发生变化
	拆解:
		1.如何知道当前的运行环境
			通过uni.getSystemInfoSync(),可以获取到当前设备的信息数据
				其中具有platform属性,可以区分运行环境
						如果是devtools,就代表是小程序环境
						如果是ios,就代表是h5环境
		2.根据不同的运行环境进行赋值
			如果是小程序环境,baseUrl就应该是完整路径
			如果是h5环境,baseUrl就应该是/api,使用代理规则解决跨域问题

*/
// console.log('uni.getSystemInfoSync()',uni.getSystemInfoSync())
let baseUrl;
// const {platform} = uni.getSystemInfoSync();

// if(platform==="devtools"){
// 	baseUrl = "http://localhost:3001"
// }else if(platform==="ios"){
// 	baseUrl = "/api"
// }

// const urls= {
// 	devtools:config.mpHost,
// 	ios:config.h5Host
// }

// baseUrl = urls[platform];

// ifdef代表内部代码会在某些环境下执行,ifndef代表内部代码除了哪些环境都会执行
// #ifdef H5
	baseUrl = config.h5Host;
// #endif

// #ifdef MP
	baseUrl = config.mpHost;
// #endif


export default function(url,data={},method="GET"){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseUrl + url,
			data,
			method,
			success:(res)=>{
				// console.log('res',res)
				resolve(res.data);
			}
		})
	})
}