import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from '../src/components/Navbar'
import img from '../src/assets/react.svg'
import Footer from './components/footer'
import Button from '../src/components/button'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <h1 className='h1main'>Welcome To My Website</h1>
    <img src={img}></img>
    <Button />
    <Footer />
  </StrictMode>,
)
