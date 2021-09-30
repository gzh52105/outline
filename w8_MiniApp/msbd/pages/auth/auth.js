// pages/auth/auth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userReject:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const instance = this;
    wx.getSetting({
      success(res){
        console.log('授权列表',res);

        // 判断用户是否已授权（没有请求授权过的功能）
        if(res.authSetting['scope.camera']===undefined){
          console.log(1)
          // 主动向用户发起授权请求，该方法会自动弹窗让用户确认
          wx.authorize({
            scope: 'scope.camera',
            success(){
              // 如用户运行授权，则执行success

            },
            fail(){
              // 用户拒绝授权，则执行faill
              console.log('用户拒绝')
              instance.setData({
                userReject:true
              })

              wx.showToast({
                title: '当前页面需要使用摄像头，请打开授权设置',
              })
            }
          })
        }else if(res.authSetting['scope.camera']===false){
          console.log(2)
          // wx.openSetting({
          //   success(res){
          //     console.log('打开授权',res)
          //   }
          // })

          instance.setData({
            userReject:true
          })

          wx.showToast({
            title: '当前页面需要使用摄像头，请打开授权设置',
            duration:3000,
            icon:'error'
          })
        }
      } 
    })
  },  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  openSetting(){
    wx.openSetting({
      success(res){
        console.log('打开授权',res)
      }
    })
  },

  takePhoto(){
    // 创建摄像头对象
    const ctx = wx.createCameraContext()

    // 拍照
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  }
})