import { Button, IconButton } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import React from 'react'

function CartItem() {
  return (
    <div className='p-5 shadow-lg border border-gray-300 rounded-md'>
        <div className='flex items-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] bg-gray-200'>
                <img src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="Product" className='w-full h-full object-cover rounded-md object-top'/>
            </div>
            <div className='ml-5 space-y-1 flex flex-col items-start'>
                <p className='font-semibold'>Men Slim Mid Rise Jeans</p>
                <p className='opacity-70 '>Size:L,White</p>
                <p className='opacity-70 mt-2'>Seller:Universaloutfit</p>
                <div className='flex space-x-5 items-center text-lg lg:text-lg text-gray-900 mt-3'>
                <p className='font-semibold'>Rs 199</p>
                <p className='opacity-50  line-through'>Rs 249</p>
                <p className='text-green-600 font-semibold'>20% off</p>

              </div>
              <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                <span className='py-1 px-7 border rounded-sm'>
                  <IconButton >
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                </span>
                  <span className='py-1 px-7 border rounded-sm'>
                  <IconButton sx={{color: "#2874f0", }} >
                    <AddCircleOutlineIcon />
                  </IconButton>
                  </span>
                </div>
                <div>
                  <Button sx={{color: "red",}}>Remove</Button>
                </div>
              </div>

            </div>
        </div>
    </div>
  )
}

export default CartItem