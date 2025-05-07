import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function OrderCard({order}) {
    const navigate = useNavigate()
    // const {orders} = useSelector((state)=>state.order)
    console.log("Order details:", {
        id: order?._id,
        items: order?.orderItems,
        status: order?.orderStatus
    })
  return (
    <div onClick={()=>navigate(`/account/orders/${order._id}`)} className='w-[55rem] mt-2 shadow-lg hover:shadow-2xl border border-gray-300 rounded-lg border-b-blue-50 '>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src={order?.orderItems?.[0]?.product?.imageUrl} 
                            alt={order?.orderItems?.[0]?.product?.title}/>
                    <div className='ml-5 space-y-2 flex flex-col items-start'>
                        <p className=''>{order?.orderItems?.[0]?.product?.title || "No product title"}</p>
                        <p className='opacity-50 text-xs font-semibold'>Size:{order?.orderItems?.[0]?.size || 'M'}</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: {order?.orderItems?.[0]?.product?.color || 'Black'}</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2}>
                <p>{order?.discountedPrice || 199}</p>
            </Grid>
            <Grid item xs={4}>
                {order?.orderStatus === 'delivered' &&  
                <div>
                    <p>
                    <AdjustIcon sx={{width:'15px',height:'25px'}} className='text-green-600 mb-0.5 mr-0.5'/>
                    <span className='pr-2'>Delivered on {new Date(order?.deliveryDate).toLocaleDateString()}</span>
                    </p>
                    <p className='text-xs'>Order Has been Delivered</p>
                </div>}
                {order?.orderStatus !== 'delivered' && 
                <p className='flex items-center pr-2'>
                    <span>Expected Delivery By {new Date(order?.deliveryDate).toLocaleDateString()}</span>
                </p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard