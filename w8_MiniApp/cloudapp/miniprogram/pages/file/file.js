// pages/file/file.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.downloadFile({
      fileID:'cloud://class-test-cvn29.636c-class-test-cvn29-1302466056/db.png',
      success(res){
        console.log('file=',res.tempFilePath)
        wx.saveFile({
          tempFilePath:res.tempFilePath,
          success(){
            wx.showToast({
              title:'文件保存成功',
              icon:'none'
            })
          }
        })

        // 存入相册
        wx.saveImageToPhotosAlbum({
          filePath:res.tempFilePath,
          success(){
            wx.showToast({
              title:'成功保存文件到相册',
              icon:'none'
            })
          }
        })
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
  uploadFile(){
    wx.chooseImage({
      count:1,
      success(res){
        console.log('res=',res.tempFilePaths)

        wx.cloud.uploadFile({
          // 上传到云存储中的哪个路径
          cloudPath: 'test.png',
          filePath: res.tempFilePaths[0], // 文件路径
          success(){
            wx.showToast({
              title: '上传图片成功',
            })
          }
        })
      }
    })
  }
})