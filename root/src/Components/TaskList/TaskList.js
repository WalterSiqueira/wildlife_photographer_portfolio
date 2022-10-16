import React from 'react';
import Task from '../Task/task.js';

function TaskList( {inputText, todos, setTodos} ) {
    return (
        <div className="TaskContainer"> 
            <ul className='taskListContainer'>
                {todos.map(todo => (
                    <Task todo={todo} todos={todos} setTodos={setTodos} key={todo.id} text={todo.text} id={todo.id}/>
                ))}
            </ul> 
        </div>
    )
}

export default TaskList;
