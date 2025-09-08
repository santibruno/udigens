import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/theme.css'
import './styles/globals.css'
import App from './App'
import EquipoPage from './pages/EquipoPage'

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/equipo" element={<EquipoPage />} />
    </Routes>
  </Router>
)
