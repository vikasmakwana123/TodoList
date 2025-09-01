import React, { useState } from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'
import AddTodo from '../public/AddTodo'

const App = () => {
  const [todos, setTodos] = useState([])
  const [addTodo, setAddTodo] = useState(false)
  const [filteredTodos, setFilteredTodos] = useState(null) // null means no filter applied

  const addTodoFunc = () => {
    setAddTodo(!addTodo)
  }

  const handleAddTodo = (todo) => {
    const newTodos = [...todos, todo]
    setTodos(newTodos)
    setFilteredTodos(newTodos)
  }

  const toggleCheck = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
    )
    setTodos(updated)
    setFilteredTodos(updated)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', fontSize: '30px', marginBottom: '20px' }}>Todo List</h2>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '0px 50px' }}>
        <Header todos={todos} setFilteredTodos={setFilteredTodos} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '20px' }}>
        {addTodo && <AddTodo onAddTodo={handleAddTodo} />}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20px',
          gap: '0px',
        }}
      >
        {(filteredTodos !== null ? filteredTodos : todos).map((todo) => (
          <TodoList
            key={todo.id}
            title={todo.title}
            desc={todo.desc}
            isChecked={todo.isChecked}
            onToggle={() => toggleCheck(todo.id)}
          />
        ))}
        <div
          onClick={addTodoFunc}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            marginTop: '60px',
            borderRadius: '10px',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'whitesmoke',
            height: '50px',
            backgroundColor: '#6057fdff',
            width: '150px',
            fontSize: '20px',
            fontWeight: 'bold',
            display: 'flex',
            cursor: 'pointer',
            boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
          }}
        >
          Add Todo +
        </div>
      </div>
    </div>
  )
}

export default App
