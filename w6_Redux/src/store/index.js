import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducers'

// 为什么没要使用redux
// 1. 把数据进行全局共享
// 2. 可以在任意组件中修改

// 2. 包装中间件
const enhancer = applyMiddleware(thunk)

// createStore只支持一个reducer
const store = createStore(reducer,enhancer);

export default store;

console.log('store',store.getState())