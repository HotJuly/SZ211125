/*
    封装函数
        1.保留重复出现的代码
        2.将每次都不同的内容提取成为形参
        3.谁调用谁传入

    封装组件
        1.保留重复出现的部分
        2.将每次都不同的数据内容通过props或者插槽
        3.谁使用谁传入
*/

export default function (url,data={},method="GET") {
    // let result;
    return new Promise((resolve,reject)=>{
        wx.request({
            url: 'http://localhost:3000' + url,
            data,
            method:method,
            header:{
                cookie:wx.getStorageSync("token")||""
            },
            success: (res) => {
                // console.log('success',res)

                // 如何判断当前本次成功是不是登录接口的?
                // 1.使用url进行判断
                // 2.传一个特殊标识过来
                if(data._isLogin){
                    const cookies = res.cookies;
                    const cookie = cookies.find((item)=>{
                        return item.startsWith("MUSIC_U");
                    })
                    // console.log('cookie',cookie)
                    wx.setStorage({
                        key:"token",
                        data:cookie
                    })
                }

                // result = res;

                // return response.data;
                // 响应报文中具有很多东西,但是我们开发人员主要需要的返回的响应体数据
                resolve(res.data)
            }
        })
    })
    // return result;
}