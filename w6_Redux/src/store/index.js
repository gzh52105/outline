import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducers'
import {composeWithDevTools } from 'redux-devtools-extension';

// 1.引入saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga'

// 2.创建saga中间件
const sagaMiddleware = createSagaMiddleware();

// 3.包装saga中间件
let sagaEnhancer = applyMiddleware(sagaMiddleware)

// 为什么没要使用redux
// 1. 把数据进行全局共享
// 2. 可以在任意组件中修改

// 2. 包装thunk中间件
const thunkEnhancer = applyMiddleware(thunk)

// 把多个中间件组合成一个中间件
// const enhancer = compose(sagaEnhancer,thunkEnhancer,composeWithDevTools())
const enhancer = composeWithDevTools(sagaEnhancer,thunkEnhancer)

// 4. 将中间件 连接至 Store
const store = createStore(reducer,enhancer);

// 5.引入并运行自定义Saga配置
sagaMiddleware.run(rootSaga);

export default store;


// store.dispatch({type:'login_async',payload:{username:'laoxie',password:123456}})
