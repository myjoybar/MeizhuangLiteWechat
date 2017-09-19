//recommend.js
//获取应用实例
var app = getApp()
Page({
 
  onLoad: function () {
    console.log('onLoad')
   
  },
  //事件处理函数
  bindViewTapToPageView: function () {
    wx.navigateTo({
      url: '/pages/component/pages/view/view'
    })
  },
  bindViewTapToPageScrollView: function () {
    wx.navigateTo({
      url: '/pages/component/pages/scrollview/scrollview'
    })
  },

  bindViewTapToPageSwiper: function () {
    wx.navigateTo({
      url: '/pages/component/pages/swiper/swiper'
    })
  },
  
})
