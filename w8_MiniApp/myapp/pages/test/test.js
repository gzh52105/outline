// 引入模块
// commonJS
// const {request} = require('../../utils/util')
const request = require('../../utils/request')
console.log('request',request)

// ESModule
import * as utils from '../../utils/util'
// import request from '../../utils/request'
// console.log('request',request);

// 引入第三方模块
import * as axios from 'axios'
console.log('axios=',axios)

Page({

  /**
   * 页面的初始数据,类似于Vue
   */
  data: {
    msg:'测试文件'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('test.onLoad',options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('test.onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('test.onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('test.onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('test.onUnload')
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

  formatDate(){
    return '202109-28'
  },

  gotoList(){
    // 编程式导航
    // wx.navigateTo({
    //   url: '/pages/list/list',
    // })
    // wx.redirectTo({
    //   url: '/pages/list/list',
    // })
    // wx.switchTab({
    //   url: '/pages/list/list',
    // })
    wx.reLaunch({
      url: '/pages/list/list',
    })
  }
})