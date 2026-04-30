import AdjustIcon from '@mui/icons-material/Adjust';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function OrderCard({order}) {
    const navigate = useNavigate()
    const {orders} = useSelector((state)=>state.order)
    console.log("Order details:", {
        id: order?._id,
        items: order?.orderItems,
        status: order?.orderStatus
    })
  return (
    <div onClick={()=>navigate(`/account/orders/${order._id}`)} className='w-full mt-2 shadow-lg hover:shadow-2xl border border-gray-300 rounded-lg border-b-blue-50 p-2 sm:p-4 overflow-hidden'>
        <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
            {/* Product Info */}
            <div className='flex cursor-pointer gap-2 sm:gap-4 flex-1 min-w-0'>
                <img className='w-16 h-16 sm:w-20 sm:h-20 object-cover object-top flex-shrink-0' src={order?.orderItems?.[0]?.product?.imageUrl} 
                        alt={order?.orderItems?.[0]?.product?.title}/>
                <div className='space-y-1 sm:space-y-2 flex flex-col items-start min-w-0 flex-1'>
                    <p className='text-sm sm:text-base truncate w-full'>{order?.orderItems?.[0]?.product?.title || "No product title"}</p>
                    <p className='opacity-50 text-xs font-semibold'>Size:{order?.orderItems?.[0]?.size || 'M'}</p>
                    <p className='opacity-50 text-xs font-semibold truncate w-full'>Color: {order?.orderItems?.[0]?.product?.color || 'Black'}</p>
                </div>
            </div>

            {/* Price and Status */}
            <div className='flex gap-3 sm:gap-4 sm:flex-col sm:items-end sm:justify-start flex-shrink-0'>
                <div className='flex-1 sm:flex-none'>
                    <p className='text-sm sm:text-base font-semibold'>₹{order?.discountedPrice || 199}</p>
                </div>
                <div className='flex-1 sm:flex-none text-xs sm:text-sm text-right sm:text-right'>
                    {order?.orderStatus === 'delivered' &&  
                    <div>
                        <p className='flex items-center gap-1 justify-end'>
                        <AdjustIcon sx={{width:'12px',height:'12px'}} className='text-green-600 flex-shrink-0'/>
                        <span className='truncate'>Delivered on {new Date(order?.deliveryDate).toLocaleDateString()}</span>
                        </p>
                        <p className='text-xs'>Order delivered</p>
                    </div>}
                    {order?.orderStatus !== 'delivered' && 
                    <p className='flex items-center gap-1 justify-end'>
                        <span className='truncate'>Expected by {new Date(order?.deliveryDate).toLocaleDateString()}</span>
                    </p>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderCard