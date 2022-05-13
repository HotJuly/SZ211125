// pages/personal/personal.js
import myAxios from '../../utils/myAxios';
Page({

    /**
     * 页面的初始数据
     */
    data: {

        // 用于控制页面元素的移动距离
        moveDistance:0,

        // 用于控制页面元素的过渡效果
        moveTransition:"",

        // 用于存储用户个人信息
        userInfo:{},

        // 用于存储最近的播放记录
        playList:[]
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

    // 用于跳转到login页面
    toLogin(){
        wx.navigateTo({
            url:"/pages/login/login"
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
        const userInfo = wx.getStorageSync("userInfo");
        // console.log(userInfo)
        if(userInfo){
            this.setData({
                userInfo
            })
        }

        // 在onShow中发送请求的原因是,因为tabBar页面在切换的时候不会被销毁
        const result = await myAxios('/user/record',{uid:userInfo.userId,type:1});

        this.setData({
            playList:result.weekData.map((item)=>{
                return item.song;
            })
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