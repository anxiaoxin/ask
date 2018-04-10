//app.js
var wxapi = require("./utils/wxapi")

App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: res => {
        this.globalData.phoneInfo = res;
        //如果该事件发生在login页面加载完后
      }
    })
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wxapi.login(this);
    // 检查用户授权并获取用户信息
  },
  globalData: {
    qInfo:'',
    userInfo:'',
    phoneInfo: {}
  }
});