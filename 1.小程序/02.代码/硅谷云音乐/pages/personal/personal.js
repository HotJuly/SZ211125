// pages/personal/personal.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

        // 用于控制页面元素的移动距离
        moveDistance:0,

        // 用于控制页面元素的过渡效果
        moveTransition:""
    },

    // 用于监视用户手指按下操作
    handleTouchStart(event){
        // console.log('handleTouchStart',event)
        this.startY = event.touches[0].clientY;
        this.setData({
            moveTransition:""
        })
    },

    // 用于监视用户手指移动操作
    handleTouchMove(event){
        // console.log('handleTouchMove',event)
        const moveY = event.touches[0].clientY;

        const moveDistance = moveY - this.startY;

        // console.log('moveDistance',moveDistance)
        if(moveDistance>0&&moveDistance<80){
            this.setData({
                moveDistance
            })
        }
    },

    // 用于监视用户手指抬起操作
    handleTouchEnd(event){
        // console.log('handleTouchStart',event)
        this.setData({
            moveDistance:0,
            moveTransition:"transform 1s"
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