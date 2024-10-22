import React from 'react'

const TodoList = ({todos}) => {

    
  return (
    <div>
        <ul>
            {todos.map((todo,index)=>(
                <li key={index}>{todo.title}</li>
            ))}
            
        </ul>


    </div>
  )
}

export default TodoList