App({
  
  globalData: {
    //loginOk: false,
    user:'',
    passworduser:'',
    searchword:''
  },
  
  onLaunch:function(){
  // 页面初始化 options为页面跳转所带来的参数
    wx.setStorage({
      key:"loginOK",
      data:false
    })
  },
  
  
})
