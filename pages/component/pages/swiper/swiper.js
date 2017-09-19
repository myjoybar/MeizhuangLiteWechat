//获取应用实例
var app = getApp()
Page({
  data: {
    navs: [
      { navimg: '/image/demo/icon_15.png', navtext: '掌上信息' },
      { navimg: '/image/demo/icon_16.png', navtext: '商家' },
      { navimg: '/image/demo/icon_17.png', navtext: '抢购' },
    ],
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    describle: "swiper-describle",
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
  },
  onLoad: function () {
    console.log('onLoad')

  }
})
