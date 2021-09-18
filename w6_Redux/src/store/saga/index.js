/** 
 * saga配置
 */

import { takeEvery,takeLatest,put } from 'redux-saga/effects'
import request from '@/utils/request'
import userAction from '../actions/user'

function * init(){
    console.log('hello saga')
    // 监听saga action
    yield takeLatest('login_async',login)

}

function * login(action){
    console.log('login',action)
    const data = yield request.post('/login',action.userInfo)
    console.log('data',data)

    // 发起reducer action
    yield put(userAction.login(data.data))
    action.success(data);
}


export default init;