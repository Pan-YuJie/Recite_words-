//获取应用实例
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:"",
    text: "",
    word:"",
    wordPronounce:"",
    wordTranslation:"",
    senInfo:null,
    checkWord: null,
    isShow:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  wordInput: function(e) {
    // console.log(e.detail.value)
    this.setData({
      checkWord: e.detail.value
    });
  },

  //快递查询事件
  btnClick: function() {
    let that = this;
    // wx.getStorage({
    //   key:'loginOK',
    //   success(res){
    //     console.log(res.data)
    //     that.setData({
    //       flag:res.data
    //     })
    //   }
    // });
    that.data.flag=wx.getStorageSync('loginOK')
    console.log(that.data.flag)
    if(that.data.flag==false){
      console.log('未登录,不能查询')
      wx.showToast({
        title: '请先登录',
        icon: 'error',
        duration: 1000
      })
      return
    }
    else{
      that.getWordInfo();
    }
  },

  //获取单词
  getWordInfo: function() {
    let that = this;
    let word = that.data.checkWord; //输入的单词
    let id=wx.getStorageSync('userId');
    
    // wx.getStorage({
    //   key:"userId",
    //   success(res){
    //     that.setData({
    //       id:res.data.userId
    //     })
    //   }
    // })  
    // console.log(typeof id);
    // console.log(id);
    
    if (word === null || word === '' || word === "undefined") {
      wx.showToast({
        title: '单词不能为空!',
        icon: 'none',
        duration: 1500
      });
      return;
    }

    wx.showLoading({
        title: '加载中',
        duration: 500
      }),
      wx.request({
        url: 'http://words.dlnuxeon.cn/word/getWordByWords/'+id +'/'+word,
        method:'GET',
        success: function(res) {
          console.log(res);
          if (res.statusCode==500){
            wx.showToast({
              title:'词库中没有这词',
              icon:'none',
              duration:1000
            })
            return;
          }
          if (res.data.success==true) {
            that.setData({
              word: res.data.data.words,
              wordPronounce:res.data.data.wordPronounce,
              wordTranslation:res.data.data.wordTranslation,
              isShow:true, 
            });     
            console.log(that.data.word),
            console.log(that.data.wordPronounce),
            console.log(that.data.wordTranslation)
            that.onLoad();
          } else {
            that.setData({
              text: '查询不到这个单词'
            });
          }
        }
      });

  },


  onLoad: function () {
    let that=this
    let flag=that.data.isShow
    console.log(flag)
    this.setData({
      isShow:flag
    })
  },




 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: 'GGG单词本',
      desc: '',
      success: function(res) {
        wx.showToast({
          title: '分享成功,谢谢支持😘',
          duration: 1000,
          icon: "none"
        })
      }
    }
  }
})