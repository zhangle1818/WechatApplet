// components/category-menu/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    menuList: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    current:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleChange(e) {
      this.setData({
        current:e.target.dataset.index
      })
    }
  }
})
