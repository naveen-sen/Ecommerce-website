import { Button } from '@headlessui/react'
import { Grid, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <div className='w-screen' style={{margin: 0, padding: 0, left: 0}}>
        <Grid className="bg-black text-white text-center mt-10 w-full " container 
        sx={{bgcolor:"black",color:"white",py:3, width:"100%",maxWidth:"100%"}}
        >
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-4 px-30' variant='h6'>Company</Typography>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>About</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Blog</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Press</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Jobs</Button>
                </div>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-4 px-35' variant='h6'>Solutions</Typography>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Marketing</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Analytics</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Commerce</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Insights</Button>
                </div>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-4 px-30' variant='h6'>Documentation</Typography>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Guide</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>API Status</Button>
                </div>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-4 px-30' variant='h6'>Legal</Typography>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Claims</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Privacy</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Terms</Button>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default Footer