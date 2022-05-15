export default function(){
    const token = wx.getStorageSync('token');
        if(!token){

            wx.showModal({
                title:"请先登录",
                content:"该功能需要登陆之后才能使用",
                confirmText:"去登陆",
                cancelText:"回到首页",
                success({confirm}){
                    // console.log('success',event)
                    if(confirm){
                        wx.navigateTo({
                          url: '/pages/login/login',
                        })
                    }else{
                        wx.switchTab({
                          url: '/pages/index/index'
                        })
                    }
                },
                fail(){
                    console.log('fail')
                }
            })
            return false;
        }
        return true;
}