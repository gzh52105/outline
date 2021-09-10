import React from 'react'

import {HashRouter,BrowserRouter,Route,Redirect,Switch,Link,NavLink} from 'react-router-dom'

import Login from './views/Login'
import Home from './views/Home'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            
        }
    }
    render(){
        return (
            <div>
                App
                
                <nav>
                    <NavLink to="/home" activeStyle={{color:'#f00'}}>首页</NavLink>
                    <NavLink to="/login" activeStyle={{color:'#f00'}}>登录</NavLink>
                </nav>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <Route path="/notfound" 
                        // render={()=><div>notfound</div>}
                        >
                            <div>404, 您访问的页面不存在</div>
                        </Route>

                        {/* 重定向 */}
                        <Redirect from="/" to="/home" exact />
                        <Redirect to="/notfound" />
                    </Switch>

            </div>
        )
    }
}

export default App;