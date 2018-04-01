//app.js
var urls = require('./url')
var wxapi = require("./wxapi")

App({
  onLaunch: function () {
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
    userInfo:''
  }
});