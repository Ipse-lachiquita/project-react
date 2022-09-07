import React, { Component } from 'react'
import './styles.css'
import Friends from './pages/Friends'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Friends" element={<Friends />} />
      </Routes>
    </Router>
  )
}

export default App
