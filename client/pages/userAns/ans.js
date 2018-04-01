const app = getApp()

Page({
  data: {
    ans_height: "",
    likeSvgUrl: "../../assets/img/good.svg",
    likeNum: 144,
    likeUnCliked: true
  },
  onLoad: function(){
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          ans_height: res.windowHeight - 74
        })       
      },
    })
  },
  like: function(){
    if (this.data.likeUnCliked){
      var num = this.data.likeNum + 1;
      this.setData({
        likeSvgUrl: "../../assets/img/good_click.svg",
        likeNum: num,
        likeUnCliked: false
      })
    }
  }
})