import React from 'react'
import {render} from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import App from './App'
import myContext from './context'
import {Provider} from 'react-redux'
import store from './store'

// 自定义redux测试
// import {createStore} from './myredux'
// const initState = {
//     userInfo:{}
// }
// const myreducer = function(state,action){
//     switch(action.type){
//         case 'login':
//             return {
//                 ...state,
//                 userInfo:action.userInfo
//             }
//         case 'logout':
//             return {
//                 ...state,
//                 userInfo:{}
//             }
//         default:
//             return state;
//     }
// }
// const mystore = createStore(myreducer,initState);
// console.log('mystate1=',mystore.getState())
// const unsubscribe1 = mystore.subscribe(function(state){
//     // 订阅，这里的代码不会立即执行，而是等state被修改时自动执行
//     console.log('subscribe1',state)
// })
// const unsubscribe2 = mystore.subscribe(function(state){
//     // 订阅，这里的代码不会立即执行，而是等state被修改时自动执行
//     console.log('subscribe2',state)
// })

// mystore.dispatch({type:'login',userInfo:{username:'laoxie',_id:123,token:'adkdsf'}})
// console.log('mystate2=',mystore.getState())

// 5s后取消订阅
// setTimeout(()=>{
//     unsubscribe1()
//     // unsubscribe2()
//     mystore.dispatch({type:'logout'})
//     console.log('mystate3=',mystore.getState())
// },5000)

const Router = process.env.NODE_ENV === 'production' ? BrowserRouter : HashRouter;

render(
    <Provider store={store}>
        {/* context.Provier */}
        <myContext.Provider value={{a:10,b:20}}>
            <Router>
                <App/>
                {/* <Route component={App} /> */}
            </Router>
        </myContext.Provider>
    </Provider>
    ,
    document.querySelector('#app')
)