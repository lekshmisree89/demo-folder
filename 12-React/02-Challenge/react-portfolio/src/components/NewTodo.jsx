import React, { useState } from 'react'


const NewTodo = ({setTodos}) => {
  const [todoInput,setTodoInput] =useState('')
  const handleFormSubmit = (e) => {
    e.preventDefault()
    todos.push({title:todoInput,completed:false})
    console.log(todos)
    //Build new todo object
    //Add new todo object to todos array
    //Update
      
    setTodoInput('')
  }
  return (
    <form onSubmit={handleFormSubmit}
      
    
  
      <label htmlFor='todo'>Add a new todo</label>
      <input
      id='todoInput'
       type="text" 
       name='todo'
       placeholder="Add a new todo" />
       value={todoInput}
       onChange={(e)=>setTodoInput(e.target.value)}
      <button type="submit">Add</button>
    </form>
  
    
  )
}

export default NewTodo;