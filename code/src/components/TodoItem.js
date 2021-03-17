import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { RemoveItemButton } from '../library/Button'
import { todos } from '../reducers/reducer'
import { DeviceSize } from '../library/DeviceSizes'
import 'styles/styling.css'


export const TodoItem = ({ itemIndex }) => {

  const todo = useSelector((store) => store.todos.list.items[itemIndex])
  const dispatch = useDispatch()
  let today = moment().format('YYYY-MM-DD')


  const removeTodo = event => {
    event.preventDefault()
    dispatch(
    todos.actions.removeTodo({ itemIndex })
    )
  }

  const handleCheckboxClick = (event) => {
    dispatch(todos.actions.setDone({
      itemIndex: itemIndex,
      complete: !todo.complete
      })
    )
  }
    
  return (
    <>
      <div className="item3">
      <Input 
        type="checkbox"
        checked={todo.complete ? 'checked' : ''}
        onChange={handleCheckboxClick}
      ></Input>
      </div>
      <div className="item4">
        <Task>{todo.text}</Task>
      </div>  
      <div className="item5">
        <Category>{todo.category}</Category>
      </div>
      <div className={todo.dueDate === today ? "dueNow" : todo.dueDate < today ? "overdue ": "item6"}
      >
        <Task>{todo.dueDate}</Task>
      </div>
      <div className="item7">
        <RemoveItemButton onClick={removeTodo}>Remove</RemoveItemButton>    
      </div>
    </>
  )
}

const Input = styled.input`
  margin: 1em;
`

const Category = styled.p`
  margin: 1em;
`

const Task = styled.p`
  margin: 1em;
`