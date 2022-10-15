import React from 'react';
import Task from '../Task/task.js';

function TaskList( {inputText, todos} ) {
    return (
        <div className="TaskContainer"> 
            <ul className='taskListContainer'>
                {todos.map(todo => (
                    <Task key={todo.id} text={todo.text} id={todo.id}/>
                ))}
            </ul> 
        </div>
    )
}

export default TaskList;
