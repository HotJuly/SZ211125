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

        // 用于存储当前页面推荐列表数据
        recommend:[],

        // 用于记录当前song页面展示的歌曲下标
        currentIndex:null
    },

    // 用于监视用户点击推荐歌曲列表选项,自动跳转到song页面
    toSong(event){
        const {song,index} = event.currentTarget.dataset;
        // console.log(song)

        this.setData({
            currentIndex:index
        })
        
        wx.navigateTo({
        //   url: '/pages/song/song?song=' + JSON.stringify(song),
          url: '/songs/pages/song/song?songId=' + song.id
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.token = this.$PubSub.subscribe('switchType',(msg,type)=>{
            // console.log('switchType',msg,type)

            // 根据发送过来的标识,找到对应的歌曲id
            let {currentIndex , recommend} = this.data;

            if(type==="pre"){
                // 能进入这里,说明用户需要的是上一首歌曲的信息
                if(currentIndex===0){
                    currentIndex = recommend.length-1;
                }else{
                    currentIndex--;
                }
            }else{
                // 能进入这里,说明用户需要的是下一首歌曲的信息
                if(currentIndex===recommend.length-1){
                    currentIndex = 0;
                }else{
                    currentIndex++;
                }
            }

            const id = recommend[currentIndex].id;

            this.setData({
                currentIndex
            })

            // console.log('id',id)
            this.$PubSub.publish('sendId',id);
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
    onShow:async function () {
        const date = new Date();

        const month = date.getMonth() + 1;
        const day = date.getDate();

        if(month!==this.data.month||day!==this.data.day){

            this.setData({
                month,
                day
            })
    
            const {recommend} = await this.$myAxios('/recommend/songs');
    
            this.setData({
                recommend
            })
            // console.log(recommend)
        }
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
        this.$PubSub.unsubscribe(this.token);
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