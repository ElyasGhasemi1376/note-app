import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
const root=document.getElementById('root');
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
