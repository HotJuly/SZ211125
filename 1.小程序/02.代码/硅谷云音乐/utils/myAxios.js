/*
    封装函数
        1.保留重复出现的代码
        2.将每次都不同的内容提取成为形参
        3.谁调用谁传入

*/

export default function (url,data={},method="GET") {
    // let result;
    return new Promise((resolve,reject)=>{
        wx.request({
            url: 'http://localhost:3000' + url,
            data,
            method:method,
            success: (res) => {
                // console.log('success',res)
                // result = res;

                // return response.data;
                // 响应报文中具有很多东西,但是我们开发人员主要需要的返回的响应体数据
                resolve(res.data)
            }
        })
    })
    // return result;
}