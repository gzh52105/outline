// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iqlist:[],
    page:1,
    size:10,
    total:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
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
    const tabbar = this.getTabBar();
    tabbar.setData({
      current:1
    })
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
    this.setData({
      page:1,
      size:20,
      total:0,
      iqlist:[]
    },()=>{
      this.getData()

    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      page:this.data.page+1
    },()=>{
      this.getData();
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  getData(){
    const {page,size,iqlist} = this.data;
    wx.request({
      url: 'https://api.qfh5.cn/api/iq',
      data:{
        page,
        size
      },
      success:({data})=>{
        console.log('data=',data)

        this.setData({
          iqlist:iqlist.concat(data.data.result),
          total:data.data.total
        })

        
        wx.stopPullDownRefresh()
      }
    })
  }
})