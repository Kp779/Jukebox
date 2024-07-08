import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router'
import Discover from './pages/Discover'

function App() {
    

  return (
    <>
    <Routes>
      <Route path='/' element={<Discover/> }/>
    </Routes>
    </>
  )
}

export default App
