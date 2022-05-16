// pages/recommendSong/recommendSong.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

        // 用于存储当前月份
        month:"--",

        // 用于存储当前日期
        day:"--",
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
        const date = new Date();

        const month = date.getMonth() + 1;
        const day = date.getDate();

        this.setData({
            month,
            day
        })

        const {recommend} = await this.$myAxios('/recommend/songs');

        this.setData({
            recommend
        })
        // console.log(recommend)
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