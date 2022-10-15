import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form/Form.js';
import TaskList from './Components/TaskList/TaskList.js';

function Test() {
    const [inputText, setInputText] = useState(''); 
    const [todos, setTodos] = useState([]);

    return (
        <main className='MainBlock'>
            <h1 className='title'>task list: </h1>
            <div className='inputContainer'>
                <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/> 
                <TaskList todos={todos} inputText={inputText}/>
            </div>
        </main>
    )
}
export default Test;
