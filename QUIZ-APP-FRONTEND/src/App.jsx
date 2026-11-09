import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import { Home, Login } from './pages/index.jsx'
import { Route, Routes } from 'react-router-dom'



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth/login" element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
