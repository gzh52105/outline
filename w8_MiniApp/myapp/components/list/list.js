import myBehavior from '../mixins/myBehavior'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    index:{
      type:Number,
      optionalTypes:[String],
      value:0,
      // 监听index属性的变化
      observer:function(o,n){

      }
    }
  },

  /**
   * 组件的初始数据（类似与Vue中的data）
   */
  data: {

  },

  /**
   * 组件数据字段监听器，用于监听 properties 和 data 的变化（类似与Vue中的watch）
   */
  observers:{

  },

  /**
   * 组件的方法列表（类似Vue中的methods）
   */
  methods: {

  },

    // 使用外外部样式
  externalClasses:['price'],

  // 旧版生命周期函数编写位置
  // created(){}

  // 新版建议把生命周期函数写在lifetimes中
  lifetimes:{
    created(){

    }
  },
  // 在组建中实现页面生命周期监听
  pageLifetimes:{
    onLoad(){

    },
    onShow(){

    },
    onHide(){

    }
  },

  // behaviors: 类似Vue中的mixins
  behaviors:[myBehavior],
})


/**
  // myBehavior.js
  module.exports = Behavior({
    // 这里的代码就是组件公共配置（与组件一致）
    behaviors: [],
    properties: {
      myBehaviorProperty: {
        type: String
      }
    },
    data: {
      myBehaviorData: {}
    },
    attached: function(){},
    methods: {
      myBehaviorMethod: function(){}
    }
  })
 */