import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

function OrderCard() {
    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate('/account/orders/:orderId')} className='w-[50rem] mt-2 shadow-lg hover:shadow-2xl border border-gray-300 rounded-lg border-b-blue-50'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70' alt=''/>
                    <div className='ml-5 space-y-2 flex flex-col items-start'>
                        <p className=''>Mens Slim Mid Rise Black Jeans</p>
                        <p className='opacity-50 text-xs font-semibold'>Size:M</p>
                        <p className='opacity-50 text-xs font-semibold'>Color:Black</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2}>
                <p>Rs 199</p>
            </Grid>
            <Grid item xs={4}>
                {true && 
                <div>
                    <p>
                    <AdjustIcon sx={{width:'15px',height:'25px'}} className='text-green-600 mb-0.5 mr-0.5'/>
                    <span className='pr-2'>Delivered on March 20,2025</span>
                    </p>
                    <p className='text-xs'>Order Has been Delivered</p>
                </div>}
                {false && <p>
                    <span>Expected Delivery on March 20,2025</span>
                </p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard