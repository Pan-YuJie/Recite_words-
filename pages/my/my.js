// pages/my/my.js

var app=getApp()

Page({

  onShow: function (options) {
    this.setData({
      loginOK:app.globalData.loginOK
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    password: '',
    loginOK:false,
    text: '',
  },

  zhanghao:'123',
  mima:'123',

  tuichudenglu(){
    app.globalData.loginOK=false,
    this.onShow()
  },

  denglu:function(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },

    // 获取输入账号 
    phoneInput: function (e) {
      this.setData({
        phone: e.detail.value
      })
    },
   
    // 获取输入密码 
    passwordInput: function (e) {
      this.setData({
        password: e.detail.value
      })
    },
   
    //登录
    login: function () {
      var that = this;   
      var warn = null; //warn为当手机号为空或格式不正确时提示用户的文字，默认为空
      if (that.data.phone.length == 0) {
        wx.showToast({
          title: '用户名不能为空',
          icon: 'loading',
          duration: 1000
        })
      } else if (that.data.password.length == 0) {
        wx.showToast({
          title: '密码不能为空',
          icon: 'loading',
          duration: 1000
        })
      }else {
            if (that.data.phone == zhanghao && that.data.password==mima) {  //判断是否能正常登录
              warn = "卡号密码不匹配";
              wx.showModal({
                title: '提示',
                content: warn
              })
            } else {
              console.log('登录成功')
              wx.setStorage('loginOk',true)
              app.globalData.loginOK=true,
              this.setData({
                // success:true,
              })
              console.log(success)
            }
        }
      },


  showClause: function () {
    wx.navigateTo({
      url: './clause/clause',
      success: function (res) {
      },
      fail: function () {
      },
      complete: function () {
      }
    })
  },
  showHelp: function () {
    wx.navigateTo({
      url: './help/help',
      success: function (res) {
      },
      fail: function () {
      },
      complete: function () {
      }
    })
  },
  showFeedback: function () {
    wx.showModal({
      title: '提示',
      content: '此功能暂未开放，敬请期待！',
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('点击确定')
        }
      }
    })
  }

  
})