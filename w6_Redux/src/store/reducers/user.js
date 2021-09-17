// 每一个模块有自己state和reducer

let userInfo = localStorage.getItem('userInfo')
try{
    userInfo = JSON.parse(userInfo) || {}
}catch(err){
    userInfo = {}
}

// 初始状态
const initState = {
    userInfo,
}

// reducer: 是一个用于修改state的纯函数，接收state,action作为参数，且必须返回一个新的state
const reducer = function(state=initState,action){
    switch(action.type){
        // dipatch({type:'login',userInfo})
        case 'login':
            localStorage.setItem('userInfo',JSON.stringify(action.userInfo))
            return {
                ...state,
                userInfo:action.userInfo
            }
        // dispatch({type:'logout'})
        case 'logout':
            localStorage.removeItem('userInfo')
            return {
                ...state,
                userInfo:{}
            }
        
        default:
            return state;
    }
}

export default reducer