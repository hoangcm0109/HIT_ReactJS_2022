import React, { useContext, useState } from 'react'
import { data } from '../index'
import { useDispatch } from 'react-redux'
import { addTodo, deleteTodo } from '../redux/actions'
import { useSelector } from 'react-redux'

const Header = (props) => {

  const todoList = useSelector(state => state.todoList)

  const [value, setValue] = useState('')

  const dispatch = useDispatch()
  
  console.log(todoList);
  
  const handleSubmit = () => {
    dispatch(addTodo(value))
    setValue('')
  }

  const handleDeleteTodo = (todo) => {
    dispatch(deleteTodo(todo))
  }


  return (
    <div>
      <h1 className="heading">Web Application</h1>
      <div className="form-input">
        <input type="text" placeholder='Todo' value={value} style={{marginLeft: 20}} onChange={(e) => setValue(e.target.value)}/>
        <button onClick={handleSubmit} style={{marginLeft: 20}}>Add todo</button>
      </div>
      {
        todoList.length > 0 && (
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