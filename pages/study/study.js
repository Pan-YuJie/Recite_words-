
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId:2,
    open: false,
    open2: false,
    imgsrc: '/images/icon/dropdown.jpg',
    mode: 'aspectFit',
    userInfo: {},
    list:[]
  },

  onReady:function(){
    let that=this

    that.data.flag=wx.getStorageSync('loginOK')
    console.log(that.data.flag)
    if(that.data.flag==false){
      wx.redirectTo({
        url: '/pages/login/login',
      }),
      console.log('未登录,不能查询')
      wx.showToast({
        title: '请先登录',
        icon: 'error',
        duration: 2000
      })
      return;
    }

    that.data.userId=parseInt(wx.getStorageSync('userId'))

    // console.log(that.data.userId)
    // console.log(typeof that.data.userId)
    wx.request({
      url: 'http://words.dlnuxeon.cn/history/getKnownWordsByUserId/'+that.data.userId,
      method:"GET",
      data:{
      },
      success(res){
        console.log("记住单词列表")
        console.log(res)
        that.setData({
          list:res.data.data
        })
        wx.setStorage({
          key:'memorizeWords',
          data:that.data.list
        })
      },
      fail(res){
        console.log(res)
        console.log("失败")
      }

    })
  },

  showitem: function(options) {
    let that=this
    this.setData({
      open: !this.data.open
    })
  },                                                                              

  showitem2: function(options) {                      
    this.setData({                                  
      open2: !this.data.open2
    })                          
  },                                                                                                                                                        

  goWord:function(eve){
    let that=this
  
    let userId=(eve.currentTarget.dataset.userid)*1
    let words=eve.currentTarget.dataset.words

    wx.navigateTo({
      url: '/pages/study/word/word?userId='+userId+'&words='+words
    })
  }



})