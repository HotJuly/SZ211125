// pages/login/login.js
import myAxios from '../../utils/myAxios';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 用于存储用户的手机号码
        phone: "17688197777",

        // 用于存储用户的密码
        password: "",

        obj: {
            name: "123"
        }
    },

    // 用于收集用户输入的手机号
    handlePhone(event) {
        // 通过event.detail.value可以获取到用户输入的内容
        // console.log(event)
        const phone = event.detail.value;
        this.setData({
            phone
        })
    },

    // 用于收集用户输入的密码
    handlePassword(event) {
        // 通过event.detail.value可以获取到用户输入的内容
        // console.log(event)
        const password = event.detail.value;
        this.setData({
            password
        })
    },

    // 用于收集用户输入的手机号
    handleInput(event) {
        // 通过event.detail.value可以获取到用户输入的内容
        console.log(event)

        // 问题:如何在回调函数中分辨是谁触发的该回调函数
        // 解决:通过event.target.dataset中可以获取到标签上的自定义属性

        const value = event.detail.value;
        const {
            type
        } = event.target.dataset;
        this.setData({
            [type]: value
        })
    },

    // 用于监视用户点击登录操作
    async handleLogin() {
        // console.log('handleLogin')
        /*
            流程:
                1.收集到数据
                2.处理数据结构
                3.表单校验(前端)
                4.发送请求
                5.返回响应
                    成功做什么
                    失败做什么

            状态码:
                400 ->  手机号格式错误
                501 ->  手机号不存在
                502 ->  密码错误
                200 ->  登陆成功
        */

        //    1.收集到数据
        let {
            phone,
            password
        } = this.data;

        // 2.处理数据结构
        phone = phone.trim();
        password = password.trim();

        // 3.表单校验
        if (!phone) {
            // 能进入这里就说明没有账号
            wx.showToast({
                title: "帐号不能为空",
                icon: "error"
            });

            return;
        }

        if (!password) {
            // 能进入这里就说明没有账号
            wx.showToast({
                title: "密码不能为空",
                icon: "error"
            });

            return;
        }

        const result = await myAxios('/login/cellphone', {
            phone,
            password
        });

        // console.log(result)

        const code = result.code;

        // if(code === 200){
        //     // 能进入这里就说明登陆成功
        //     wx.showToast({
        //         title:"登陆成功,即将跳转",
        //         icon:"none"
        //     });

        // }else if(code === 400){
        //     // 能进入这里就说明手机号格式错误
        //     wx.showToast({
        //         title:"手机号格式错误",
        //         icon:"error"
        //     });

        // }else if(code === 501){
        //     // 能进入这里就说明手机号不存在
        //     wx.showToast({
        //         title:"帐号不存在",
        //         icon:"error"
        //     });

        // }else if(code === 502){
        //     // 能进入这里就说明密码错误
        //     wx.showToast({
        //         title:"密码错误",
        //         icon:"error"
        //     });

        // }

        // 使用策略模式写法
        const codeFn = {
            200() {
                // 能进入这里就说明登陆成功
                wx.showToast({
                    title: "登陆成功,即将跳转",
                    icon: "none"
                });

                // wx.redirectTo({
                //   url: '/pages/personal/personal',
                // })
                wx.switchTab({
                    url: '/pages/personal/personal',
                })

                wx.setStorageSync('userInfo',result.profile);
                
                // 异步版本和同步版本传参是不一样的
                // wx.setStorage({
                //     key:'userInfo',
                //     data:result.profile
                // });
            },
            400() {
                // 能进入这里就说明手机号格式错误
                wx.showToast({
                    title: "手机号格式错误",
                    icon: "error"
                });
            },
            501() {
                // 能进入这里就说明手机号不存在
                wx.showToast({
                    title: "帐号不存在",
                    icon: "error"
                });
            },
            502() {
                // 能进入这里就说明密码错误
                wx.showToast({
                    title: "密码错误",
                    icon: "error"
                });
            }
        }

        codeFn[code]&&codeFn[code]();

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