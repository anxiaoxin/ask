const app = getApp()

Page({
  data: {
    ans_height: "",
    likeSvgUrl: "../../assets/img/good.svg",
    likeNum: 144,
    qContent:'',
    sex: "",
    sexUrl: "",
    hiddenSex: true
  },
  onLoad: function () {
    var that = this;
    console.log(app.globalData);
    var qContentData = app.globalData.qInfo.qContent;
    var userSex = app.globalData.userInfo.gender;
    var sexUrl = "../../assets/img/" + (userSex  ? "man" : "woman") + ".svg";
    this.setData({
      qContent: qContentData,
      sex: userSex,
      sexUrl: sexUrl
    });
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          ans_height: res.windowHeight - Math.ceil((qContentData.length + 2) / 25) * 19 - 130
        })
      },
    })
  },
  hiddenSex: function(){
    var that = this;
    clearTimeout(hiddenFun);
    var hiddenFun = setTimeout(function(){
        that.setData({
          hiddenSex: true
        })
    },1000)
    this.setData({
      hiddenSex: false
    })
  }
})