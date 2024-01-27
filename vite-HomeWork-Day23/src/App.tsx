import React from 'react'
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProductDetails from './pages/ProductDetails'
import CheckOut from './pages/checkout'
import {  Route, Routes } from 'react-router-dom'
import MainAppBar from './components/MainAppBar'


function App() {
  return (
    <>
    <MainAppBar />

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/ProductDetails" element={<ProductDetails />}/>
      <Route path="/checkout" element={<CheckOut />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    
    </>
  )
}

export default App
