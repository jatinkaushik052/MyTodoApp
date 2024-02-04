import React, { useState } from 'react'
import '../component/AddTodo.css'

const AddTodo = ({addNewItem}) => {
    const [todo, setTodo] = useState("");
    const [date, setDate] = useState("");

    function getTodo(e) {
        setTodo(e.target.value)
    }
    function getDate(e) {
        setDate(e.target.value)
    }
    function onAdd() {
        addNewItem(todo,date)
        setTodo("")
        setDate("")
          
    }
    return (
       <div className='container'>
            <div class="myrow">
                <div className=""><input type='text' placeholder='Enter Todo Here' value={todo} onChange={getTodo}></input></div>
                <div className="dateinput"><input type='date' value={date} onChange={getDate} ></input></div>
                <div className=""><button type="button" className="btn btn-success mybtn " onClick={onAdd}>Add</button></div>
            </div>

            </div>
    )
}

export default AddTodo