import React, { useState } from 'react'
import { Box, Button, Grid, TextField } from '@mui/material'
import AddressCard from './AddressCard'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {createOrder} from '../../store/Order/action'

function AddDelivery() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = useSelector(store=>store.authReducer)
    const [selectedAddress, setSelectedAddress] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const address={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            addressLine1:data.get("addressLine1"),
            city:data.get("city"),
            state:data.get("state"),
            pincode:data.get("pincode"),
            phone:data.get("phone"),
        }
        
        const orderData = {address,navigate}
        dispatch(createOrder(orderData));
    }

    const handleDeliverHere = () => {
        if(!selectedAddress){
            alert("Please select an address to deliver")
            return
        }
        const orderData = {address: selectedAddress, navigate}
        dispatch(createOrder(orderData))
    }

    return (
        <div className='w-screen'>
            <Grid container spacing={4}>
                <Grid xs={12} lg={5} className='border border-gray-300 rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll ml-8 '>
                    <div className='p-5 py-7 border-b cursor-pointer'>
                        {auth?.user?.address && auth.user.address.length > 0 ? (
                            [...new Map(auth.user.address.map(item => [item.addressLine1, item])).values()]
                            .map((item) => (
                                <AddressCard 
                                    key={item._id} 
                                    address={item} 
                                    onSelect={() => setSelectedAddress(item)} 
                                    selected={selectedAddress?._id === item._id}
                                />
                            ))
                        ) : (
                            <p>No addresses found for the signed-in user.</p>
                        )}
                        <Button 
                            sx={{mt:2,bgcolor:"blue"}} 
                            size='large' 
                            variant='contained' 
                            fullWidth
                            onClick={handleDeliverHere}
                        >
                            Deliver Here
                        </Button>
                    </div>
                </Grid>
                <Grid className='w-[50rem]' item xs={12} lg={7}>
                    <Box className='border border-gray-300 rounded-s-md shadow-md p-5 h-[100%]'>
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
                                    id="addressLine1"
                                    name="addressLine1"
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
                                    id="pincode"
                                    name="pincode"
                                    label="Zip/Postal Code"
                                    fullWidth
                                    />
                                </Grid>
                                <Grid className='w-[25rem]' item xs={12} sm={6}>
                                    <TextField
                                    required
                                    id="phone"
                                    name="phone"
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