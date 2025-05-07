import React, { useEffect } from 'react'
import AddressCard from '../Address_Detail/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid, LinearProgress, Rating } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOrderById } from '../../store/Order/action'
import ProductReviewCard from '../ProductDetail/ProductReviewCard'
function OrderDetail() {

    const dispatch = useDispatch()
    const {orderId} = useParams()
    const {order,loading} = useSelector((state)=>state.order)

    useEffect(()=>{
        if(orderId){
            dispatch(getOrderById(orderId))
        }
    }, [orderId, dispatch])

    if(loading) return <div>Loading order details...</div>
    if(!order) return <div>No order found</div>

    const orderItem = order?.orderItems?.[0]

  return (
    <div className='px:5 lg:px-20'>
        <div className='flex flex-col items-start'>
            <h1 className='font-bold text-xl py-7 pl-2'>Delivery Address</h1>
            <AddressCard address={order.shippingAddress}/>
        </div>
        <div className='py-20 -ml-3  w-[80rem]'>
            <OrderTracker activeStep={2}/>
        </div>
        <Grid className='space-x-5 container'>
            <Grid item container className='shadow-xl rounded-md p-5 border border-gray-300 w-[80rem] ' sx={{alignItems:"center",justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className='flex'>
                        <img className='w-[6rem] h-[7rem] object-cover object-top'src={orderItem?.product?.imageUrl} 
                                alt=''/>
                        <div className='flex flex-col items-start space-y-1 ml-3'>
                            <p className='font-semibold opacity-80'>{orderItem?.product?.title || "No product title"}</p>
                            <p className='space-x-5 opacity-60 text-xs font-semibold'>
                                <span>Color: {orderItem?.product?.color}</span><span>Size: {orderItem?.size}</span>
                            </p>
                            <p className='opacity-70 font-semibold'>Seller: {orderItem?.product?.brand}</p>
                            <p className='font-semibold opacity-70 text-green-800'>Rs {orderItem?.discountedPrice}</p>
                        </div>
                    </div>
                </Grid>
                
                <Grid item>
                    <Box sx={{color:deepOrange[400]}} className='flex '>
                        <StarBorderIcon sx={{fontSize:"2rem"}} className='px-1 text-xs -mt-1'></StarBorderIcon>
                            <span className='text-black '>Rate & Review Product</span>
                    </Box>
                </Grid>
            </Grid>
        </Grid>

        <section className='w-[94vw] flex flex-col'>
                  <div className="flex justify-start">
                    <h1 className='font-semibold text-lg pb-4'>Recent Rating and Reviews</h1>
                  </div>
                  <div className='border border-gray-300 p-5 '>
                    <Grid container spacing={7}>
                      <Grid item xs={7}>
                        <div className='space-y-5'>
                          {[1,1,1].map((item)=> <ProductReviewCard/>)}
                        </div>
                      </Grid>
        
                      <Grid item xs={12} md={5} className='ml-180  '>
                        <h1 className='text-xl font-semibold pb-4 '>Product Ratings</h1>
                        
                        <div className='flex items-center space-x-4 mb-4'>
                          <Rating value={4.6} precision={0.5} readOnly />
                          <p className='opacity-60'>5794 Ratings</p>
                        </div>
        
                        <Box className='space-y-3 mt-5 px-2'>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item xs={2}>
                              <p className="text-sm text-gray-500 mx-1.5">Excellent</p>
                            </Grid>
                            <Grid item xs={10}>
                              
                              <LinearProgress
                                variant="determinate"
                                value={40}
                                color='success'
                                sx={{
                                  minHeight: 8,
                                  minWidth: 100,
                                  borderRadius: 4,
                                  backgroundColor: '#e5e7eb',
                                  '& .MuiLinearProgress-bar': {
                                    backgroundColor: 'success',
                                    borderRadius: 4,
                                    ml:1
                                  }
                                }}
                              />
                            </Grid>
                          </Grid>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item xs={2}>
                              <p className="text-sm text-gray-500 mx-0">Very Good</p>
                            </Grid>
                            <Grid item xs={10}>
                              
                              <LinearProgress
                                variant="determinate"
                                value={40}
                                sx={{
                                  minHeight: 8,
                                  minWidth: 100,
                                  borderRadius: 4,
                                  backgroundColor: '#e5e7eb',
                                  '& .MuiLinearProgress-bar': {
                                    backgroundColor: 'lightgreen',
                                    borderRadius: 4,
                                    ml:1
                                  }
                                }}
                              />
                            </Grid>
                          </Grid>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item xs={2}>
                              <p className="text-sm text-gray-500 mx-4">Good</p>
                            </Grid>
                            <Grid item xs={10}>
                              
                              <LinearProgress
                                variant="determinate"
                                value={40}
                                sx={{
                                  minHeight: 8,
                                  minWidth: 100,
                                  borderRadius: 4,
                                  backgroundColor: '#e5e7eb',
                                  '& .MuiLinearProgress-bar': {
                                    backgroundColor: '#fbbf24',
                                    borderRadius: 4,
                                    ml:1
                                  }
                                }}
                              />
                            </Grid>
                          </Grid>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item xs={2}>
                              <p className="text-sm text-gray-500 mx-2">Average</p>
                            </Grid>
                            <Grid item xs={10}>
                              
                              <LinearProgress
                                variant="determinate"
                                value={40}
                                color='warning'
                                sx={{
                                  minHeight: 8,
                                  minWidth: 100,
                                  borderRadius: 4,
                                  backgroundColor: '#e5e7eb',
                                  '& .MuiLinearProgress-bar': {
                                    backgroundColor: 'success',
                                    borderRadius: 4,
                                    
                                  }
                                }}
                              />
                            </Grid>
                          </Grid>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item xs={2}>
                              <p className="text-sm text-gray-500 mx-4.5">Poor</p>
                            </Grid>
                            <Grid item xs={10}>
                              
                              <LinearProgress
                                variant="determinate"
                                value={40}
                                color='error'
                                sx={{
                                  minHeight: 8,
                                  minWidth: 100,
                                  borderRadius: 4,
                                  backgroundColor: '#e5e7eb',
                                  '& .MuiLinearProgress-bar': {
                                    backgroundColor: 'success',
                                    borderRadius: 4,
                                    ml:1
                                  }
                                }}
                              />
                            </Grid>
                          </Grid>
                        </Box>
                      </Grid>
        
                    </Grid>
        
                  </div>
                </section>
        
    </div>
  )
}

export default OrderDetail