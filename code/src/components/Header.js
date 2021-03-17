import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { DeviceSize } from '../library/DeviceSizes'
import 'styles/styling.css'

export const Header = () => {
  const todos = useSelector((store) => store.todos.list)
  let today = moment().format('YYYY-MM-DD')
  const completedTasks = todos.items.filter((item) => item.complete)
  let dueNow = todos.items.filter((todo) => todo.dueDate === today)
  
  
  return (
      <HeaderContainer>
        <Headline>Your todo app</Headline>
        <p>You have completed  {completedTasks.length} / {todos.items.length} things to do!</p>
  {dueNow && dueNow.length > 0 ? <p className="deadline">You have <strong>{dueNow.length}</strong> deadline(s) today!</p> : <p></p>}
      </HeaderContainer>
    )
  }

  const HeaderContainer = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  border-radius: 6px 6px 6px 6px;
  margin-bottom: 2em;
  background-color: #ffff80;
  justify-content: space-between;
  font-family: 'Roboto Mono', monospace;
  > p {
    font-size: .8em;
  }
  @media ${DeviceSize.tablet} {
    padding: 2em;
    > p {
      font-size: 1.2em;
    }
  }
` 

const Headline = styled.h1`
  color: white;
  font-size: 2em;
  margin-bottom: .5em;
  text-transform: lowercase;
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;
  -webkit-text-stroke: 1px black;
  @media ${DeviceSize.tablet} {
    font-size: 3em; 
    -webkit-text-stroke: 2px black;
  }
`