import { useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

import getImageUrl from '@/api/getImageUrl'
import getProduct from '@/api/getProduct'
import formatDocumentDataToProduct from '@/utils/formatDocumentDataToProduct'
import priceToString from '@/utils/priceToString'
import { CartItem } from '@/types/CartItem';
import { useCartDispatch } from '@/context/CartContext';
import Loading from './Loading';

interface CartProductImageProps {
  filename: string
} 

const CartProductImage = ({ filename }: CartProductImageProps) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['product', filename],
    queryFn: ({ queryKey }) => getImageUrl(queryKey[1])
  })

  if (isLoading) return <Loading />
  if (isError) {
    console.log(error)
    return <div className='w-20 h-20 bg-gray-100'></div>
  }

  return (
    <img src={data} className='w-20 h-20 object-cover' />
  )
}

interface CartProductContainerProps {
  item: CartItem
}

const CartProductContainer = ({ item }: CartProductContainerProps) => {
  // const cartState = useCartState()
  const dispatch = useCartDispatch()

  const [quantity, setQuantity] = useState<number>(item.quantity)

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['product', item.id],
    queryFn: ({ queryKey }) => getProduct(queryKey[1]),
    staleTime: 20000 // 20초
  })

  if (isError) {
    console.log(error)
  }

  const onIncrementQuantity = () => {
    setQuantity(quantity + 1)
    dispatch({ type: "INCREMENT_ITEM", itemId: item.id })
  }

  const onDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
      dispatch({ type: 'DECREMENT_ITEM', itemId: item.id })
    }
  }

  const onDelete = () => {
    dispatch({ type: "DELETE_ITEM", itemId: item.id })
  }

  const onClick = () => {
    window.location.assign(`/product/${item.id}`)
  }

  return data && (
    <div className='flex'>
      
      <div className='mr-4 cursor-pointer' onClick={onClick}>
        <CartProductImage filename={formatDocumentDataToProduct(data).productImage[0]} />
      </div>

      <div className='w-full '>
        <div className='flex mb-2'>
          <p className='text-sm text-ellipsis line-clamp-1 w-full cursor-pointer' onClick={onClick}>
            {isError ? "?" : isLoading ? "loading..." : data.productName}
          </p>
          <p className='text-sm min-w-max'>{priceToString(item.price * item.quantity)}</p>
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
}

export default CartProductContainer