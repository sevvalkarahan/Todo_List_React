import { useState } from 'react'
import './App.css'
import Weather from './component/Weather'
import Calender from './component/Calender'
import TodoCreate from './component/TodoCreate'
import TodoList from './component/TodoList'

function App() {


  const [todos, setTodos] = useState([]);


  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  }

  return (
    <div className='container'>

      <div style={{ width: "100%", height: "9%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ color: "#9aacc6" }}>GÜNÜNÜ PLANLA!</h1>
      </div>

      <div style={{ width: "100%", height: "91%", display: "flex" }}>

        <div className='left'>
          <div style={{ width: "100%", height: "40%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Weather />
            <span style={{ margin: "10px 20px 0", color: "rgba(220, 217, 182, 0.81)", position: "relative", top: "30px" }}>Gününü planlamadan önce hava durumunu kontrol etmeyi unutma!</span>
          </div>

          <div style={{ width: "100%", height: "60%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Calender />
          </div>

        </div>

        <div className='right'>
          <div className='todos'>
            <TodoCreate onCreateTodo={createTodo} />
            <TodoList todos={todos} onRemoveTodo={removeTodo} />

          </div>
        </div>

      </div>

    </div>
  )
}

export default App
