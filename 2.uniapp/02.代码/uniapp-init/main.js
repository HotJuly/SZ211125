import App from './App'
import store from './store/index.js';
import myAxios from './utils/myAxios.js';

import Vue from 'vue'
Vue.config.productionTip = false

Vue.prototype.$myAxios = myAxios;

// 声明App组件为当前小程序
App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
