import Vue from 'vue'
import App from './App.vue'

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

Vue.use(ElementUI);


Vue.config.productionTip = false


/*
  问题:在Vue中,能够影响到页面上显示内容的地方有几个?
  回答:
    1.在Vue的配置对象中添加render方法
    2.在index.html中可以添加模版内容解析
    3.在Vue的配置对象中添加template配置属性即可

  问题:请问以上三者,渲染优先级排序?
  回答:render配置>template配置>index.html模版


*/

new Vue({
  name:"Root",
  el:"#app",
  data:{
    msg:"hello,我是index.html",
    msg2:"我是template字符串"
  },
  template:"<h1>{{msg2}}</h1>",
  render: h => h(App),
})