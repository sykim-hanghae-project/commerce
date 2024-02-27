import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

import getImageUrl from '@/api/getImageUrl'
import priceToString from '@/utils/priceToString'
import { useCartDispatch } from '@/context/CartContext';
import Loading from './Loading';
import { Product } from '@/types/product';

interface CartProductImageProps {
  filename: string
} 

const CartProductImage = React.memo(({ filename }: CartProductImageProps) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['productImage', filename],
    queryFn: ({ queryKey }) => getImageUrl(queryKey[1])
  })

  if (isLoading) return <Loading />
  if (isError) {
    console.log(error)
    return <div className='w-20 h-20 bg-gray-100'></div>
  }

  return (
    <img src={data} className='w-20 h-20 object-cover min-w-20' loading='lazy' />
  )
})

interface CartProductContainerProps {
  pid: string
  product: Product | null | undefined
  quantity: number
  isLoading: boolean
  isError: boolean
  error: unknown
}

const CartProductContainer = React.memo(({ pid, product, quantity: cquantity, isLoading, isError, error }: CartProductContainerProps) => {
  const navigate = useNavigate()
  const dispatch = useCartDispatch()

  const [quantity, setQuantity] = useState<number>(cquantity)

  if (isLoading) {
    return (
      <div className='w-full flex justify-center'>
        <Loading />
      </div>
    )
  }
  if (isError) {
    console.log(error)
    return (
      <div className='text-sm'>
        <p>상품을 불러오지 못했습니다. 잠시 후 다시 시도해주세요.</p>
      </div>
    )
  }

  function getPrice() {
    if (product) 
      return priceToString(product.productPrice * quantity)
  }

  const onIncrementQuantity = () => {
    setQuantity(quantity + 1)
    dispatch({ type: "INCREMENT_ITEM", itemId: pid })
  }

  const onDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
      dispatch({ type: 'DECREMENT_ITEM', itemId: pid })
    }
  }

  const onDelete = () => {
    dispatch({ type: "DELETE_ITEM", itemId: pid })
  }

  const onClick = () => {
    navigate(`/product/${pid}`)
  }

  return product && (
    <div className='flex relative'>
      {product.productQuantity <= 0 && (
        <div className='absolute left-0 top-0 w-full h-full bg-white opacity-50' />
      )}
      <div className='mr-4 cursor-pointer' onClick={onClick}>
        <CartProductImage filename={product.productImage[0]} />
      </div>

      <div className='w-full'>
        {product.productQuantity <= 0 && (
          <div className='bg-gray-900 w-fit'>
            <p className='text-xs text-white'>품절</p>
          </div>
        )}
        <div className='flex mb-2'>
          <p className='text-sm text-ellipsis line-clamp-1 w-full cursor-pointer' onClick={onClick}>
          {product.productName}
          </p>
          <p className='text-sm min-w-max'>{getPrice()}</p>
        </div>

        <div className='flex'>
        {/* 수량 증감 */}
          <div className='flex w-full '>
            <button onClick={onDecrementQuantity}><CiCircleMinus /></button>
            <div className='mx-2'>
              <p>{quantity}</p>
            </div>
            <button onClick={onIncrementQuantity}><CiCirclePlus /></button>
          </div>
          
          <button onClick={onDelete} className='text-xs hover:underline min-w-max'>
            <p>삭제</p>
          </button>
        </div>
      </div>        
    </div>
  )
})

export default CartProductContainer