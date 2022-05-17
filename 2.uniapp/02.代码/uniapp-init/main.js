import App from './App'

import Vue from 'vue'
Vue.config.productionTip = false

// 声明App组件为当前小程序
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
