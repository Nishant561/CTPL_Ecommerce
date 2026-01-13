import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './styles/tailwind.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Layout from './layout/Layout'
import Order from './pages/Order'
import Products from './pages/Products'

function App() {
  
  return (
    <Routes>
      <Route element={<Layout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/order' element={<Order/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='*' element={<h1>Page not found</h1>} />

      </Route>
        
    </Routes>
  )
}

export default App
