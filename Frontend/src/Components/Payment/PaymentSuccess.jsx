import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updatePayment } from '../../store/Payment/action';
import { getOrderById } from '../../store/Order/action';
import { Alert, AlertTitle, Grid } from '@mui/material';
import OrderTracker from '../Order/OrderTracker';
import AddressCard from '../Address_Detail/AddressCard';

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
    <div className='px-4 lg:px-48 py-10 bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 min-h-screen flex flex-col items-center justify-center w-[100vw]'>
      <Alert variant='filled' severity='success' sx={{mb:6, width:"50%", fontSize:"1.25rem", fontWeight:"bold", borderRadius:"12px", boxShadow:"0 4px 12px rgba(0,0,0,0.1)"}}>
        <AlertTitle sx={{fontSize:"1.5rem", fontWeight:"bold"}} >Payment Success</AlertTitle>
        Congratulations! Your Order has been placed successfully.
        <p className='mt-2 font-semibold text-xs'>Thank You For Shopping With Us</p>
      </Alert>
      <OrderTracker activeStep={1} />
      <Grid container spacing={4} className='py-10 w-full max-w-2xl'>
        {order?.orderItems.map((item) => (
          <Grid container item key={item._id} sx={{ alignItems: "center", justifyContent: "space-between", padding: "1rem", backgroundColor: "white", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", marginBottom: "1rem" }}>
            <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
              <img className='w-[6rem] h-[6rem] object-cover object-top rounded-md' src={item.product?.imageUrl} alt={item.product?.title} />
              <div className='ml-6 space-y-2 flex flex-col items-start'>
                <p className='text-lg font-semibold'>{item.product?.title}</p>
                <div className='opacity-70 text-sm font-semibold space-x-3'>
                  <span>Size: {item.size}</span>
                  <span>Seller: {item.product?.brand}</span>
                </div>
                <p className='text-md font-bold text-green-700'>Rs {item.discountedPrice}</p>
              </div>
            </Grid>
            <Grid item>
              <AddressCard address={order?.shippingAddress} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default PaymentSuccess
