import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from '../src/components/Navbar'
import App from '../src/components/App'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <h1 className='h1main'>โปรแกรมบันทึกรายรับรายจ่าย</h1>
    <App/>
  </StrictMode>,
)
