import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addTodo, deleteTodo, getAllTodos } from '../redux/redux-toolkit/todoSlice'

const Header = (props) => {

  const todoList = useSelector(state => state.todoList)

  const [value, setValue] = useState('')

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAllTodos())
  }, [dispatch])
  
  
  const handleSubmit = () => {
    dispatch(addTodo(value))
    setValue('')
  }

  const handleDeleteTodo = (todo) => {
    dispatch(deleteTodo(todo))
  }

  console.log(todoList.map(item => item.title));


  return (
    <div>
      <h1 className="heading">Web Application</h1>
      <div className="form-input">
        <input type="text" placeholder='Todo' value={value} style={{marginLeft: 20}} onChange={(e) => setValue(e.target.value)}/>
        <button onClick={handleSubmit} style={{marginLeft: 20}}>Add todo</button>
      </div>
      {
        todoList && (
          todoList.map(item => (
            <ul key={item}>
              <li>{item}</li>
              <span onClick={() => handleDeleteTodo(item)}>x</span>
            </ul>
          ))  
        )
      }
    </div>
  )
}

export default Header