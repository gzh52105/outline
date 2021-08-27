import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
// 引入样式
import 'vant/lib/index.css'

import router from './router'
import request from '@/utils/request'

// 设置Vue原型
Vue.prototype.$request = request;


// 安装插件：在内部注册60+全局组件
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  // 4. 把router实例注入到vue实例中
  router,
  render: h => h(App),
}).$mount('#app')
