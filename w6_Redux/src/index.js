import React from 'react'
import {render} from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import App from './App'
import myContext from './context'
import {Provider} from 'react-redux'
import store from './store'

const Router = process.env.NODE_ENV === 'production' ? BrowserRouter : HashRouter;

render(
    <Provider store={store}>
        <myContext.Provider value={{a:10,b:20}}>
            <Router>
                <App/>
                {/* <Route component={App} /> */}
            </Router>
        </myContext.Provider>
    </Provider>
    ,
    document.querySelector('#app')
)