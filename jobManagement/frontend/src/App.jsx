import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from './components/signup'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/register" element={<Signup />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
