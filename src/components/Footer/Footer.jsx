import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='flex justify-around max-sm:mx-3  h-96'>
      <div className='my-10'>
        <h1 className='font-bold'>Products</h1>
        <ul className='my-2 text-slate-600 space-y-2'>
            <li>All Products</li>
            <li>Men's</li>
            <li>Women's</li>
            <li>Kids's</li>
        </ul>
      </div>
      <div className='my-10'>
            <h1 className='font-bold'>Pages</h1>
            <ul className='my-2 text-slate-600 space-y-2'>
                <li>Home</li>
                <li>About Us</li>
            </ul>
      </div>
      <div className='my-10'>
        <h1 className='font-bold'>Connect With Us</h1>
            <ul className='my-2 text-slate-600 space-y-2'>
                <li className='flex justify-around items-center '>Twitter <BsTwitterX/></li>
                <li className='flex justify-around items-center '>Instagram <BsInstagram/></li>
                <li className='flex justify-around items-center '>Facebook <BsFacebook/></li>
                <li className='flex justify-around items-center '>IinkedIn <BsLinkedin/></li>
                <li className='flex justify-around items-center '>Github <BsGithub/></li>
            </ul>
      </div>
      <div className='md:w-48'></div>
    </div>
  )
}

export default Footer
