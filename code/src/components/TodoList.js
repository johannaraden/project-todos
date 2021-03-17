import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { TodoItem } from './TodoItem'
import 'styles/styling.css'

const ListContainer = styled.form`
  margin: auto;
  width: 100%;
  list-style-type: none;
`
export const TodoList = () => {
  
  const todos = useSelector((store) => store.todos.list)
  let deadline = todos.map
    return (
      <ListContainer>
        <div className="grid-container">
          <div className="item1">
            <h3>{(todos.items.length === 0) ? 'You have no tasks to do' : 'Things to do'}</h3>
          </div>
          <div >
            {todos.items.map((item, index) => (
              <div key={index} className="item2"> 
                <TodoItem item={item} itemIndex={index}/>
              </div> 
            ))}
          </div>
        </div>              
      </ListContainer>
    )
  }