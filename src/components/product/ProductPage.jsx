import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import ProductCard from '../products/ProductCard'
import "./productpage.css"

const ProductPage = () => {
  return (
    <>
     <div className='md:flex md:justify-around  mt-10'>
        <div className='flex justify-center max-sm:px-2'>
            <div className='grid grid-cols-1 gap-3 w-20 p-2 h-4/6'>
                <button className="btn-shoes-img"></button>
                <button className="btn-shoes-img"></button>
                <button className="btn-shoes-img"></button>
                <button className="btn-shoes-img"></button>
                <button className="btn-shoes-img"></button>
            </div>
            <div className='big-img size-96' >
            </div>
        </div>
        <div className='md:w-2/5 md:px-20 px-5'>
            <h1 className='mt-10 font-bold text-2xl'>Nike V2K Run</h1>
            <h4 className='font-medium text-md'>Shoes</h4>

            <h2 className=  'mt-5 font-bold'>MRP : ₹ 10 795.00</h2>
            <p className='text-slate-500 font-semibold'>incl. of taxes <br />(Also includes all applicable duties)</p>
            <h1 className='mt-4 text-md font-medium mb-2'>Select Size</h1>
            <div className='grid grid-cols-3 gap-3'>
                <button className='btn-size'>UK 7.5</button>
                <button className='btn-size'>UK 7.5</button>
                <button className='btn-size'>UK 7.5</button>
                <button className='btn-size'>UK 7.5</button>
                <button className='btn-size'>UK 7.5</button>
                <button className='btn-size'>UK 7.5</button>
                <button className='btn-size'>UK 7.5</button>
                <button className='btn-size'>UK 7.5</button>
            </div>
            <div className='grid grid-cols-1 p-10 gap-5'>
                <button className='btn-bg'> Buy now</button>
                <button className='btn-no-bg flex items-center justify-around px-20'> Add to cart <AiOutlineShoppingCart /></button>
            </div>
        </div>
    </div> 
    <div className='w-5/6 m-auto'>
        <h1 className='  font-bold text-2xl my-10'>You Might Also Like</h1>
        <div className='  flex space-x-5 overflow-x-auto'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </div>
    </>
  )
}

export default ProductPage
