import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { todos } from '../reducers/reducer'
import { RemoveButton, SubmitButton } from '../library/Button'

const InputContainer = styled.form`
  padding: 2em;
  display: flex;
  margin: 4em 2em 2em 2em;
  justify-content: space-between; 
  border-top: 1px solid black;
`

const InputField = styled.input`
  padding: .5em 1em;
`

const CatField = styled.select`
  padding: .5em 1em;
`

const DatePick = styled.input`
  padding: .5em 1em;
`

export const TodoInput = ({id}) => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState()
  // const options = useSelector((store) => store.todos.categories)


  const handleOnSubmit = event => { 
    event.preventDefault()
    dispatch(todos.actions.addTodo({
      id: id,
      itemInfo: {
        text: inputValue,
        complete: false,
        category: category,
        dueDate: date
      }
    })
    )
    setInputValue('')
  }

  const handleRemoveClick = () => {
    dispatch(
      todos.actions.removeAll()
    )
  }

    return (
      <>
      <InputContainer onSubmit={handleOnSubmit}>
        <InputField
          type='text'
          onChange={e => setInputValue(e.target.value)} 
          value={inputValue}
          placeholder='What do you need to do...'>
        </InputField> 
        <CatField
          name="category" id="category"
          value={(category === '') ? null : category.value}
          onChange={e => setCategory(e.target.value)}
        >
          <option default value=""> -- select an option -- </option>
          <option value="Work">Work</option>
          <option value="Shopping">Shopping</option>
          <option value="House">House</option>
          <option value="Family">Family</option>
        </CatField>
        <DatePick
          type='date'
          onChange={e => setDate(e.target.value)} default={Date.now()} selected={date} placeholderText='select a due date'
        >
        </DatePick>
        <SubmitButton
          type='submit'
          value='add to list'
          disabled={inputValue === ''}
          >
        </SubmitButton>
      </InputContainer>
      <RemoveButton onClick={handleRemoveClick}>Remove All</RemoveButton>
    </>
    )
  }