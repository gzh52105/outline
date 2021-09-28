// app.js

// App() 注册一个小程序，只能在app.js中调用，只能调用一次
App({
  // 小程序初始化
  onLaunch(options) {
    console.log('onLaunch',options);

    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  onShow(options){
    console.log('onShow',options)
    // 根据不同的场景值实现不同的业务逻辑
  },
  onHide(){
    console.log('onHide')
  },

  // 其他配置（自定义配置）
  globalData: {
    userInfo: null
  },

  // 全局方法
  request(){

  }
})
