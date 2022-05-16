// pages/index/index.js
import myAxios from '../../utils/myAxios';
Page({

    /**
     * 页面的初始数据
     */
    data: {

        // 用于存储首页轮播图数据
        banners:[],

        // 用于存储推荐歌曲相关数据
        recommendList:[],

        // 用于存储排行榜区域相关数据
        topList:[]
    },

    // 用于跳转到每日推荐页面
    toRecommendSong(){
        wx.navigateTo({
          url: '/pages/recommendSong/recommendSong',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad:async function (options) {
        /*
            发送请求的三个问题:
                1.在哪发?
                    Vue是在created或者mounted发送
                    那么小程序就可以在onLoad或者onReady发送
                    选择:onLoad

                2.怎么发?
                    小程序中window没有数据,全局对象是wx
                    小程序中没有BOM和DOM,所以小程序中不能使用ajax发送请求
                    
                    request->请求
                    response->响应

                    API:wx.request(Object object)

                3.往哪发?
                    通过接口文档可以得知
        */
        //    console.log('window',window)
        //    console.log('wx',wx)

        // wx.request({
        //     url:'http://localhost:3000/banner',
        //     data:{
        //         type:2
        //     },
        //     success:(res)=>{
        //         // console.log('success',res)
        //         this.setData({
        //             banners:res.data.banners
        //         })
        //     }
        // })


        // 改版前的代码
        // const result = await myAxios('/banner',{type:2},"GET");
        // this.setData({
        //     banners:result.banners
        // })
        
        const result = myAxios('/banner',{type:2},"GET");
        result.then((res)=>{
            this.setData({
                banners:res.banners
            })
        })

        // wx.request({
        //     url:'http://localhost:3000/personalized',
        //     success:(res)=>{
        //         // console.log('success',res)
        //         this.setData({
        //             recommendList:res.data.result
        //         })
        //     }
        // })
        const result1 = await myAxios('/personalized');
        // console.log('result',result)
        this.setData({
            recommendList:result1.result
        })

        const arr = [1,2,6,8,15];
        let index = 0;
        let topList = [];

        while(index<arr.length){
            const result2 = await myAxios('/top/list',{idx:arr[index++]});
    
            /*
                splice(开始切割的下标,切割个数,新增内容)
                slice(开始切割的下标,结束切割的下标)
    
                注意:splice会修改原数组,slice不会修改原数组
            */
            let obj = {
                id:result2.playlist.id,
                name:result2.playlist.name,
                list:result2.playlist.tracks.slice(0,3).map((item)=>{
                    let {id,name,picUrl:picUrl} = item.al;
                    return {
                        id,
                        name,
                        picUrl
                    }
                })
            }
    
            topList.push(obj);
            this.setData({
                topList
            })
        }
        // console.log(topList)
        // this.setData({
        //     topList
        // })
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