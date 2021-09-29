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