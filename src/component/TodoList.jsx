import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../component/TodoList.css'
const TodoList = ({todoName,todoDate,onDelelteClick}) => {

  return (
   <>

   <div className="myrow">
    <div className="">
    {todoName}
   
    </div>
    <div className="">
     {todoDate}
   
    </div>
    <div className="">
    <button type="button" className="btn btn-danger mybtn" onClick={()=> onDelelteClick(todoName)} >Delete</button>
    </div>
    </div> 

     </>
  )
}

export default TodoList