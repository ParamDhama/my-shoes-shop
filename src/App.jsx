import React from 'react'
import "./App.css"
import NavBar from './components/header/NavBar'
import ProductPage from './components/product/ProductPage'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <NavBar/>
      <ProductPage/>
      <div className='w-5/6 border-t-2 border-slate-400 m-auto my-10'></div>
      <Footer/>
    </div>
  )
}

export default App
