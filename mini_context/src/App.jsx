import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './conponents/Login'
import Profile from './conponents/Profile'

function App() {

  
  return (
    <UserContextProvider>
      <Login />
      <Profile/>
    </UserContextProvider>
  )
}

export default App
