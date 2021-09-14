import React, { useState, useEffect, useMemo, useCallback, useReducer } from 'react'

// 初始状态
const initState = [
    { id: 1, name: "goods1", price: 98, qty: 2 },
    { id: 2, name: "goods2", price: 198, qty: 2 },
    { id: 3, name: "goods3", price: 998, qty: 1 },
];

// 自定义修改state的方式
// reducer必须为纯函数，且必须返回一个新的state
const reducer = function (state, action) {
    // state: 状态
    // action: 调用dispatch时传入的参数
    console.log('action', action); // {type:'add'},{type:'delete'}
    switch (action.type) {
        // dispatch({type:'add',goods})
        case 'add':
            return [action.goods, ...state]
        case 'delete':
            return state.filter(item => item.id !== action.id)
        // case 'changeqty':
        // case 'clear':

    }
}

function UseReducer(props) {
    console.log('start')
    const [qty, setQty] = useState(1);
    const [count, setCount] = useState(10);
    const [cartlist, dispatch] = useReducer(reducer, initState);
    // 获取状态：state
    // 修改状态：当调用dispatch时，参数会自动传入reducer
    // * dispatch({type:'add',goods})
    // * dispatch({type:'delete',id:1})

    // 计算总价
    const totalPrice = useMemo(()=>{
        return cartlist.reduce((val,item)=>val+item.price*item.qty,0)
    },[cartlist])

    const removeItem = useCallback(function(id){
        dispatch({type:'delete',id})
    },[])
    const addItem = useCallback(function(){
        const id = parseInt(Math.random()*100000)
        const goods = {id , name: "goods"+id, price: 98, qty: 1}
        dispatch({type:'add',goods})
    },[])
    const changeQty = useCallback(function(){
        
    },[])

    console.log('end')
    return (
        <div>
            <h4>useReducer</h4>
            <button onClick={() => {
                setCount(count + 1)
            }}>count:{count}</button>
            <ul>
            {
                cartlist.map(item=>(
                    <li key={item.id}>
                        <h5>{item.name}</h5>
                        <p>{item.price} &times; <input type="number" value={item.qty} onChange={changeQty} /></p>
                        <button onClick={removeItem.bind(null,item.id)}>删除</button>
                    </li>
                ))
            }
            </ul>
            <button onClick={addItem}>添加</button>
            <button>清空购物车</button>

            <div>总价：{totalPrice}</div>
        </div>
    )
}

export default UseReducer