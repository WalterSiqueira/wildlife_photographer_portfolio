import React from 'react';
import plus from '../../Assets/Images/square-plus-regular.svg';
function Form({setInputText}) {
    const inputHandler = (e) => {
        e.preventDefault();
        setInputText(e.target.value);
    }
    return (
        <form className='formBox'>
            <input className='inputBar' onChange={inputHandler} placeholder="Type here"type='text'/>
            <button className='addbtn'>
                 <img className='plusIcon' src={plus}/> 
            </button>
        </form>
    )
}

export default Form;
