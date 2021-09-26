import React,{lazy,Suspense} from 'react'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import { withStorage } from './utils/hoc';
import {LoadingOutlined} from '@ant-design/icons'

// 传统路由写法
import Login from './views/Login'
// import Manage from './views/Manage'

// 路由懒加载
// const Login = lazy(() => import("./views/Login"));
const Manage = lazy(() => import("./views/Manage"));


import 'antd/dist/antd.css';
import './App.scss'

@withStorage('userInfo')
@withRouter
class App extends React.Component {
    componentDidMount(){
        this.props.history.listen((location)=>{
            // 路由改变时会触发这里的方法
            console.log('listen',location)
        })
    }
    render() {
        let {userInfo} = this.props
        if(!userInfo){
            userInfo = {}
        }
        const isLogin = !!userInfo._id
        return (
            <Suspense fallback={<LoadingOutlined />}>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/manage" component={Manage} />
                    <Redirect from="/" to="/login" exact />
                </Switch>
            </Suspense>
        )
    }
}

export default App;