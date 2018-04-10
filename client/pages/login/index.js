//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    askHeight: 400
  },
  onLoad: function () {
    //在登录页请求数据
    if(!app.globalData.qInfo){
      app.globalData.qInfo = {
        image: "../../assets/img/head2.jpg",
        qContent: "话说天下大势，分久必合，合久必分。周末七国分争，并入于秦。及秦灭之后，楚、汉分争，又并入于汉。汉朝自高祖斩白蛇而起义，一统天下，后来光武中兴，传至献帝，遂分为三国。推其致乱之由，殆始于桓、灵二帝。",
      };
    }
    if(app.globalData.userInfo){
      this.redirectToMain();
    }else{
      app.redirectToMain = this.redirectToMain;
    }
  },
  redirectToMain: function(){
    setTimeout(function () {
      wx.redirectTo({
        url: '../main/main',
      })
    }, 200)
  }
})
