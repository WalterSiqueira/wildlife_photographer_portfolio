import React from 'react';
import check from '../../Assets/Images/square-check-solid.svg';
import trash from '../../Assets/Images/trash-solid.svg';

function Task( {inputText,todo, todos, setTodos, text, id} ) {
    const deleteHandler = () => {
      setTodos(todos.filter((el) => el.id !== todo.id));
    };
    
    return (
        <div id={id} className='taskListBlock'>
            <li className='titleTaskList'>{text}</li>
            <button className='checkBTN'>  
                <img className='checkIcon' src={check}/>
            </button>
            <button onClick={deleteHandler} className='trashBTN'>
                <img className='trashIcon' src={trash}/>
            </button>
        </div>
    )
}

export default Task;
