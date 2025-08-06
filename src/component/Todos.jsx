import React from 'react'
import "../css/todos.css"
import { FaTrash } from "react-icons/fa";
import { useState } from 'react';


const Todos = ({ todo, onRemoveTodo }) => {
    const [isDone, setIsDone] = useState(false);

    const toggleDone = () => {
        setIsDone(!isDone);
    };

    const removeTodos = () => {
        onRemoveTodo(todo.id)
    }

    return (
        <div className='todo'>
            <p onClick={toggleDone} style={{
                textDecoration: isDone ? 'line-through' : 'none',
                color: isDone ? 'gray' : '#F6EEE1',
                cursor: 'pointer',
                flex: 1
            }}>{todo.content}</p>
            <FaTrash onClick={removeTodos} style={{ cursor: "pointer", color: "white" }} />
        </div>
    )
}

export default Todos
