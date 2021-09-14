import React from 'react';

import UseState  from './UseState';
import UseEffect  from './UseEffect';

function Hooks(){
    const [show,changeShow] = React.useState(true)
    return (
        <div>
            <h2>Hooks</h2>
            {/* <UseState /> */}
            {
                show ? 
                <UseEffect />
                :
                <div>已销毁</div>
            }
            <button onClick={()=>{
                changeShow(!show)
            }}>{show ? 'show' : 'hide'}</button>
        </div>
    )
}

export default Hooks;