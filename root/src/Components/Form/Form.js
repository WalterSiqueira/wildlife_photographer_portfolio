import React from 'react';
import plus from '../../Assets/Images/square-plus-regular.svg';
function Form({displayChanger, setInputText, inputText, setTodos, todos} ) {
    const limitHandler = (e) => {
        e.preventDefault();
        if (inputText.length >= 100) {
            displayChanger();
            return console.log('limit reached please type less than 100 characters');
        } else {
            displayChanger();
            submitTodo();
            return console.log('still safe');
        }
    }
    const inputHandler = (e) => {
        e.preventDefault();
        setInputText(e.target.value);
    }
    const submitTodo = (e) => {
        setTodos([
            ...todos,
            {text: inputText, id: Math.random() * 1000, completed: false,}
            
        ]);
        setInputText('');
    }
    return (
            <form className='formBox'>
                <input value={inputText} className='inputBar' onChange={inputHandler} placeholder="Type here"type='text'/>
                <button className='addbtn' onClick={limitHandler}>
                    <img className='plusIcon' src={plus}/> 
                </button>
            </form>
    )
}

export default Form;
