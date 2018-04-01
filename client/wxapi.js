var config = require('./url')
var wxapi = {
  login: function(app){
    var that = this;
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: config.service.loginUrl,
          data: res.code,
          success: res => {
            console.log(res);
          }
        })
      }
    })
    //用户是否已授权访问用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          that.getUserInfo(app);
        } else {
          //如果未授权进行授权申请
          wx.authorize({
            scope: 'scope.userInfo',
            success: res => {
              that.getUserInfo(app);
            },
            fail: res => {
              //表示用户未同意
            }
          })
        }
      },
    })
  },
  //获得用户信息
  getUserInfo: function (app) {  
    wx.getUserInfo({
      success: res => {
        app.globalData.userInfo = res.userInfo;
        if (app.userInfoReadyCallback) {
          app.userInfoReadyCallback(res);
        }  
      }
    })
  },
}
module.exports = wxapi;