// pages/video/video.js
import myAxios from '../../utils/myAxios';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 用于存储导航列表数据
        navList:[],

        // 用于存储当前用户观看的分组下标
        currentIndex:0
    },

    // 用于监视用户切换视频分组的操作
    changeCurrentIndex(event){
        // console.log('changeCurrentIndex',event)

        // 目前index数据存储于事件源身上,所以使用event.currentTarget百分百能找到
        const currentIndex = event.currentTarget.dataset.index;
        console.log(currentIndex)
        this.setData({
            currentIndex
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
    onShow:async function () {
        // 注意:video页面是tabBar页面,一般加载之后就不会卸载,所以尽可能使用onShow

        const result = await myAxios('/video/group/list');
        this.setData({
            navList:result.data.slice(0,13)
        })
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