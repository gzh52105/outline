import React from 'react'
import { Input,Button } from 'antd'
import {withUser,withAuth} from '../utils/hoc'

// function Login(){
//     return (
//         <div>
//             Login
//         </div>
//     )
// }
class Login extends React.Component{
    render(){
        console.log('Login.render')
        return (
            <div>
                Login
                <Input />
                <Button type="primary">登录</Button>
            </div>
        )
    }
}


// Login = withAuth(Login)

export default Login;