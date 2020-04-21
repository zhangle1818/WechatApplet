import request from '../../utils/request'
// pages/goods_detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 详情的数据
    detail: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { goods_id } = options

    this.getDateil(goods_id)
  },
  // 获取详情数据
  getDateil(goods_id) {
    request({
      url: 'api/public/v1/goods/detail',
      data: {
        goods_id
      }
    }).then(res => {
      const { message } = res.data
      console.log(message);
      this.setData({
        detail: message
      })
    })
  },
  // 点击预览
  hamdlePreview(e) {
    const { src } = e.currentTarget.dataset
    // 获取接口中的轮播图图片的大图  数组 自己构造
    const urls = this.data.detail.pics.map(v => {
      return v.pics_big
    })
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: urls // 需要预览的图片http链接列表
    })
  },
  // 跳转到购物车页面
  handleTocart() {
    wx.switchTab({
      url: '/pages/cart/index',
    })
  }
})