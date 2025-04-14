import React from 'react'

function AddressCard() {
  return (
    <div className='w-[15rem]'>
      <div className='space-y-3 flex flex-col items-start'>
        <p className='font-semibold'>Chloe Doe</p>
        <p>Indore, Madhya Pradesh, 453641</p>
        <div className='space-y-1'>
          <p className='font-semibold'>Phone Number</p>
          <p>+91 9825478632</p>
        </div>
      </div>
    </div>
  )
}

export default AddressCard