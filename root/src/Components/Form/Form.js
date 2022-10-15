import React from 'react';
import plus from '../../Assets/Images/square-plus-regular.svg';
function Form({setInputText, inputText, setTodos, todos} ) {
    const inputHandler = (e) => {
        e.preventDefault();
        setInputText(e.target.value);
    }
    const submitTodo = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, id: Math.random() * 1000}
            
        ]);
        setInputText('');
    }
    return (
        <div>
            <form className='formBox'>
                <input value={inputText} className='inputBar' onChange={inputHandler} placeholder="Type here"type='text'/>
                <button className='addbtn' onClick={submitTodo}>
                    <img className='plusIcon' src={plus}/> 
                </button>
            </form>
        </div>
    )
}

export default Form;
