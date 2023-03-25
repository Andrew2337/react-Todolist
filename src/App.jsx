import { useState , useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import Todolist from './components/Todolist'

function App() {
  const [inputText, setInputText] = useState('')
  const [todos , settodos] = useState([
    {text : '寫作業' , completed: false , id: 1},
    {text : '運動' , completed: false , id: 2},
    {text : '閱讀' , completed: false , id: 3}

  ])

  const [tab , setTab] = useState('all')
  const [filterTodos , setfilterTodos] = useState([])

  const handleFilter = () => {
    switch (tab) {
      case 'completed' :
        setfilterTodos(todos.filter(todo => todo.completed))
        break
      case 'uncompleted' :
        setfilterTodos(todos.filter(todo => !todo.completed))
        break
      default : 
        setfilterTodos(todos)
        break
    }
  }

  useEffect( () => {
    handleFilter()
  } , [tab, todos]
  )

  return (
    <div className="App">
      <div className="container">

      <header>
        ToDoList
      </header>

      <Form 
        inputText = {inputText}
        setInputText = {setInputText}
        todos = {todos}
        settodos = {settodos}
        setTab={setTab}
      />

      <Todolist
        todos = {filterTodos}
        settodos = {settodos}
      />

      </div>

    </div>
  )
}

export default App
