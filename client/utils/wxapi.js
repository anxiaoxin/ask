var config = require('./config')
var qcloud = require('../vendor/wafer2-client-sdk/index')

var wxapi = {
  login: function(app){

    qcloud.setLoginUrl(config.service.loginUrl);
    qcloud.login({
      success: function (userInfo) {
        console.log('登录成功', userInfo);
      },
      fail: function (err) {
        console.log('登录失败', err);
      }
    });
    var that = this;
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
        if (app.redirectToMain){
          app.redirectToMain();
        }
      }
    })
  },
}
module.exports = wxapi;