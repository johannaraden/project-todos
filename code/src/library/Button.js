import styled from 'styled-components'



export const SubmitButton = styled.input`
  background-color: lightblue;
  border-radius: 10px;
  border: none;
  padding: .5em 2em;
  color: white;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
  &:hover {
    border: 1px solid black;
    background-color: white;
    color: black;
  }
`

export const RemoveButton = styled.button`
  background-color: lightblue;
  border-radius: 10px;
  border: none;
  padding: .5em 1em;
  color: white;
  margin: 2.5em;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
  &:hover {
    border: 1px solid black;
    background-color: white;
    color: black;
  }
`

export const RemoveItemButton = styled.button`
  background-color: lightblue;
  border-radius: 10px;
  border: none;
  padding: .5em 1em;
  color: white;
  margin: .5em;
    &:hover {
      border: 1px solid black;
      background-color: white;
      color: black; 
    }
    
`