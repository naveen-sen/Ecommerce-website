import { Button } from '@headlessui/react'
import { Grid, Typography } from '@mui/material'

function Footer() {
  return (
    <div className='w-full' style={{margin: 0, padding: 0, left: 0}}>
        <Grid className="bg-black text-white text-center mt-10 w-full" container 
        sx={{bgcolor:"black",color:"white",py:3, width:"100%",maxWidth:"100%", textAlign: 'center'}}
        >
            <Grid item xs={12} sm={6} md={3} sx={{py: 2}}>
                <Typography className='pb-4 px-35' variant='h6'>Company</Typography>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom sx={{display: 'block', width: '100%'}}>About</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom sx={{display: 'block', width: '100%'}}>Blog</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom sx={{display: 'block', width: '100%'}}>Press</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom sx={{display: 'block', width: '100%'}}>Jobs</Button>
                </div>
            </Grid>

            <Grid item xs={12} sm={6} md={3} sx={{py: 2}}>
                <Typography className='pb-4 px-35' variant='h6'>Solutions</Typography>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom sx={{display: 'block', width: '100%'}}>Marketing</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom sx={{display: 'block', width: '100%'}}>Analytics</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom sx={{display: 'block', width: '100%'}}>Commerce</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom sx={{display: 'block', width: '100%'}}>Insights</Button>
                </div>
            </Grid>

            <Grid item xs={12} sm={6} md={3} sx={{py: 2}}>
                <Typography className='pb-4 px-30' variant='h6'>Documentation</Typography>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom sx={{display: 'block', width: '100%'}}>Guide</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom sx={{display: 'block', width: '100%'}}>API Status</Button>
                </div>
            </Grid>

            <Grid item xs={12} sm={6} md={3} sx={{py: 2}}>
                <Typography className='pb-4 px-39' variant='h6'>Legal</Typography>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom sx={{display: 'block', width: '100%'}}>Claims</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom sx={{display: 'block', width: '100%'}}>Privacy</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom sx={{display: 'block', width: '100%'}}>Terms</Button>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default Footer