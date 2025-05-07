import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
import {getCart} from '../../store/Cart/action'

function Cart() {
  
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const cart = useSelector(store=>store.cart)

  const handleCheckOut = ()=>{
    navigate('/checkout?step=2')
  }

  useEffect(()=>{
    dispatch(getCart())
  },[cart.updateCartItem,cart.deleteCartItem])

  return (
    <div className='w-[100vw]'>
      <div className='lg:grid lg:grid-cols-3 lg:px-16 relative'>
        <div className='lg:col-span-2 lg:pr-8'>
          {cart.cart?.cartItems.map((item) => <CartItem item={item}/>)}
        </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
          <div className='border border-gray-300 rounded-md shadow-lg p-5'>
            <p className='uppercase font-bold opacity-70 pb-4'>Price Details</p>
            <hr/>
            <div className='space-y-3 font-semibold'>
              <div className='flex justify-between pt-2 text-black'>
                <span>Price</span>
                <span>₹ {cart.cart?.totalPrice}</span>
              </div>
              <div className='flex justify-between pt-2 text-black'>
                <span>Discount</span>
                <span className='text-green-600'>-₹ {cart.cart?.discount}</span>
              </div>
              <div className='flex justify-between pt-2 text-black'>
                <span>Delivery Charges</span>
                <span className='text-green-600'>Free</span>
              </div>
              <div className='flex justify-between pt-2 text-black font-bold'>
                <span>Total Amount</span>
                <span className='text-green-600'>{cart.cart?.totalDiscountedPrice}</span>
              </div>
            </div>  
          </div>
          <Button type="submit" onClick={handleCheckOut} variant='contained' className='w-full mt-5 mb-4' sx={{px:"2.5rem",py:"0.7rem",bgcolor:'#9155fd'}}>Buy Now</Button>
        </div>
        
      </div>
    </div>
  )
}

export default Cart
