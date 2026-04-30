import { Alert, AlertTitle } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../../store/Order/action';
import { updatePayment } from '../../store/Payment/action';
import AddressCard from '../Address_Detail/AddressCard';
import OrderTracker from '../Order/OrderTracker';

function PaymentSuccess() {
    const [paymentId, setPaymentId] = useState();
    const [referenceId, setReferenceId] = useState();
    const [paymentStatus,setPaymentStatus] = useState();
    const {orderId} = useParams()

    const dispatch = useDispatch()
    const {order} = useSelector(store=>store.order)

    useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        setPaymentId(urlParams.get("razorpay_payment_id"));
        setPaymentStatus(urlParams.get("razorpay_payment_link_status"));
    }, [])

    useEffect(()=>{
        if(paymentId){
            const data ={orderId,paymentId}
            dispatch(getOrderById(orderId))
            dispatch(updatePayment(data));
        }
    },[orderId,paymentId])
  return (
    <div className='px-2 sm:px-4 lg:px-12 py-10 bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 min-h-screen flex flex-col items-center justify-center w-full'>
      <Alert variant='filled' severity='success' sx={{mb:3, mb:6, width:{ xs:"90%", sm:"80%", md:"50%"}, fontSize:{ xs:"0.85rem", sm:"1rem", md:"1.25rem" }, fontWeight:"bold", borderRadius:"12px", boxShadow:"0 4px 12px rgba(0,0,0,0.1)"}}>
        <AlertTitle sx={{fontSize:{ xs:"1rem", sm:"1.25rem", md:"1.5rem" }, fontWeight:"bold"}} >Payment Success</AlertTitle>
        Congratulations! Your Order has been placed successfully.
        <p className='mt-2 font-semibold text-xs'>Thank You For Shopping With Us</p>
      </Alert>
      <OrderTracker activeStep={1} />
      <div className='py-10 w-full max-w-2xl px-2 sm:px-4 space-y-3 sm:space-y-4'>
        {order?.orderItems?.map((item) => (
          <div key={item._id} className='p-3 sm:p-4 bg-white rounded-lg shadow-md border border-gray-200'>
            <div className='flex gap-3 sm:gap-4'>
              <img className='w-14 h-14 sm:w-20 sm:h-20 object-cover object-top rounded-md flex-shrink-0' src={item.product?.imageUrl} alt={item.product?.title} />
              <div className='space-y-1 sm:space-y-2 flex flex-col items-start min-w-0 flex-1'>
                <p className='font-semibold text-sm sm:text-base truncate w-full'>{item.product?.title}</p>
                <div className='opacity-70 text-xs sm:text-sm font-semibold space-x-2 sm:space-x-3 flex flex-wrap gap-1'>
                  <span>Size: {item.size}</span>
                  <span>Seller: {item.product?.brand}</span>
                </div>
                <p className='text-sm sm:text-base font-bold text-green-700'>Rs {item.discountedPrice}</p>
              </div>
            </div>
            <div className='mt-3 pt-3 border-t border-gray-200'>
              <AddressCard address={order?.shippingAddress} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PaymentSuccess
