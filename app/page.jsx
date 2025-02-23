'use client'

import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom'
import GameSet from './game-set/page'

function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/game-set')
  }, [navigate])

  return <div></div>
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game-set" element={<GameSet />} />
      </Routes>
    </Router>
  )
}
