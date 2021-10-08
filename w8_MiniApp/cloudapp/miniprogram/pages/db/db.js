// pages/db/db.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // @在小程序端直接操作数据库（有权限问题）
    // 获取数据库对象
    const db = wx.cloud.database()

    // 获取集合
    const classCol = db.collection('class');

    // 数据的CRUD

    // 获取
    const data = await classCol.get()
    console.log('data',data)

    // 删除
    const data2 = await classCol.where({
      name:'1902'
    }).remove()

    console.log('data2',data2)


    // @利用云函数操作数据库
    wx.cloud.callFunction({
      name:'h52105',
      data:{
        type:'get',
        config:{
          size:15

        }
      }
    }).then(res=>{
      console.log('res=',res);
      this.setData({
        classList:res.result.data
      })
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

  removeItem(e){
    const {id} = e.currentTarget.dataset;
    console.log('id',id)

    wx.cloud.callFunction({
      name:'h52105',
      data:{
        type:'remove',
        query:{_id:id}
      }
    }).then(res=>{
      console.log('delete',res);

      if(res.result.stats.removed>0){
        wx.showToast({
          title:'删除成功'
        })
        this.setData({
          classList:this.data.classList.filter(item=>item._id!=id)
        })
      }
    })
  }
})