import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PlaygroundPage from './pages/PlaygroundPage'
import ChallengePage from './pages/ChallengePage'
import TutorialScene from './scenes/TutorialScene'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/playground" element={<PlaygroundPage />} />
      <Route path="/challenges" element={<ChallengePage />} />
      <Route path="/tutorial" element={<TutorialScene />} />
    </Routes>
  )
}

export default AppRouter
