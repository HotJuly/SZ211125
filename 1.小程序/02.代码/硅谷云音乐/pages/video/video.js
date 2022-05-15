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
        videoList: [],

        // 用于控制页面上所有video组件与image组件的显示切换
        videoId:null,

        // 用于控制scroll-view区域下拉动画的显示隐藏
        isTrigger:false
    },

    // $myAxios: myAxios,

    // 专门用于请求导航列表数据
    async getNavList(){
        const result = await this.$myAxios('/video/group/list');
        this.setData({
            navList: result.data.slice(0, 13),
            currentId: result.data[0].id
        })
    },

    // 用于监视用户下拉scroll-view区域操作
    async handlePullDown(){
        // console.log('handlePullDown')
        await this.getVideoList();
        this.setData({
            isTrigger:false
        })
    },

    // 用于监视用户点击图片操作,并控制页面上video组件和image组件的切换,以及视频自动播放
    changeVideo(event){
        // 1.获取到image组件的id属性
        const videoId = event.currentTarget.id;

        // 2.将数据更新到data中,使得对应的video组件显示出来(异步更新视图)
        this.setData({
            videoId
        },()=>{
            // setData第二个实参数据类型为函数
            // 该函数会在视图更新之后才执行

            // 3.获取到对应的video组件的上下文对象
            const videoContext = wx.createVideoContext(videoId);

            // 4.使用API控制video组件进行播放
            videoContext.play();
        })
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

        // if(!hasPermission())return;

        // console.log(this)
        await this.getNavList();

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
    onPullDownRefresh:async function () {
        // console.log('onPullDownRefresh')

        await this.getNavList();

        this.getVideoList();
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function ({from,target}) {
        // from代表当前触发转发的渠道
        // target代表当前触发转发的button组件信息
        // console.log('onShareAppMessage',from,target)
        if(from==="menu"){
            // 能进入这里就说明当前是通过右上角转发进入的
            return{
                title:"硅谷云音乐",
                imageUrl:"/static/images/dazuo.jpeg",
                path:"/pages/index/index"
            }
        }else{
            // 能进入这里就说明当前是通过button组件转发进入的
            // 注意点:自定义属性不支持大写英文
            // console.log(target)
            const {title,imageurl:imageUrl} = target.dataset;
            console.log('imageUrl',target)
            return{
                title,
                imageUrl,
                path:"/pages/video/video"
            }
        }
    }
})