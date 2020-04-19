import request from '../../utils/request'
Page({
  data: {
    // 轮播图数据
    banners: [],
    // 菜单数据
    menus: [],
    // 楼层数据
    floor:[]
  },

  onLoad() {

    // 获取轮播图数据
    request({ url: 'api/public/v1/home/swiperdata' }).then(res => {
      const { message } = res.data
      this.setData({
        banners: message
      })
    })

    // 获取菜单数据
    request({ url: 'api/public/v1/home/catitems' }).then(res => {
      const { message } = res.data 
      console.log(message);
      
      this.setData({
        menus:message
      })
    })

    // 获取楼层数据
    request({ url: 'api/public/v1/home/floordata' }).then(res => {
      const { message } = res.data
      this.setData({
        floor:message
      })
    })
  }
})