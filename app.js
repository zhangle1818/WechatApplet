import request from './utils/request'
//app.js
App({

  onLaunch: function () {
    
    // 指定基准路径
    request.defaults.baseURL = "https://api-hmugo-web.itheima.net/"
  },
})