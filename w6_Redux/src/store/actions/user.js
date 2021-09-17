import request from '@/utils/request'

export function login(userInfo){
    return {
        type:'login',
        userInfo
    }
}

export function logout(){
    return {
        type:'logout'
    }
}

export function update(data){
    return {
        type:'update',
        data
    }
}

// 使用中间件后，actionCreate支持返回一个函数实现异步操作
export function loginAsync(values){
    return async function(dispatch){
        const data = await request.post('/login',values)
        
        if(data.code === 200){
            dispatch(login(data.data))
        }
        
        return data
    }
}

// dispatch(loginAsync())

export default {
    login,
    logout,
    loginAsync,
}