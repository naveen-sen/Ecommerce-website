
import React, { useEffect, useState } from 'react'
import AddressCard from './AddressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getOrderById } from '../../store/Order/action'
import { createPayment } from '../../store/Payment/action'

function OrderSummary() {
  const dispatch = useDispatch();
  const location = useLocation();
  const {order} = useSelector(store=>store.order)
  const [loading, setLoading] = useState(true);
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get('orderId');



  useEffect(()=>{
    if(orderId){
      setLoading(true);
      dispatch(getOrderById(orderId)).finally(() => setLoading(false));
    }
  },[orderId, dispatch])

  const handleCheckOut = ()=>{
    dispatch(createPayment(orderId));
  }

  if(loading){
    return <div>Loading order details...</div>
  }

  if(!order){
    return <div>No order found.</div>
  }

  return (
    <div className='w-[90vw]'>
      <div className='p-5 shadow-lg rounded-s-md border border-gray-300 ml-6'>
        <AddressCard address={order?.shippingAddress}/>
      </div>
      <div className='flex flex-col -ml-9 mt-5'>
        <div className='w-[100vw]'>
              <div className='lg:grid lg:grid-cols-3 lg:px-16 relative'>
                <div className='lg:col-span-2 lg:pr-8'>
                  {order?.orderItems?.map((item) =><CartItem item={item}/>)}
                </div>
                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                  <div className='border border-gray-300 rounded-md shadow-lg p-5'>
                    <p className='uppercase font-bold opacity-70 pb-4'>Price Details</p>
                    <hr/>
                    <div className='space-y-3 font-semibold'>
                      <div className='flex justify-between pt-2 text-black'>
                        <span>Price</span>
                        <span>₹ {order?.totalPrice}</span>
                      </div>
                      <div className='flex justify-between pt-2 text-black'>
                        <span>Discount</span>
                        <span className='text-green-600'>-₹ {order?.discount}</span>
                      </div>
                      <div className='flex justify-between pt-2 text-black'>
                        <span>Delivery Charges</span>
                        <span className='text-green-600'>Free</span>
                      </div>
                      <div className='flex justify-between pt-2 text-black font-bold'>
                        <span>Total Amount</span>
                        <span className='text-green-600'>₹ {order?.totalDiscountedPrice}</span>
                      </div>
                    </div>  
                  </div>
                  <Button variant='contained' onClick={handleCheckOut} className='w-full mt-5 mb-4' sx={{px:"2.5rem",py:"0.7rem",bgcolor:'#9155fd'}}>Confirm Order</Button>
                </div>
                
              </div>
            </div>
      </div>
    </div>
  )
}

export default OrderSummary
