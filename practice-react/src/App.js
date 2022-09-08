import React, { Component } from 'react'
import './styles.css'
import Friends from './pages/Friends'
import Login from './pages/Login'
import Chats from './pages/Chats'
import Find from './pages/Find'
import More from './pages/More'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './atoms/Navigation'
import StatuesBar from './atoms/StatuesBar'

function App() {
  return (
    <div>
      <StatuesBar />

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Friends" element={<Friends />} />
          <Route path="/Chats" element={<Chats />} />
          <Route path="/Find" element={<Find />} />
          <Route path="/More" element={<More />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
