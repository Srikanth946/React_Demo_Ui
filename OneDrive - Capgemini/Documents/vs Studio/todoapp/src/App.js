
import './App.css';
import Todo from './components/Todo';
import {useState} from 'react';
import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';
import TodoForm from './components/TodoForm';

function App() {

  const [todo,setTodo]= useState([{
    title: "First Todo",
    complete:false},
    {
      title:"Second Todo",
      complete:false

    },
  {
    title:"third todo",
    complete:false
  }])
  return (
    <div>
      <h1 className="heading">Todo Management Application</h1>
      {todo.map(todo=>(
        <Todo todo={todo}/>
      ) )}
      <TodoForm/>
    </div>
  );
}

export default App;
