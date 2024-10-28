import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {GoogleOAuthProvider} from '@react-oauth/google'

const CLIENT_ID = "1077087642756-isbl18d8m7agahqkqse099i0vtiejm3h.apps.googleusercontent.com"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <App />

    </GoogleOAuthProvider>
    
  </StrictMode>,
)
