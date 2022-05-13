// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 用于存储用户的手机号码
        phone:"17688197777",

        // 用于存储用户的密码
        password:"",

        obj:{
            name:"123"
        }
    },

    // 用于收集用户输入的手机号
    handlePhone(event){
        // 通过event.detail.value可以获取到用户输入的内容
        // console.log(event)
        const phone = event.detail.value;
        this.setData({
            phone
        })
    },

    // 用于收集用户输入的密码
    handlePassword(event){
        // 通过event.detail.value可以获取到用户输入的内容
        // console.log(event)
        const password = event.detail.value;
        this.setData({
            password
        })
    },

    // 用于收集用户输入的手机号
    handleInput(event){
        // 通过event.detail.value可以获取到用户输入的内容
        // console.log(event)

        // 问题:如何在回调函数中分辨是谁触发的该回调函数
        // 解决:通过event.target.dataset中可以获取到标签上的自定义属性

        const value = event.detail.value;
        const {type} = event.target.dataset;
        this.setData({
            [type]:value
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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