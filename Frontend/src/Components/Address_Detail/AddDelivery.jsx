import { Box, Button, Grid, TextField } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createOrder } from '../../store/Order/action'
import AddressCard from './AddressCard'

function AddDelivery() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = useSelector(store=>store.authReducer)
    const [selectedAddress, setSelectedAddress] = useState(null)
    const [showForm, setShowForm] = useState(false)

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
        <div className='w-full px-2 sm:px-4'>
            <Grid container spacing={2} sm={{spacing:4}}>
                {/* Left: Existing Addresses */}
                <Grid item xs={12} lg={5} className='border border-gray-300 rounded-lg shadow-md p-3 sm:p-5 max-h-96 overflow-y-auto'>
                    <h3 className='font-semibold text-base sm:text-lg mb-4'>Delivery Addresses</h3>
                    {auth?.user?.address && auth.user.address.length > 0 ? (
                        <>
                            <div className='space-y-3'>
                                {[...new Map(auth.user.address.map(item => [item.addressLine1, item])).values()]
                                .map((item) => (
                                    <AddressCard 
                                        key={item._id} 
                                        address={item} 
                                        onSelect={() => {
                                            setSelectedAddress(item)
                                            setShowForm(false)
                                        }} 
                                        selected={selectedAddress?._id === item._id}
                                    />
                                ))}
                            </div>
                            <Button 
                                sx={{mt:4, width:'100%'}} 
                                size='small' 
                                sm={{size:'large'}}
                                variant='outlined' 
                                onClick={() => setShowForm(true)}
                            >
                                + Add New Address
                            </Button>
                            {selectedAddress && !showForm && (
                                <Button 
                                    sx={{mt:2, width:'100%', bgcolor:"#1976d2"}} 
                                    size='small' 
                                    sm={{size:'large'}}
                                    variant='contained' 
                                    onClick={handleDeliverHere}
                                >
                                    Deliver Here
                                </Button>
                            )}
                        </>
                    ) : (
                        <p className='text-sm text-gray-600'>No addresses found. Please add one.</p>
                    )}
                </Grid>

                {/* Right: Add/Edit Address Form */}
                <Grid item xs={12} lg={7}>
                    {(showForm || (auth?.user?.address && auth.user.address.length === 0)) && (
                        <Box className='border border-gray-300 rounded-lg shadow-md p-3 sm:p-5'>
                            <h3 className='font-semibold text-base sm:text-lg mb-4'>{showForm ? 'Add New Address' : 'Enter Address'}</h3>
                            <form onSubmit={handleSubmit} className='w-full'>
                                <Grid container spacing={2} sm={{spacing:3}}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="First name"
                                        fullWidth
                                        size='small'
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
                                        size='small'
                                        autoComplete="given-name"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                        required
                                        id="addressLine1"
                                        name="addressLine1"
                                        label="Address"
                                        fullWidth
                                        size='small'
                                        autoComplete="given-name"
                                        multiline
                                        rows={3}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                        required
                                        id="city"
                                        name="city"
                                        label="City"
                                        fullWidth
                                        size='small'
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
                                        size='small'
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
                                        size='small'
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                        required
                                        id="phone"
                                        name="phone"
                                        label="Phone Number"
                                        fullWidth
                                        size='small'
                                        autoComplete="given-name"
                                        />
                                    </Grid>
                                    <Grid item xs={12} className='flex gap-2 sm:gap-3'>
                                        <Button type='submit' sx={{flex:1, bgcolor:"#1976d2"}} size='small' sm={{size:'large'}} variant='contained'>
                                            Deliver Here
                                        </Button>
                                        {showForm && (
                                            <Button 
                                                type='button' 
                                                sx={{flex:1}} 
                                                size='small' 
                                                sm={{size:'large'}} 
                                                variant='outlined'
                                                onClick={() => setShowForm(false)}
                                            >
                                                Cancel
                                            </Button>
                                        )}
                                    </Grid>
                                </Grid>
                            </form>
                        </Box>
                    )}
                    {!showForm && selectedAddress && auth?.user?.address && auth.user.address.length > 0 && (
                        <Box className='border border-gray-300 rounded-lg shadow-md p-3 sm:p-5 text-center'>
                            <p className='text-sm sm:text-base text-gray-600 mb-4'>Address selected. Click "Deliver Here" on the left.</p>
                        </Box>
                    )}
                </Grid>
            </Grid>
        </div>
        
    )
    
}

export default AddDelivery