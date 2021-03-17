import React from 'react'
import { Header } from './components/Header'
import { TodoList } from './components/TodoList'
import { TodoInput } from './components/TodoInput'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { todos } from './reducers/reducer'
import { DeviceSize } from './library/DeviceSizes'
import styled from 'styled-components'


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 93%;
  border-radius: 6px;
  margin: 5em auto;
  background-color: lightblue;
  font-family: 'Helvetica';
  @media ${DeviceSize.tablet} {
    width: 80%;
  }
  @media ${DeviceSize.laptop} {
    width: 70%;
  }
`
const Main = styled.div`
  background-color: white;
  border-radius: 6px;
`

const reducer = combineReducers({
  todos: todos.reducer
})

// Set up the localstorage

const persistedStateJSON = localStorage.getItem('reduxState')
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

// Creating store 

const store = createStore( 
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

// Storing state and subscribing to changes in state

  store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
  })

export const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <Header />
        <Main>
          <TodoList />
          <TodoInput />
        </Main>
      </AppContainer>
    </Provider>
  )
}
