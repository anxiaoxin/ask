const app = getApp()

Page({
  data:{
    qInfo:{
    },
    users:[
      {
        image: "../../assets/img/1.jpg",
        name: "联系人名称",
        userId:0,
        like: "99",
        time: "11:32",
        ans_abstract: "滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵(qiáo)江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中"
      },
      {
        image: "../../assets/img/2.jpeg",
        name: "联系人名称",
        userId: 1,        
        like: "132",
        time: "11:32",
        ans_abstract: "这是一个回答的具体内容，内容是..."
      },
      {
        image: "../../assets/img/3.jpg",
        name: "联系人名称",
        userId:2,        
        like: 249,
        time: "11:32",
        ans_abstract: "这是一个回答的具体内容，内容是..."
      },
      {
        image: "../../assets/img/4.jpg",
        name: "联系人名称",
        userId: 3,        
        like: "116",
        time: "11:32",
        ans_abstract: "这是一个回答的具体内容，内容是..."
      },
      {
        image: "../../assets/img/5.jpg",
        name: "联系人名称",
        userId:4,        
        like: "3",
        time: "11:32",
        ans_abstract: "这是一个回答的具体内容，内容是..."
      },
      {
        image: "../../assets/img/6.jpeg",
        name: "联系人名称",
        userId: 5,        
        like: "8",
        time: "11:32",
        ans_abstract: "这是一个回答的具体内容，内容是..."
      },
      {
        image: "../../assets/img/7.jpg",
        name: "联系人名称",
        userId: 6,
        like: "9",
        time: "11:32",
        ans_abstract: "这是一个回答的具体内容，内容是..."
      },                                    
    ],
    headAnimation: {},
    bdItemAnimation: {},
    headImageHeight: 0,
  },
	onLoad: function () {
		console.log("页面加载完成");
    console.log(app.globalData.phoneInfo);
    this.setData({
      qInfo: app.globalData.qInfo,
      headImageHeight: app.globalData.phoneInfo.windowWidth / 2
    })
    this.showAnimation();    
	},
	onReady: function () {
		console.log("页面初次渲染完成");
	},
	onShow: function () {
		console.log("页面显示")
	},
  showAnimation: function () {
    var headAnimation = wx.createAnimation({
      duration: 500,
      timingFunction: "ease-out",
      delay: 0,
    });
    var bdItemAnimation = wx.createAnimation({
      duration: 500,
      timingFunction: "ease-out",
      delay: 0
    })
    headAnimation.opacity(1).translateY(100).step();
    bdItemAnimation.opacity(1).translateY(-100).step();
    this.setData({
      headAnimation: headAnimation.export(),
      bdItemAnimation: bdItemAnimation.export(),
    })
  },
  writeAns: function () {
    wx.navigateTo({
      url: '../writeAns/writeAns',
    })    
  },
  ansContent: e => {
    wx.navigateTo({
      url: '../userAns/ans',
    })
  },
  writeQue: e => {
    wx.navigateTo({
      url: '../writeQue/que'
    })
  },
  aboutUs: e => {
    wx.navigateTo({
      url: '../aboutUs/about',
    })
  },
  goToBg: e => {
    wx.navigateTo({
      url: '../background/index',
    })
  },
  onShareAppMessage: res => {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      
    }
    return {
      title: '自定义转发标题',
      path: '/pages/main/main',
      success: res => {
        // 转发成功
      },
      fail: res => {
        // 转发失败
      }
    }
  }
})