import React from 'react'
import TodoItem from './TodoItem'

function TodoBody({list,removeItem,completeItem}) {
    // console.log('TodoBody.props',list);
    return (
        <tbody>
            {
                // props.list.map(item=>{
                //     return <TodoItem key={item.id}/>
                // })
                list.map((item,idx)=>(
                    <TodoItem 
                        key={item.id} 
                        item={item} 
                        idx={idx}
                        removeItem={removeItem}
                        completeItem={completeItem}
                    ></TodoItem>
                ))
            }
        </tbody>
    )
}

export default TodoBody