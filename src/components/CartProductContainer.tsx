import { useEffect, useState } from 'react'
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

import getImageUrl from '@/api/getImageUrl'
import getProductById from '@/api/getProductById'
import { Product } from '@/types/product'
import formatDocumentDataToProduct from '@/utils/formatDocumentDataToProduct'
import priceToString from '@/utils/priceToString'
import { CartItem } from '@/types/CartItem';
import { useCartDispatch } from '@/context/CartContext';

interface CartProductContainerProps {
  item: CartItem
}

const CartProductContainer = ({ item }: CartProductContainerProps) => {
  // const cartState = useCartState()
  const dispatch = useCartDispatch()

  const [quantity, setQuantity] = useState<number>(item.quantity)

  const [product, setProduct] = useState<Product>()
  const [imgUrl, setImgUrl] = useState<string>()

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

  useEffect(() => {
    getProductById(item.id)
    .then((data) => {
      if (data) 
        setProduct(formatDocumentDataToProduct(data))
    })
  }, [])

  useEffect(() => {
    if (product) {
      getImageUrl(product.productImage[0])
      .then((url) => setImgUrl(url))
    }
  }, [product])

  return product && (
    <div className='flex'>
      
      <div className='mr-4'>
        <img src={imgUrl} className='w-20 h-20 object-cover' />
      </div>

      <div className='w-full '>
        <div className='flex mb-2'>
          <p className='text-sm text-ellipsis line-clamp-1 w-full'>{product.productName}</p>
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
          
          <button onClick={onDelete} className='text-sm hover:underline min-w-max'>
            <p>삭제</p>
          </button>
        </div>
      </div>        
    </div>
  )
}

export default CartProductContainer