import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomeCard({product}) {
  const navigate = useNavigate()

  const handleClick = ()=>{
    navigate(`/product/${product._id}`)
  }
  return (
    <div className='cursor-pointer flex flex-col items-center justify-center bg-white rounded-lg shadow-neutral-50 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out p-4 border-2 border-gray-100 m-2 ' onClick={handleClick}>
        <div className='relative h-[12rem] w-full overflow-hidden  rounded-t-lg'>
            <img className='absolute inset-0 object-cover object-top w-full h-full rounded-md' src={product.imageUrl}/>
        </div>
    <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
        <p className='text-sm font-light text-gray-600'>{product.title}</p>
    </div>
    </div>
  )
}

export default HomeCard