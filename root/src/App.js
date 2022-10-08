import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form/Form.js';
import TaskList from './Components/TaskList/TaskList.js';

function Test() {
    const [inputText, setInputText] = useState(''); 
    return (
        <main className='MainBlock'>
            <h1 className='title'>task list: {inputText}</h1>
            <div className='inputContainer'>
                <Form setInputText={setInputText}/>
                <TaskList/>
            </div>
        </main>
    )
}
export default Test;
