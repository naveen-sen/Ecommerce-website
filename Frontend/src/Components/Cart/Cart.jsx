import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Cart() {
  
  const navigate = useNavigate()

  const handleCheckOut = ()=>{
    navigate('/checkout?step=2')
  }

  return (
    <div className='w-[100vw]'>
      <div className='lg:grid lg:grid-cols-3 lg:px-16 relative'>
        <div className='lg:col-span-2 lg:pr-8'>
          <CartItem/>
        </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
          <div className='border border-gray-300 rounded-md shadow-lg p-5'>
            <p className='uppercase font-bold opacity-70 pb-4'>Price Details</p>
            <hr/>
            <div className='space-y-3 font-semibold'>
              <div className='flex justify-between pt-2 text-black'>
                <span>Price</span>
                <span>Rs 999</span>
              </div>
              <div className='flex justify-between pt-2 text-black'>
                <span>Discount</span>
                <span className='text-green-600'>-Rs 50</span>
              </div>
              <div className='flex justify-between pt-2 text-black'>
                <span>Delivery Charges</span>
                <span className='text-green-600'>Free</span>
              </div>
              <div className='flex justify-between pt-2 text-black font-bold'>
                <span>Total Amount</span>
                <span className='text-green-600'>Rs 1049</span>
              </div>
            </div>  
          </div>
          <Button type="submit" onClick={handleCheckOut} variant='contained' className='w-full mt-5 mb-4' sx={{px:"2.5rem",py:"0.7rem",bgcolor:'#9155fd'}}>Checkout</Button>
        </div>
        
      </div>
    </div>
  )
}

export default Cart