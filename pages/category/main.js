import request from '../../utils/request'
// pages/category/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 菜单数据
    list: [],
    // 当前选中的索引
    current: 0,
    scrollTop:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    request({ url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories' }).then(res => {
      const { message } = res.data
      this.setData({
        list: message
      })
      console.log(this.data.list[this.data.current].children);
      
    })
  },
  handleindex(e) {
    const scrollTop=0
    this.setData({
      current: e.currentTarget.dataset.index,
      scrollTop
    })
  }
})