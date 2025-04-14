import React from 'react'
import AddressCard from '../Address_Detail/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';
function OrderDetail() {
  return (
    <div className='px:5 lg:px-20'>
        <div className='flex flex-col items-start'>
            <h1 className='font-bold text-xl py-7 pl-2'>Delivery Address</h1>
            <AddressCard/>
        </div>
        <div className='py-20 -ml-3  w-[80rem]'>
            <OrderTracker activeStep={3}/>
        </div>
        <Grid className='space-x-5 container'>
            <Grid item container className='shadow-xl rounded-md p-5 border border-gray-300 w-[80rem] ' sx={{alignItems:"center",justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className='flex'>
                        <img className='w-[6rem] h-[7rem] object-cover object-top'src='https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70' alt=''/>
                        <div className='flex flex-col items-start space-y-1 ml-3'>
                            <p className='font-semibold opacity-80'>Men Slip Mid Rise Jeans</p>
                            <p className='space-x-5 opacity-60 text-xs font-semibold'>
                                <span>Color:Red</span><span>Size:M</span>
                            </p>
                            <p className='opacity-70 font-semibold'>Seller:Lineria</p>
                            <p className='font-semibold opacity-70'>Rs 199</p>
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
        
    </div>
  )
}

export default OrderDetail