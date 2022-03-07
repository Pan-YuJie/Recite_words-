// pages/bei/bei.js
var that;
var innerAudioContext;
var wordSum;
var passed;
var wordList
var gradeList
var last_idx
var flag

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userId:2,
    showNot:"",
    wordPronounce:"",
    wordTranslation:"",
    words:1,
    wordId:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  
  onReachBottom:function(){
    console.log("到底了")
  },

  onShow: function () {
    let that = this;
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

    that.data.userId=wx.getStorageSync('userId')
    // wx.getStorage({
    //   key:"userId",
    //   success(res){
    //     console.log(res.data)
    //     that.setData({
    //       userId:res.data
    //     })
    //   },
    // })
    console.log(that.data.userId)
    wx.request({
      url: 'http://words.dlnuxeon.cn/word/getWordRandom/'+that.data.userId,
      method:"GET",
      success(res){
        console.log("随机请求单词成功")
        console.log(res)
        that.setData({
          words:res.data.data.words,
          wordPronounce:res.data.data.wordPronounce,
          wordTranslation:res.data.data.wordTranslation,
          wordId:res.data.data.wordId
        })
      }
    })
    console.log(that.data.userId)
  },

  request:function(){
    let that=this
    // 请求单词
    that.data.userId=wx.getStorageSync('userId')
    console.log(that.data.userId)
    wx.request({
      url: 'http://words.dlnuxeon.cn/word/getWordRandom/'+that.data.userId,
      method:"GET",
      success(res){
        console.log("随机请求单词成功")
        console.log(res)
        that.setData({
          words:res.data.data.words,
          wordPronounce:res.data.data.wordPronounce,
          wordTranslation:res.data.data.wordTranslation,
          wordId:res.data.data.wordId
        })
      }
    })
  },

  next:function(){
    let that=this;
    this.promptTone() //提示音
    that.setData({
      showNot:false
    })
    this.request();

    //记住
    let id=that.data.userId
    console.log(id)
    wx.request({
    url: 'http://words.dlnuxeon.cn/history/linkWorldKnow/'+that.data.userId+'/'+that.data.wordId,
    method:"POST",
    data:{
      userId:that.data.userId,
      wordId:that.data.wordId
    },
    success(res){
      console.log("记住了"+that.data.words)
      console.log(res)
    }
    })
    this.onLoad();
  },

  show:function(){
    let that=this;
    that.setData({
      showNot:true
    })
    that.onLoad();
  },

  promptTone: function() {
    innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = '/audio/right.mp3'
    innerAudioContext.onPlay(() => {
      //console.log('ding的一声')
    })
    innerAudioContext.onError((res) => {
      //console.log('ding的一声失败')
    })
  },

})