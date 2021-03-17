import styled from 'styled-components'
import { DeviceSize } from '../library/DeviceSizes'




export const SubmitButton = styled.input`
  background-color: lightblue;
  border-radius: 10px;
  border: 1px solid lightblue;
  padding: .5em 2em;
  color: white;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
  &:hover {
    border: 1px solid black;
    background-color: white;
    color: black;
  }
  @media ${DeviceSize.tablet} {
    > * {
      font-size: 1em;
    }
`

export const RemoveButton = styled.button`
  background-color: lightblue;
  border-radius: 10px;
  border: 1px solid lightblue;
  padding: .5em 1em;
  color: white;
  margin: 1em;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
  &:hover {
    border: 1px solid black;
    background-color: white;
    color: black;
  }
  @media ${DeviceSize.laptop} {
    font-size: 1em;
  } 
`
// Dry by using previous styles
export const RemoveItemButton = styled(RemoveButton)`
  font-size: .8em; 
`