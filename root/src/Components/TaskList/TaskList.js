import React from 'react';
import Task from '../Task/task.js';

function TaskList( {inputText, todos, setTodos} ) {
    const checkTodos = () => {
      for (i=0; i <= todos.length; i++) {
        if (todos[i] == "") {
          return false;
          break;
        } else {
          return true;
          break;
        }
      }
    }
    const loadTodos = () => {
      for (let i = 0; i <= localStorage.length; i++) {
        console.log(localStorage[i]);
      }
    }
    return (
        <div onLoad={loadTodos} className="TaskContainer"> 
            <ul className='taskListContainer'>
                {todos.map(todo => (
                    <Task todo={todo} todos={todos} setTodos={setTodos} key={todo.id} text={todo.text} id={todo.id}/>
                ))}
            </ul> 
        </div>
    )
}

export default TaskList;
