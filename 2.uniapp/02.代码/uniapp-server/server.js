const Koa = require('koa');
const KoaRouter = require('koa-router');
const Fly=require("flyio/src/node");
const fly=new Fly;

// 1.获取服务器应用实例对象
// const app = express();
const app = new Koa();

// 3.创建路由

// 3.1 创建路由器对象
const router  = new KoaRouter();

// 3.2 声明使用中间件
// 中间件主要的用处
// 	1.统一修改请求头和响应头
// 	2.检查当前本次请求是否符合要求(例如:是否已经登陆)
// 语法:app.use(中间件函数)
app.use(router.routes());

// 3.3 注册路由
/*
	express中,路由回调函数接收三个参数(形参)
		1.request->请求报文对象
		2.response->响应报文对象
			reponse.end
					.send
					.json
		3.next->执行下一个中间件
		
	koa只有两个
		1.ctx->request+response->请求报文对象+响应报文对象
		2.next

	问题:如何返回响应数据
	解答:ctx.body=需要返回的数据
*/
router.get('/test',(ctx,next)=>{
	// console.log('test success!!')
	ctx.body='test success!!'
})


// 用于返回首页相关数据
const indexData = require('./datas/index.json');
router.get('/getIndexData',(ctx,next)=>{
	// console.log('test success!!')
	ctx.body=indexData
})

// 用于返回首页相关数据
const categoryDatas = require('./datas/categoryDatas.json');
router.get('/getCategoryDatas',(ctx,next)=>{
	// console.log('test success!!')
	ctx.body=categoryDatas
})

// 用于返回首页分类相关数据
const indexCateList = require('./datas/indexCateList.json');
router.get('/getIndexCateList',async (ctx,next)=>{
	// console.log('test success!!')
	const promise = new Promise((resolve)=>{
		setTimeout(resolve,3000);
	})
	await promise;
	ctx.body=indexCateList
})



// 用于返回首页相关数据
const goods = require('./datas/goods.json');
router.get('/getGoodDetail',(ctx,next)=>{
	// console.log('test success!!')
	const {goodid} = ctx.query;
	
	const result = goods.find((good)=>{
		return good.id === goodid>>>0
	})
	// console.log('goodid',goodid)
	ctx.body=result
})

// 用于获取用户唯一标识
router.get('/getOpenId',async (ctx,next)=>{
	// console.log('test success!!')
	// ctx.body=categoryDatas
	const {code} = ctx.query;
	const appid = "wxe5931a68ea66cece";
	const appSecret = "f657de0ed437c157d40ba7120f191ce6";
	
	const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`;
	
	const {data} = await fly.get(url);
	const {openid} = JSON.parse(data);
	// console.log('openid',openid)
	ctx.body=openid;
})


// 2.将服务器应用实例运行到某个端口上,并监听该端口
app.listen(3001,(error)=>{
	if(error){
		console.log('服务器启动失败',error)
	}else{
		console.log('服务器启动成功,地址为http://localhost:3001')
	}
})