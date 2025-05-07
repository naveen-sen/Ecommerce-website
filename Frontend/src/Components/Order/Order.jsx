import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import OrderCard from './OrderCard'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderHistory } from '../../store/Order/action'

const orderStatus=[
    {label:"On The Way",value:"On_The_Way"},
    {label:"Pending",value:"pending"},
    {label:"Delivered",value:"delivered"},
    {label:"Cancelled",value:"cancelled"},
]

function Order() {
    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.authReducer)
    const {orders} = useSelector((state)=>state.order)
    console.log("Orders",orders)

    useEffect(()=>{
        dispatch(getOrderHistory(user?._id))
    },[dispatch])

    if(!orders){
        <div>No Order to show...</div>
    }
  return (
    <div>
        <Grid container sx={{justifyContent:"space-between"}}>
            <Grid item xs={2.5}>
                <div className='h-auto shadow-lg bg-white p-5 sticky top-5 '>
                    <h1 className='font-bold text-lg'>Filter</h1>
                    <div className='space-y-4 mt-10'>
                        <h1 className='font-semibold'>ORDER STATUS</h1>
                        {orderStatus.map((option)=>
                        <div className='flex items-center'>
                            <input defaultValue={option.value} type='checkbox' className='h-4 w-4 border-gray-300 text-amber-800 focus:ring-amber-500'/>

                            <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}>{option.label}</label>
                        </div>)}
                        
                    </div>

                </div>
            </Grid>
            <Grid item xs={9}>
                {orders?.map((order)=><OrderCard key={order._id} order={order}/>)}
            </Grid>
        </Grid>
    </div>
  )
}

export default Order