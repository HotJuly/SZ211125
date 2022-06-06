import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


Vue.config.devtools = true;

// 自定义合并策略
// 使用场景:统一修改所有组件配置对象
// Vue.config.optionMergeStrategies.a = function (parent, child, vm) {
//   // console.log('optionMergeStrategies',parent, child, vm)
//   return child + 1
// }

/*
  问题:请问你是如何捕获项目中出现的错误的?
  解答:
    1.try...catch(e)...
      该方案用于防止某段核心代码出现报错,影响后续代码执行,才使用的

    2.生命周期钩子函数errorCaptured
      该方案用于捕获后代组件出现的错误,不包括当前组件

    3.全局配置
      Vue.config.errorHandler=function(){}
      该方案用于捕获Vue项目中,出现的所有错误

  问题:请问你在项目上线之后,捕获项目出现的错误的?
  解答:
    1.如何捕获报错?
      同上

    2.如何知道用户出现了什么报错?
      通过ajax将用户出现的报错信息,发送到公司服务器上,公司服务器在通过BUG管理平台总结给开发者

  扩展:在普通项目中(未使用Vue或者React框架的项目),使用window.onerror=function(){}可以捕获项目中的报错
*/

// Vue.config.errorHandler = function (err, vm, info) {
//   console.log('errorHandler',err, vm, info);
// }

// Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
