import { Avatar, Box, Grid } from '@mui/material'
import Rating from '@mui/material/Rating'
import React from 'react'

function ProductReviewCard() {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#9155fd"}}>R</Avatar>
                </Box>
            </Grid>
            <Grid item xs={9}>
                <div className='space-y-2'>
                    <div className='flex justify-between items-center'>
                        <p className='font-semibold'>Ram</p>
                        <p className='text-gray-500 text-sm'>April 5,2025</p>
                    </div>
                </div>
                <Rating className='flex items-start'
                            value={4} 
                            name='half-rating' 
                            readOnly 
                        />
                    
                    <p className='text-gray-600 mt-2'>This is a good product </p>
            </Grid>
        </Grid> 
    </div>
  )
}

export default ProductReviewCard