import React, { useState } from 'react';
import './Assets/Style_modules/css-styles/main.css';
import Form from './Components/Form/Form.js';
import TaskList from './Components/TaskList/TaskList.js';

function Test() {
    const [inputText, setInputText] = useState(''); 
    const [todos, setTodos] = useState([]);

    return (
        <main className='MainBlock'>
            <h1 className='title'>Task list App</h1>
            <div className='inputContainer'>
                <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/> 
                <TaskList setTodos={setTodos} todos={todos} inputText={inputText}/>
            </div>
        </main>
    )
}
export default Test;
