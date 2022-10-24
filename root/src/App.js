import React, { useState, useRef } from 'react';
import './Assets/Style_modules/css-styles/main.css';
import Form from './Components/Form/Form.js';
import TaskList from './Components/TaskList/TaskList.js';

function Test() {
    const [inputText, setInputText] = useState(''); 
    const [todos, setTodos] = useState([]);
    const warning = useRef(0);
    const displayChanger = () => {
        if (warning.current.style.display == 'none') {
            warning.current.style.display = 'block';
        } else {
            warning.current.style.display = 'none';
        }
    }
    return (
        <main className='MainBlock'>
            <h1 className='title'>Task list App</h1>
            <h2 className='warning' ref={warning}> Please type less than 100 characters</h2>
            <div className='inputContainer'>
                <Form warning={warning} displayChanger={displayChanger} todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/> 
                <TaskList setTodos={setTodos} todos={todos} inputText={inputText}/>
            </div>
        </main>
    )
}
export default Test;
