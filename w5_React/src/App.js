import React from 'react'
import Lifecycle from './components/Lifecycle'

// export default function App(){

// }

// function App(){

// }
// const App = ()=>(
//     <div>
//         App
//         <Lifecycle/>
//     </div>
// )

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            age:18,
            show:true,
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                age:20,
            })
        },3000)
    }
    render(){
        return (
            <div>
                App
                {
                    this.state.show ? 
                    <Lifecycle age={this.state.age} />
                    :
                    <div>隐藏</div>
                }

                <button onClick={()=>{
                    this.setState({
                        show:!this.state.show
                    })
                }}>显示/隐藏</button>
            </div>
        )
    }
}

export default App;