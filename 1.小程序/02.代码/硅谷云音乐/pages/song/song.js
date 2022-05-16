// pages/song/song.js
import PubSub from 'pubsub-js'
const appInstance = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {

        // 用于存储当前歌曲的详细信息
        songObj: {},

        // 用于控制页面C3效果状态,记录当前页面播放状态
        isPlay: false,

        // 用于存储当前页面歌曲的播放链接
        musicUrl: null
    },

    // 用于监视用户点击播放按钮,实现播放/暂停歌曲功能
    handlePlay() {
        // 1.获取到背景音频管理器实例对象
        const backgroundAudioManager = wx.getBackgroundAudioManager();


        if (this.data.isPlay) {
            // 能进入到这里,说明歌曲正在播放
            // 也就是说需要暂停歌曲

            backgroundAudioManager.pause();

            // 将当前歌曲的播放状态存入到app实例对象身上,方便后续逻辑判断使用
            appInstance.globalData.playState = false;
        } else {
            // 能进入到这里,说明歌曲处于暂停状态
            // 也就是说需要播放歌曲

            // 2.给背景音频管理器实例对象添加src属性,实现播放歌曲功能
            // 注意:小程序文档此处有坑,除了添加src,还必须添加title属性,否则无法自动播放
            backgroundAudioManager.src = this.data.musicUrl;
            backgroundAudioManager.title = this.data.songObj.name;

            // 将当前歌曲的id存入到app实例对象身上,方便后续逻辑判断使用
            appInstance.globalData.audioId = this.data.songObj.id;

            // 将当前歌曲的播放状态存入到app实例对象身上,方便后续逻辑判断使用
            appInstance.globalData.playState = true;
        }

        this.setData({
            isPlay: !this.data.isPlay
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        // 小程序中,组件想要获取到路由传参的数据,需要通过onLoad生命周期的形参options可以获取,query string最终会变成一个query对象

        // 注意:小程序的url路径具有长度限制,导致此处数据只传了一部分
        // console.log(JSON.parse(options.song))
        // console.log(options.songId)

        // 获取到当前歌曲id
        const songId = options.songId*1;

        const result = await this.$myAxios('/song/detail', {
            ids: songId
        });
        // console.log(result.songs[0])

        this.setData({
            songObj: result.songs[0]
        })

        wx.setNavigationBarTitle({
            title: this.data.songObj.name
        })

        const result2 = await this.$myAxios('/song/url', {
            id: songId
        });
        // console.log(result.songs[0])

        this.setData({
            musicUrl: result2.data[0].url
        })

        const {audioId,playState} = appInstance.globalData;

        // console.log(audioId,songId,playState)
        if(playState && audioId === songId ){
            this.setData({
                isPlay:true
            })
        }

        console.log('PubSub',PubSub)



        // 用于测试app实例对象存取数据操作
        // console.log(1,appInstance.a.msg)
        // appInstance.a.msg="我是修改之后的数据"
        // console.log(2,appInstance.a.msg)
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