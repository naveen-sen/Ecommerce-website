import React from 'react'
import { Button, IconButton } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import {updateCartItem,removeCartItem} from '../../store/Cart/action'
import {useDispatch} from 'react-redux'

function CartItem({item}) {
  const dispatch = useDispatch();

  const handleUpdateCartItem = (num)=>{
    const data = {data:{quantity:item.quantity+num},cartItemId:item?._id}

    dispatch(updateCartItem(data));
  }
  const handleRemoveCartItem = ()=>{
    dispatch(removeCartItem(item?._id));
  }
  return (
    <div className='p-5 shadow-lg border border-gray-300 rounded-md'>
        <div className='flex items-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] bg-gray-200'>
                <img src={item.product?.imageUrl} alt="Product" className='w-full h-full object-cover rounded-md object-top'/>
            </div>
            <div className='ml-5 space-y-1 flex flex-col items-start'>
                <p className='font-semibold'>{item.product?.title}</p>
                <p className='opacity-70 '>Size: {item.size}, Color: {item.product?.color}</p>
                <p className='opacity-70 mt-2'>Seller:{item.product?.brand}</p>
                <div className='flex space-x-5 items-center text-lg lg:text-lg text-gray-900 mt-3'>
                <p className='font-semibold'>₹ {item.discountedPrice}</p>
                <p className='opacity-50  line-through'>₹{item.price}</p>
                <p className='text-green-600 font-semibold'>{item.product?.discountPercent}% off</p>

              </div>
              <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                <span className='py-[-2] px-3 border rounded-sm cursor-pointer'>
                  <IconButton onClick={()=>handleUpdateCartItem(-1)} disabled={item.quantity<=1}>
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                </span>
                  <span className='py-1 px-7 border rounded-sm'>{item.quantity}</span>
                  <IconButton onClick={()=>handleUpdateCartItem(1)} sx={{color: "#2874f0", }} >
                    <AddCircleOutlineIcon />
                  </IconButton>
                </div>
                <div>
                  <Button onClick={handleRemoveCartItem} sx={{color: "red",}}>Remove</Button>
                </div>
              </div>

            </div>
        </div>
    </div>
  )
}

export default CartItem