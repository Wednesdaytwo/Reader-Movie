Page({
  data:{
    userName:"",
    avatar:"",
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onTap:(event)=>{
    // wx.navigateTo({
    //   url: '../posts/post',
    // });   //平行跳转，由主页面跳到子页面

    // wx.redirectTo({
    //   url: '../posts/post',
    // })   //平级跳转

    wx.switchTab({
       url: '../posts/post', //拥有tabbar页面才可以跳转
    });
  },
  //二维码扫描
  scanQRCode:function(){
    wx.scanCode({
      success: function (result) {
        wx.showModal(
          {
            content: JSON.stringify(result)
          })
      },
      fail: function (error) {
        wx.showModal(
          {
            content: JSON.stringify(error)
          })
      }
    })
  },
  onLoad: function () {
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
  }
})