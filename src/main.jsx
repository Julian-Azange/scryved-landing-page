import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Importar los estilos aquí. Es crucial que ambos estén presentes.
// index.css (con Tailwind) debe ir primero para que tus estilos personalizados
// en App.css puedan sobreescribirlo si es necesario.
import './index.css'
import './App.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
