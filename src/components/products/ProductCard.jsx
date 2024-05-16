import React from 'react'

const ProductCard = () => {
  return (
    <div className='w-72 h-96  flex flex-col '>
        <div className='size-72 rounded-md' style={{backgroundImage:"url('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png')",backgroundSize:"cover"}}></div>
        <h1 className='font-bold'>Nike Air Force 1 '07</h1>
        <h3 className='text-slate-400'>Men's Shoes</h3>
        
        <h1 className='font-bold my-2'>MRP : ₹ 7 495.00</h1>
    </div>
  )
}

export default ProductCard
