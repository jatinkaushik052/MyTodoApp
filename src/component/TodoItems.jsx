import React from 'react'
import TodoList from './TodoList'
import 'bootstrap/dist/css/bootstrap.css'


const TodoItems = ({ todoItem ,onDelelteClick}) => {
    return (
        <>
        {todoItem.map((item)=><TodoList todoName={item.name} todoDate={item.date} onDelelteClick={onDelelteClick} />)}
        </>
    )
}

export default TodoItems