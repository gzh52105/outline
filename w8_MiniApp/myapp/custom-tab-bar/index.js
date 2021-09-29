// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    current:'/pages/index/index',
    "list":[
      {
        "text": "首页",
        "pagePath":"/pages/index/index",
        "iconPath": "/assets/img/home.png",
        "selectedIconPath": "/assets/img/home_active.png"
      },
      
      {
        "text": "列表",
        "pagePath":"/pages/list/list",
        "iconPath": "/assets/img/list.png",
        "selectedIconPath": "/assets/img/list_active.png"
      },
      {
        "text": "我的",
        "pagePath":"/pages/mine/mine",
        "iconPath": "/assets/img/mine.png",
        "selectedIconPath": "/assets/img/mine_active.png"
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  lifetimes:{
    ready(){
      const currentPage = getCurrentPages();
      console.log('currentPage',currentPage)
      this.setData({
        current:'/'+ currentPage[0].route
      })
    }
  }
})
