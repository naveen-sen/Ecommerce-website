import StarBorderIcon from '@mui/icons-material/StarBorder'
import { Box, LinearProgress, Rating } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOrderById } from '../../store/Order/action'
import AddressCard from '../Address_Detail/AddressCard'
import ProductReviewCard from '../ProductDetail/ProductReviewCard'
import OrderTracker from './OrderTracker'
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
        <div className='flex flex-col items-start pl-4'>
            <h1 className='font-bold text-xl py-7 pl-2'>Delivery Address</h1>
            <AddressCard address={order.shippingAddress}/>
        </div>
        <div className='py-20 -ml-2  w-full'>
            <OrderTracker activeStep={2}/>
        </div>
        <div className='w-full'>
            <div className='shadow-xl rounded-md p-4 sm:p-5 border border-gray-300 w-full'>
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
                    <div className='flex gap-3 sm:gap-4 min-w-0 flex-1'>
                        <img className='w-16 h-20 sm:w-24 sm:h-28 object-cover object-top flex-shrink-0'src={orderItem?.product?.imageUrl} 
                                alt=''/>
                        <div className='flex flex-col items-start space-y-1 min-w-0 flex-1'>
                            <p className='font-semibold opacity-80 text-sm sm:text-base truncate w-full'>{orderItem?.product?.title || "No product title"}</p>
                            <p className='opacity-60 text-xs font-semibold flex flex-col sm:flex-row gap-1 sm:gap-5'>
                                <span>Color: {orderItem?.product?.color}</span><span>Size: {orderItem?.size}</span>
                            </p>
                            <p className='opacity-70 font-semibold text-xs sm:text-sm'>Seller: {orderItem?.product?.brand}</p>
                            <p className='font-semibold opacity-70 text-green-800 text-sm sm:text-base'>Rs {orderItem?.discountedPrice}</p>
                        </div>
                    </div>
                    
                    <div className='flex-shrink-0'>
                        <Box sx={{color:deepOrange[400]}} className='flex items-center gap-1 sm:gap-2 text-xs sm:text-sm'>
                            <StarBorderIcon sx={{fontSize:"1.5rem"}} className='flex-shrink-0'></StarBorderIcon>
                            <span className='text-black whitespace-nowrap'>Rate & Review</span>
                        </Box>
                    </div>
                </div>
            </div>
        </div>

        <section className='w-full flex flex-col'>
                  <div className="flex justify-start mt-5">
                    <h1 className='font-semibold text-lg pb-4 pl-2'>Recent Rating and Reviews</h1>
                  </div>
                  <div className='border border-gray-300 p-3 sm:p-5 '>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                      <div>
                        <div className='space-y-3 sm:space-y-5'>
                          {[1,1,1].map((item)=> <ProductReviewCard/>)}
                        </div>
                      </div>
        
                      <div className='w-full'>
                        <h1 className='text-lg sm:text-xl font-semibold pb-4'>Product Ratings</h1>
                        
                        <div className='flex flex-col sm:flex-row sm:items-center gap-3 mb-4'>
                          <Rating value={4.6} precision={0.5} readOnly />
                          <p className='opacity-60 text-sm'>5794 Ratings</p>
                        </div>
        
                        <Box className='space-y-2 sm:space-y-3 mt-5'>
                          {[
                            { label: 'Excellent', value: 40, color: '#22c55e' },
                            { label: 'Very Good', value: 40, color: '#86efac' },
                            { label: 'Good', value: 40, color: '#fbbf24' },
                            { label: 'Average', value: 40, color: '#f97316' },
                            { label: 'Poor', value: 40, color: '#ef4444' }
                          ].map((rating, idx) => (
                            <div key={idx} className='flex items-center gap-2 sm:gap-3'>
                              <p className="text-xs sm:text-sm text-gray-500 w-14 sm:w-20 md:w-20 flex-shrink-0">{rating.label}</p>
                              <LinearProgress
                                variant="determinate"
                                value={rating.value}
                                sx={{
                                  minHeight: 6,
                                  minWidth: 100,
                                  flex: 1,
                                  borderRadius: 4,
                                  backgroundColor: '#e5e7eb',
                                  '& .MuiLinearProgress-bar': {
                                    backgroundColor: rating.color,
                                    borderRadius: 4
                                  }
                                }}
                              />
                            </div>
                          ))}
                        </Box>
                      </div>
        
                    </div>
        
                  </div>
                </section>

    </div>
  )
}

export default OrderDetail