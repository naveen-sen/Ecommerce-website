import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from './AddressCard'

function AddDelivery() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        const data = new FormData(e.currentTarget);
        const address={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            address:data.get("address"),
            city:data.get("city"),
            state:data.get("state"),
            zip:data.get("zip"),
            phoneNumber:data.get("phoneNumber"),
        }
        console.log(address);
        

        
    }
  return (
    <div className='w-[100vw]'>
        <Grid container spacing={4}>
            <Grid xs={12} lg={5} className='border border-gray-300 rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll ml-8'>
                <div className='p-5 py-7 border-b cursor-pointer'>
                    <AddressCard/>
                    <Button sx={{mt:2,bgcolor:"blue"}} size='large' variant='contained' fullWidth>
                      Deliver Here
                    </Button>
                </div>
            </Grid>
            <Grid className='w-[50rem]' item xs={12} lg={7}>
                <Box className='border border-gray-300 rounded-s-md shadow-md p-5'>
                    <form onSubmit={handleSubmit} className='w-full'>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="given-name"

                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                autoComplete="given-name"

                                />
                            </Grid>
                            <Grid className='w-full' item xs={24} >
                                <TextField
                                required
                                id="address"
                                name="address"
                                label="Address"
                                fullWidth
                                autoComplete="given-name"
                                multiline
                                rows={4}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                required
                                id="city"
                                name="city"
                                label="City"
                                fullWidth
                                autoComplete="given-name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                required
                                id="state"
                                name="state"
                                label="State/Province/Region"
                                fullWidth
                                autoComplete="given-name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                required
                                id="zip"
                                name="zip"
                                label="Zip/Postal Code"
                                fullWidth

                                />
                            </Grid>
                            <Grid className='w-[25rem]' item xs={12} sm={6}>
                                <TextField
                                required
                                id="phoneNumber"
                                name="phoneNumber"
                                label="Phone Number"
                                fullWidth
                                autoComplete="given-name"

                                />
                            </Grid>
                            <Button type='submit' sx={{mt:12,ml:-59,bgcolor:"blue"}} size='large' variant='contained' >
                                Deliver Here
                            </Button>
                        </Grid>
                    </form>
                </Box>
            </Grid>
        </Grid>
    </div>
  )
}

export default AddDelivery