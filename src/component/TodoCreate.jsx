import React, { useState } from 'react'
import "../css/todo-create.css"


const TodoCreate = ({ onCreateTodo }) => {

    const [newTodo, setNewTodo] = useState();

    const createTodo = () => {

        if (!newTodo) return;
        console.log(newTodo)

        const request = {
            id: Math.floor(Math.random() * 99999999999),
            content: newTodo
        }
        onCreateTodo(request)
        setNewTodo("")
    }


    return (
        <div className='create-todo'>
            <div className='input-todo'>
                <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} type='text' placeholder='Todo giriniz' />
                <button onClick={createTodo}>Todo Oluştur</button>
            </div>
        </div>
    )
}

export default TodoCreate
