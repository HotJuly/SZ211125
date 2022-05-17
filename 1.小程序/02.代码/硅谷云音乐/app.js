// app.js
import myAxios from './utils/myAxios';
import PubSub from 'pubsub-js';
import moment from 'moment';
import hasPermission from './utils/hasPermission';
import utilConfig from './utils/config';
App({
  onLaunch() {
    const PageFn = Page;
    Page = function(config){

      config.$myAxios = myAxios;

      config.$PubSub = PubSub;

      config.$moment = moment;

      const showFn = config.onShow;

      // 如果一个页面开始显示的时候,会调用配置对象中的onShow函数
      config.onShow=function(){

        // 判断当前正在显示的这个页面,是否需要做权限检测
        // 如果当前页面的路径出现在utilConfig中的checkPermission数组中,就代表要做权限检测

        // console.log(this.route)

        if(utilConfig.checkPermission[this.route]){
          // console.log(this.route)
          if(!hasPermission())return;
        }

        // 此处的this是当前页面的实例对象
        // console.log(this)
        showFn.apply(this);
        // showFn();
      }

      return PageFn(config);
    }
  },
  globalData: {
    // msg: "我是全局初始化的数据"
    audioId:null,
    playState:false
  }
})
