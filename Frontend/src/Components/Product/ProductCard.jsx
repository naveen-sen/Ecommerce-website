import React from 'react'
import "./productCard.css"
import { useNavigate } from 'react-router-dom'

function ProductCard({Product}) {
  const {title,brand,discountedPrice,price,discountPercent,color,imageUrl} = Product
  const navigate = useNavigate()

  const handleNavigate = ()=>{
    navigate(`/product/${Product?._id}`)
  }
  return (
    <div onClick={handleNavigate} className='productCard w-[15rem] transition-all cursor-pointer'>
        <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src={imageUrl} alt=''/>
        </div>
        <div className='textPart bg-white p-3'>
            <div>
                <p className='font-bold opacity-70'>{brand}</p>
                <p className='font-semibold opacity-60'>{title}</p>
            </div>
            <div className='flex item-center space-x-2'>
                <p className=' font-medium text-gray-600' px-4>₹ {discountedPrice}</p>
                <p className='line-through opacity-50 px-2'>₹ {price}</p>
                <p className='text-green-500 '>{discountPercent}% Off</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard