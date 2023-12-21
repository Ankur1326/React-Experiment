import React, { useState } from "react";
import { addTodo } from "./todoSlice";
import { useDispatch, useSelector } from 'react-redux'

function TodoApp() {
  const todos = useSelector((state) => state)
  console.log(todos);
  const dispatch = useDispatch()
  const [newTodo, setNewTodo] = useState("")

  const handleAddTodo = () => {
    if (newTodo.trim !== '') {
      dispatch(addTodo(newTodo))
    }
  } 

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} /> 
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo) => {
          <li key={todo.id} >
            {todo.text}
          </li>

        })}
      </ul>
    </div>
  );
}

export default TodoApp;
