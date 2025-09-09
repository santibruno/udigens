import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/theme.css'
import './styles/globals.css'
import App from './App'
import EquipoPage from './pages/EquipoPage'
import NesaWorldPage from './pages/NesaWorldPage'
import AbordajesPage from './pages/AbordajesPage'
import AdiccionesPage from './pages/AdiccionesPage'
import InstalacionesPage from './pages/InstalacionesPage'

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/equipo" element={<EquipoPage />} />
      <Route path="/nesaworld" element={<NesaWorldPage />} />
      <Route path="/abordajes" element={<AbordajesPage />} />
      <Route path="/adicciones" element={<AdiccionesPage />} />
      <Route path="/instalaciones" element={<InstalacionesPage />} />
    </Routes>
  </Router>
)
