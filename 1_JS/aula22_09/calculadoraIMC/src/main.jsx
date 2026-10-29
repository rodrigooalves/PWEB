import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import IMC from './pages/IMC'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IMC />
  </StrictMode>,
)
