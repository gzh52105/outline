import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import request,{baseUrl} from './utils/request'
// 全局引入
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)

// 按需引入(用什么就只引入什么)
// 手动按需引入(缺点:繁琐)
// import Button from 'element-ui/lib/button'
// import 'element-ui/lib/theme-chalk/button.css'
// Vue.use(Button)

// 利用工具(babel-plugin-component)实现按需引入
// 只需要配置Babel选项(.babelrc),然后直接执行以下引入方式
import {Message,Row,Col,Button,Form,FormItem,Input,Select,Table,TableColumn,Container,Aside,Header,Main,Pagination} from 'element-ui'
Vue.use(Row)
Vue.use(Col)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)


Vue.prototype.$request = request;
Vue.prototype.$baseUrl = baseUrl;
// 消息提示
Vue.prototype.$message = Message;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
