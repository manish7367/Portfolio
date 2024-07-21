import { BrowserRouter,Routes,Route } from 'react-router-dom'

import React from 'react'
import './App.css'
import Navbar from './component/Navbar'
import About from './pages/about/About'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Portfolio from './pages/portfolio/Portfolio'
import Themes from './component/Themes'

const App = () => {

  return (
    <div>
      
    <BrowserRouter>
    <Navbar/>
    <Themes/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='portfolio' element={<Portfolio/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default App
