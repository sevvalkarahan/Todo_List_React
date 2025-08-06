import React from 'react'
import "../css/todo-list.css"
import Todos from './Todos'

const TodoList = ({ todos, onRemoveTodo }) => {
    return (
        <div className='todo_list'>

            {todos && todos.map((todo) => (
                <Todos todo={todo} onRemoveTodo={onRemoveTodo} />
            ))

            }
        </div>
    )
}

export default TodoList
