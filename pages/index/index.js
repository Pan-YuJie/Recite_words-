
const app = getApp()

Page({
  data: {
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.K2aX241yWUeSH3FUloMWgQHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.25&pid=1.7'
    }, {
      id: 1,
        type: 'image',
        url: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.NAwhANOPsoJ_jxnsoUG5SAHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.25&pid=1.7',
    }, {
      id: 2,
      type: 'image',
      url: 'https://tse1-mm.cn.bing.net/th/id/R-C.66ea3a80ae2bd09c89b1f4b48e796e91?rik=MetlH5Ux6mJlqw&riu=http%3a%2f%2fwx3.sinaimg.cn%2flarge%2f006oOWahly1fmezk3pui6j30sg0sg0vr.jpg&ehk=VwLJluMP11bIe5gzQzkX033eTg%2bkqqkZecs88VTT8s8%3d&risl=&pid=ImgRaw&r=0'
    }, {
      id: 3,
      type: 'image',
      url: 'https://tse1-mm.cn.bing.net/th/id/R-C.92f0baf3874b520e6207f29d1fe71128?rik=LesetgT99%2brk9g&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20181014%2f47a72f51461c4b08a6226a61934f5d83.jpeg&ehk=Xcjc%2bgPQ8SpWPJOa01KbxjdUo0Rdg2klmbybVoVef0A%3d&risl=&pid=ImgRaw&r=0'
    }, {
      id: 4,
      type: 'image',
      url: '/pages/img/index.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://upload-images.jianshu.io/upload_images/5640239-415c62ed61dd2f1c.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/282'
    }, {
      id: 6,
      type: 'image',
      url: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.NAwhANOPsoJ_jxnsoUG5SAHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.25&pid=1.7'
    }],
  },

  

  goscr: function () {
    wx.switchTab({
   url: '../search/search',                  //这个是要加载的页面的路径
   })
},
  // onReady: function () {
  //   wx.setStorage("loginOK",false)
  // },
  onLoad() {
    }
  },
  )
