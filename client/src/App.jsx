import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router'
import Navbar from './layout/Navbar'
import Layout from './layout/Layout'
import ShopPage from './pages/ShopPage'


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='shop' element={<ShopPage/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
