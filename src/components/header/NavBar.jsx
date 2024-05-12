import React, { useState } from 'react'
import logo from '../../assets/img/shoes logo.png'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoIosMenu } from 'react-icons/io'
import SideNavBar from './SideNavBar'

const NavBar = () => {
  const [sideOpen,setSideOpen] = useState(false);

  return (
    <div className='overflow-hidden'>
    <header className='flex justify-between lg:w-auto h-20 font-thin bg-slate-100     text-lg overflow-x-hidden'>
      <div className='w-1/4 flex items-center justify-center '>
        <img src={logo} alt="" className='size-10 ' />
      </div>
      <div className='w-3/4 h-full hidden md:block '>
        <div className=' w-full h-full   flex justify-around items-center'>
        <ul className='flex justify-center space-x-10 items-center h-full'>
          <li className='hover:font-normal'>All Products</li> 
          <li className='hover:font-normal'>Men</li>
          <li className='hover:font-normal'>Women</li>
          <li className='hover:font-normal'>Kids</li>
        </ul>
        <div className='flex items-center justify-center h-full text-2xl hover:text-3xl'>
          <AiOutlineShoppingCart />
        </div>
        </div>
      </div>
        <button className='md:hidden block text-2xl w-1/6' onClick={()=> sideOpen?setSideOpen(false):setSideOpen(true)}><IoIosMenu /></button>
    </header>
        <div className={sideOpen?"md:hidden absolute  w-full opacity-100   transition-all ease-in-out delay-200 block":"absolute w-full opacity-0   transition-all ease-in-out delay-200 pointer-events-none md:hidden "}><SideNavBar/></div>
    </div>
  )
}

export default NavBar
