// pages/video/video.js
import myAxios from '../../utils/myAxios';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 用于存储导航列表数据
        navList: [],

        // 用于存储当前用户观看的分组下标
        // currentIndex:0
        currentId: null,

        // 用于存储当前视频列表数据
        videoList: []
    },

    // 用于请求对应分组的视频列表数据
    async getVideoList() {
        this.setData({
            videoList: []
        })
        const result2 = await myAxios('/video/group', {
            id: this.data.currentId
        });
        // console.log('result2',result2)
        this.setData({
            videoList: result2.datas.map((item) => {
                return item.data;
            })
        })

        // console.log(2)
    },

    // 用于监视用户切换视频分组的操作
    async changeCurrentId(event) {
        const currentId = event.currentTarget.dataset.id;
        this.setData({
            currentId
        })

        wx.showLoading({
            title:"加载中,请稍等"
        })
        // console.log(1)

        await this.getVideoList();

        // console.log(3)
        wx.hideLoading()
    },

    // 用于监听视频的播放操作,自动停止上一个视频的播放
    handlePlay(event) {
        // console.log('handlePlay',event.currentTarget.id)
        // console.log(this.oldVid)

        const id = event.currentTarget.id;

        // 如果具有上一个视频正在播放,就停止该视频
        // 如果上一个视频和当前本次视频是同一个,就不暂停视频播放
        if (this.oldVid && this.oldVid !== id) {
            // 1.获取video上下文对象
            const videoContext = wx.createVideoContext(this.oldVid);

            // 2.使用API->pause方法,暂停视频的播放
            videoContext.pause();
        }

        //将本次正在播放的视频的id记录下来,留给下次使用
        this.oldVid = id;
    },

    // 仅用于测试视频相关API
    testAPI() {
        // console.log('testAPI')

        // 1.获取video上下文对象
        const videoContext = wx.createVideoContext('5854982FB330581B83112F4DFCD4EB49');

        // 2.使用API->pause方法,暂停视频的播放
        videoContext.pause();
    },

    // 用于监视用户切换视频分组的操作
    changeCurrentIndex(event) {
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
    onShow: async function () {
        // 注意:video页面是tabBar页面,一般加载之后就不会卸载,所以尽可能使用onShow

        const result = await myAxios('/video/group/list');
        this.setData({
            navList: result.data.slice(0, 13),
            currentId: result.data[0].id
        })

        this.getVideoList();
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