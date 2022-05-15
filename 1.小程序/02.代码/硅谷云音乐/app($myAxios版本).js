// app.js
import myAxios from './utils/myAxios';
App({
  onLaunch() {
    // 当前生命周期会在app开始加载的时候执行,相当于是Page中的onLoad

    // 此处的Page函数就是每个页面用来创建页面实例对象的那个Page
    // 注意:整个小程序中只有这个Page函数,可以创建出页面的实例对象
    // 此处只是地址值的传递
    const PageFn = Page;
    // console.log(Page)

    // 此处将Page变量变为全新的函数,而PageFn还存储着旧的Page函数
    Page = function(config){

      config.$myAxios = myAxios;

      // 在新的Page中,使用旧的Page函数来创建页面的实例对象,并且返回,防止小程序崩溃
      return PageFn(config);
    }
  },
  globalData: {
    userInfo: null
  }
})
