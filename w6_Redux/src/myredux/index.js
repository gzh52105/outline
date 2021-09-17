/** 
 * 利用发布订阅模式实现简易 redux
 */
export function createStore(reducer,initState){
    let state = initState || reducer();
    let listeners = new Set(); // [listener1,listener2]

    // 获取state
    const getState = function(){
        return state;
    }

    const dispatch = function(action){
        state = reducer(state,action);

        // 发布
        listeners.forEach(listener=>{
            listener(state);
        })

        return action;
    }

    // 订阅
    const subscribe = function(fn){
        listeners.add(fn);
        return function unsubscribe(){
            //如何取消订阅
            listeners.delete(fn)
        }
    }

    const replaceReducer = function(newReducer){
        reducer = newReducer
    }

    return {
        getState,
        dispatch,
        subscribe,
        replaceReducer
    }
}

// 使用
// import {createStore} from 'redux'
// const store = createStore(reducer,initState)
// store = {getState,dispatch,subscribe,replaceReducer}
// store.getState(); 
// 监听
// store.subscribe(function(){
//     // 订阅，这里的代码不会立即执行，而是等state被修改时自动执行
//     console.log('subscribe1')
// })
// store.subscribe(function(){
//     // 订阅，这里的代码不会立即执行，而是等state被修改时自动执行
//     console.log('subscribe2')
// })
// store.dispatch({type:'login',userInfo})
// store.getState()