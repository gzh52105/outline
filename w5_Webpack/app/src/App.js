import React from 'react'

import TodoList from './components/TodoList'
import './App.scss'

// import goods1 from './assets/goods1.jpg'
// import homeIcon from './assets/home_active.png'
// console.log('goods1=',goods1);
// console.log('homeIcon=',homeIcon);
// const homeIcon2 = require('./assets/home_active.png')
// console.log('homeIcon2',homeIcon2)

function App(){
    return <div>
        <h4>hey, 美女</h4>
        {/* <img src={goods1} />
        <img src={homeIcon} />
        <img src={require('./assets/home_active.png').default} />
        <img src="/goods3.jpg" /> */}
        <TodoList/>
    </div>
}

export default App
