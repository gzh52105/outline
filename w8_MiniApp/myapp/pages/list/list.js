// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    datalist:[10,20,30,40],
    goodslist:[{
      id:1,
      name:'goods1',
      price:100,
      imgs:['img/m1.jpg','img/m2.jpg','img/m2.jpg']
    },{
      id:2,
      name:'goods2',
      price:200,
      imgs:['img/m1.jpg','img/m2.jpg','img/m2.jpg']
    },{
      id:3,
      name:'goods3',
      price:300,
      imgs:['img/m1.jpg','img/m2.jpg','img/m2.jpg']
    }],
    username:'laoxie'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  changeUsername(e){
    // 修改数据，参考react写法
    // 
    this.setData({
      username:e.detail.value
    })

    // console.log('e',e)
  }
})