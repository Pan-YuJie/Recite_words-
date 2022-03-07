
var app=getApp()

Page({
  data: {
    phone: '', //账号
    password: '',//密码
    text: '',
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
  

  login:function(){
    let userId=this.data.phone;
    let userPassword=this.data.password;
    console.log(this);
    var that = this;   
    var warn = null; 
    if (that.data.phone.length == 0) {
      wx.showToast({
        title: '用户名不能为空',
        icon: 'error',
        duration: 1000
      })
    } else if (that.data.password.length == 0) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'error',
        duration: 1000
      })
    }else {
    //数据
    wx.request({
      url: 'http://words.dlnuxeon.cn/user/login/'+userId+'/'+userPassword,
      method:'GET',
      data:{
      },
      success:(res)=>{
        console.log(res)
        if(res.data.success){
          wx.setStorageSync('userId', userId);
          wx.setStorageSync('passworduser', userPassword);
          console.log("登录成功"),
          app.globalData.loginOK=true,
          wx.setStorageSync('loginOK', true);
          console.log(app.globalData.loginOK)
          wx.switchTab({
            url: '/pages/my/my',
          })
        }
        else{
          console.log(res)
          wx.showToast({
            title: '账户或密码错误',
            icon: 'error',
            duration: 2000
          })
        }
      },
      fail:(res)=>{

      }

    })
  }
},

  // 注册 
  register: function () {
    let that = this;
    let userId=this.data.phone
    let userPassword=this.data.password
    if (that.data.phone.length == 0) {
          wx.showToast({
            title: '用户名不能为空',
            icon: 'error',
            duration: 1000
          })
          return
        } else if (that.data.password.length == 0) {
          wx.showToast({
            title: '密码不能为空',
            icon: 'error',
            duration: 1000
          })
          return
        }

    wx.request({
      url: 'http://words.dlnuxeon.cn/user/create',
      method:'POST',
      data:{
        userId,
        userPassword
      },
      success:(res)=>{
        console.log('请求成功')
        console.log(res)
        if(res.data.success==true){
        wx.showToast({
          title: '注册成功',
          icon: 'success',
          duration: 2000
        })
        this.login();
      }else{
        console.log('请求失败')
        console.log(res)
        wx.showToast({
          title: '账号已存在',
          icon: 'error',
          duration: 1000
        })
      }
    },
      fail:(res)=>{
        console.log('请求失败')
        console.log(res)
        wx.showToast({
          title: '注册失败',
          icon: 'error',
          duration: 1000
        })

      }
    })
  }
 
})