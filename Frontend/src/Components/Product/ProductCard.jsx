import React from 'react'
import "./productCard.css"
import { useNavigate } from 'react-router-dom'

function ProductCard({Product}) {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/product/${10}`)} className='productCard w-[15rem] transition-all cursor-pointer'>
        <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src={Product.imageUrl} alt=''/>
        </div>
        <div className='textPart bg-white p-3'>
            <div>
                <p className='font-bold opacity-70'>{Product.brand}</p>
                <p className='font-semibold opacity-60'>{Product.title}</p>
            </div>
            <div className='flex item-center space-x-2'>
                <p className=' font-medium text-gray-600' px-4>Rs {Product.discountedPrice}</p>
                <p className='line-through opacity-50 px-2'>{Product.price}</p>
                <p className='text-green-500 '>{Product.discountPercent}% Off</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard