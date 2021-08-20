// 模块化开发：ESModule
// Webpack构建工具
import Vue from 'vue'
import App from './App.vue'

// // ESMoudle测试代码
// // 导出模块对象中所有属性并赋值到all变量
// import * as all from './module/a'

// // 导入模块对象中的default属性（变量名可以为任意名称）
// import b from './module/a.js';

// // 导入模块对象中的username属性
// import {username} from './module/a'

// // 导出模块对象中的username属性，并赋值给name变量
// import {username as name} from './module/a'

// console.log('all=',all);
// console.log('username=',username,name)
// console.log('a=',b);


Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  // render:function(createElement){
  //   // createElement('div')
  //   // createElement(组件配置)
  //   return createElement(App)
  // }
}).$mount('#app')
