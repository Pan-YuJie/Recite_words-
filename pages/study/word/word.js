var that;
var innerAudioContext;
var wordSum;
var passed;
var wordList
var gradeList
var last_idx
var flag

Page({
  data: {
    hidden: true,
    content: '',
    proficiency: 1,
    percent: 0,
    words:"",
    userId:1,
    wordPronounce:"",
    wordTranslation:"",
    list:[],
    display:false
  },

  onReady:function(){
    let that=this
    that.data.list=wx.getStorageSync('memorizeWords')
  },

  onLoad: function(options) {
    let that=this
    console.log(options)
    this.setData({
      words:options.words,
      userId:options.userId,
    })

    that.getWordInfo()

    that.setData({
      hidden:true
    })
    that.onShow()
    
  },

  getWordInfo: function() {
    let that = this;
    let word = that.data.words //输入的单词
    let userId=that.data.userId

      wx.request({
        url: 'http://words.dlnuxeon.cn/word/getWordByWords/'+ userId +'/'+word,
        method:'GET',

        success: function(res) {
          if (res.data.success==true) {
            that.setData({
              wordPronounce:res.data.data.wordPronounce,
              wordTranslation:res.data.data.wordTranslation,

            });     

            console.log(that.data.words),
            console.log(that.data.wordPronounce),
            console.log(that.data.wordTranslation)
            that.onShow()
          }

        }
      });

  },


  onHide: function() {

  },

  onUnload: function() {

  },

  show: function() { //显示释义
    let that=this
    this.promptTone() //提示音
    this.setData({
      display:!that.data.display,
    })
    
  },

   next: function() {
     let that=this
     this.promptTone()
     flag = false

     let idx=Math.floor(Math.random()*(171))%that.data.list.length

     that.setData({
       display:false,
       words:that.data.list[idx].words,
       wordTranslation:that.data.list[idx].wordTranslation,
       wordPronounce:that.data.list[idx].wordPronounce
     })

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