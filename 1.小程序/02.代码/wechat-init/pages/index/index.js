// pages/index/index.js
// 调用Page函数,用于创建当前页面的实例对象,可以调用多次
Page({

    /**
     * 页面的初始数据
     */

     /*
        乞丐版深拷贝:
            JSON.parse(JSON.stringify(data))
            缺点:
                1.由于该方法克隆出来的对象是Object的实例对象,所以会丢失原型链
                2.如果遇到函数,他会变为undefined
                3.如果接收到特殊的数据类型,例如:Set,Map
                    Set->Array
                    Map->Object
     */
    data: {
        msg:"我是初始化数据",

        // 该属性用于存储用户个人信息
        userInfo:{}
    },

    handleClick(){
        // console.log('handleClick')
        // wx.navigateTo({
        //     url: '/pages/log/log',
        //   })
        // wx.redirectTo({
        //   url: '../log/log',
        // })
    },

    handleParent(){
        // console.log('handleParent')
    },

    changeMsg(){
        this.setData({
            msg:"我是修改之后的数据"
        })
    },

    // 用于获取用户个人信息
    getUserInfo(event){
        console.log('getUserInfo',event)
        /*
            一个框架如果想要传递数据给开发者,无非就是两种渠道
                1.this
                2.形参
        */
       const userInfo = event.detail.userInfo;
       if(userInfo){
           this.setData({
               userInfo:userInfo
           })
       }
    },

    // 用于测试最新版本的获取用户授权
    getUserProfile(){
        wx.getUserProfile({
            desc:"用于测试用户授权功能",
            success:(event)=>{
                // console.log('event',event)
                this.setData({
                    userInfo:event.userInfo
                })
            },
            fail(error){
                console.log('error',error)
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // console.log('msg1',this.data.msg)
        // this.setData({
        //     msg:"我是修改之后的数据"
        // })
        // console.log('msg2',this.data.msg)
        // this.data.msg="我是修改之后的数据"

        // console.log('--------onLoad---------')
        // debugger

        // wx.getUserInfo({
        //     success:(event)=>{
        //         // console.log('event',event)
        //         this.setData({
        //             userInfo:event.userInfo
        //         })
        //     }
        // })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log('--------onReady---------')
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log('--------onShow---------')
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        console.log('--------onHide---------')
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        console.log('--------onUnload---------')
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})