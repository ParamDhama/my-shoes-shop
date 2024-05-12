import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const SideNavBar = () => {
  return (
    <>
        <ul className='flex flex-col space-y-2 items-center h-full bg-slate-100 rounded-bl-lg  '>
          <button className=' w-5/6 h-16 rounded-lg' >All Products</button> 
          <button className=' w-5/6 h-16 rounded-lg' >Men</button>
          <button className=' w-5/6 h-16 rounded-lg' >Women</button>
          <button className=' w-5/6 h-16 rounded-lg' >Kids</button>
          <button className='w-5/6 h-16 rounded-lg flex items-center justify-center'><AiOutlineShoppingCart /></button>
        </ul>
    </>
  )
}

export default SideNavBar
