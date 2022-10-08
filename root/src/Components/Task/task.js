import React from 'react';
import check from '../../Assets/Images/square-check-solid.svg';
import trash from '../../Assets/Images/trash-solid.svg';

function Task() {
    return (
        <div className='taskListBlock'>
            <p className='titleTaskList'></p>
            <button className='checkBTN'>  
                <img className='checkIcon' src={check}/>
            </button>
            <button className='trashBTN'>
                <img className='trashIcon' src={trash}/>
            </button>
        </div>
    )
}

export default Task;
