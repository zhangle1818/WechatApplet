import request from '../../utils/request'
// pages/goods_list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // title的数据
    goods_title: ["综合", "销量", "价格"],
    // 商品列表数据
    goods: [],
    // 选中的索引
    current: 0,
    // 页码
    pagenum: 1,
    // 页容量
    pagesize: 10,
    // url搜索关键字，分类页传递过来的
    query: '',
    // 是否有更多
    hasMore: true,
    // 函数节流，判断上次请求是否成功，成功之后再允许请求下一页数据
    loading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { query } = options;
    this.setData({
      query
    })
    this.getList()
  },
  // 获取商品列表数据
  getList() {
    //  正在加载
    if (this.data.loading === true) {
      return
    }
    // 开始加载数据
    this.setData({
      loading: true
    });
    request({
      url: 'api/public/v1/goods/search', data: {
        query: this.data.query,
        pagenum: this.data.pagenum,
        pagesize: this.data.pagesize
      }
    }).then(res => {
      const { goods } = res.data.message;
      // 判断是否是最后一页
      if (goods.length < 10) {
        this.setData({
          hasMore: false
        })
      }
      // 价格保存后2位
      const newGoods = goods.map(v => {
        v.goods_price = Number(v.goods_price).toFixed(2)
        return v
      })

      this.setData({
        goods: [...this.data.goods, ...newGoods],
        pagenum: this.data.pagenum + 1,
        loading: false
      })
    })
  },
  // 触底事件
  onReachBottom() {
    setTimeout(() => {
      if (this.data.hasMore) {
        this.getList()
      }
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  handleActiveIndex(e) {

    const current = e.currentTarget.dataset.index
    this.setData({
      current
    })

  }
})