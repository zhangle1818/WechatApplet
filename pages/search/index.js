import request from '../../utils/request'
// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 是否显示取消按钮
    showCancel: true,
    // 输入框的值
    searchValue: "",
    // 本地历史
    keywords: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  onShow() {
    this.setData({
      keywords: wx.getStorageSync("searchHistory") || []
    })
  },
  // 获取输入框的值
  handleInput(e) {
    const { value } = e.detail
    const showCancel = value.trim() ? true : false
    this.setData({
      showCancel,
      searchValue: value
    })
  },
  // 键盘事件
  handlleConfirm() {

    // 储存本地数据
    const historyData = wx.getStorageSync("searchHistory") || []

    historyData.unshift(this.data.searchValue)

    wx.setStorageSync("searchHistory", historyData)

    // 跳转到搜索列表页
    wx.navigateTo({
      url: "/pages/goods_list/index?query=" + this.data.searchValue
    })
    this.setData({
      showCancel: false,
      searchValue: ''
    })

  },
  // 取消搜索
  handleCancel() {
    this.setData({
      showCancel: false,
      searchValue: ''
    })
  },
  // 清除浏览历史
  handleClear() { 
    wx.removeStorageSync("searchHistory");

    this.setData({
      keywords:[]
    })
  }

})