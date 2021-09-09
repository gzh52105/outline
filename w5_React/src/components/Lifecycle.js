import * as all from 'react'
import React,{Component,PureComponent} from 'react'

console.log('all',all);

class Lifecycle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:1
        }
        console.log('Lifecycle.constructor')

        // 改变函数this指向
        this.changeCount = this.changeCount.bind(this)
    }
    // 生命周期函数（钩子函数）
    UNSAFE_componentWillMount(){
        console.log('Lifecycle.componentWillMount')
    }
    componentDidMount(){
        console.log('Lifecycle.componentDidMount')
    }
    
    UNSAFE_componentWillReceiveProps(){
        console.log('Lifecycle.componentWillReceiveProps')

    }

    // shouldComponentUpdate必须返回Boolean
    // true: 允许更新(true)
    // false:不允许更新
    shouldComponentUpdate(nextProps,nextState){
        console.log('Lifecycle.shouldComponentUpdate',nextState.count)
        if(nextState.count%5===0){
            return true
        }else{
            return false;
        }
    }

    UNSAFE_componentWillUpdate(){
        console.log('Lifecycle.componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('Lifecycle.componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('Lifecycle.componentWillUnmount')
    }

    changeCount(){
        // console.log('changeCount=',this.state.count)
        this.setState({
            count:this.state.count+1
        },()=>{
            // this.forceUpdate()
        })
    }
    render(){
        console.log('Lifecycle.render')
        return (
            <div>
                <h4>React组件生命周期</h4>
                <button onClick={this.changeCount}>count:{this.state.count}</button>
            </div>
        )
    }
}

export default Lifecycle