import React from 'react'
import priceToString from '@/utils/priceToString'

interface OrderProductContainerProps {
  imageUrl: string,
  productName: string,
  quantity: number,
  price: number
}

const OrderProductContainer = React.memo(({ imageUrl, productName, quantity, price }: OrderProductContainerProps) => {

  return (
    <div className='flex items-center text-sm'>
      <img src={imageUrl} className='w-24 h-24 object-cover min-w-24' loading='lazy' />
      
      <div className='ml-4 w-full'>
        <p className='font-medium mb-2'>{productName}</p>
        <p className='text-gray-500'>{`수량: ${quantity}개`}</p>
      </div>

      <p className='min-w-max font-medium'>{priceToString(price * quantity)}</p>
    </div>
  )
})

export default OrderProductContainer