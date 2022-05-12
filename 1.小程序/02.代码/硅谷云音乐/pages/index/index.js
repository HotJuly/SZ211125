// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        /*
            发送请求的三个问题:
                1.在哪发?
                    Vue是在created或者mounted发送
                    那么小程序就可以在onLoad或者onReady发送
                    选择:onLoad

                2.怎么发?
                    小程序中window没有数据,全局对象是wx
                    小程序中没有BOM和DOM,所以小程序中不能使用ajax发送请求

                    API:wx.request(Object object)

                3.往哪发?
                    通过接口文档可以得知
        */
        //    console.log('window',window)
        //    console.log('wx',wx)

        wx.request({
            url:'http://localhost:3000/banner',
            data:{
                type:2
            },
            success(res){
                console.log('success',res)
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

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