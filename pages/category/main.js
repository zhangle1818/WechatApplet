import request from '../../utils/request'
// pages/category/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 分类数据
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request({ url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories' }).then(res => {
      console.log(res);
      const { message } = res.data
      this.setData({
        list: message
      })
    })
  },

})