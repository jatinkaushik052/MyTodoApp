import { useState } from 'react';
import './App.css';
import AddTodo from './component/AddTodo';
import 'bootstrap/dist/css/bootstrap.css'
import TodoItems from './component/TodoItems';
import Todomsg from './component/Todomsg';

function App() {

  
  let [todoItem, setTodoItem] = useState([]);

  const addNewItem = (itemName, itemDate) => {
    const itemAdd=[...todoItem,{
      name :itemName,
      date:itemDate
    }]
    setTodoItem(itemAdd) 

  }

  const handleDeleteItem = (itemName) => {
    const newTodoItem= todoItem.filter(item => item.name!== itemName)
    setTodoItem(newTodoItem)
  }
  return (
    <div className='body'>
      <div className='container'>
        <center>
          <h1>My Todo App</h1>
          <AddTodo addNewItem={addNewItem} />
          {todoItem.length === 0 ? <Todomsg/> :<TodoItems  todoItem={todoItem}  onDelelteClick={handleDeleteItem}/>}
          
        </center>
      </div>
    </div>
  );
}
export default App;
