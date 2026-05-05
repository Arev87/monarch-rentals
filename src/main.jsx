import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/font-awesome.css'
import './assets/css/font-awesome5.css'
import './assets/css/jquery-ui.min.css'
import './assets/css/bootstrap.min.css'
import './assets/css/jquery-confirm.css'
import './assets/css/swiper.css'
import './assets/css/main.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
