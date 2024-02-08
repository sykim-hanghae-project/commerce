import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import getImageUrl from '@/api/getImageUrl'
import getProductsByCategory from '@/api/getProductsByCategory'
import CartDrawer from '@/components/CartDrawer'
import ProductContainer from '@/components/ProductContainer'
import { Button } from '@/components/ui/button'
import { useCartDispatch, useCartState } from '@/context/CartContext'
import { Product } from '@/types/product'
import priceToString from '@/utils/priceToString'

interface ProductImageProps {
  filename: string
}

const ProductImage = ({ filename }: ProductImageProps) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['productImage', filename],
    queryFn: ({ queryKey }) => getImageUrl(queryKey[1]),
    staleTime: 2000
  })

  if (isLoading) return <></>
  if (isError) {
    console.log(error)
    return <></>
  }
  return (
    <img src={data} className='w-full object-cover' />
  )
}

const ProductDetail: React.FC = () => {
  const product = useLoaderData() as Product
  
  const cartState = useCartState()
  const dispatch = useCartDispatch()

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['recommendProducts', product.productCategory],
    queryFn: async ({ queryKey }) =>  getProductsByCategory(queryKey[1], 5, "createdAt", "desc", null),
    staleTime: 2000
  })

  if (isError) console.log(error)

  const AddToCart = () => {
    dispatch({ type: "ADD_ITEM", itemId: product.id, price: product.productPrice })
    window.alert('장바구니에 담겼습니다.')
  }

  return (
    <div className='w-full py-8'>
      <div className='flex w-full'>
        <div className='sticky top-[10%] h-fit w-[45%]'>
          <h1 className='h1 mb-4'>{product.productName}</h1>
          <p>{product.productDescription}</p>

          <div className='flex text-sm mt-12'>
            <p className='w-full '>남은 수량</p>
            <p>{product.productQuantity}</p>
          </div>

          <div className='flex text-sm mt-4'>
            <p className='w-full'>가격</p>
            <p className='min-w-max'>{priceToString(product.productPrice)}</p>
          </div>

          {/* 장바구니 */}
          <div>
            {cartState.items.length > 0 && cartState.items.find((item) => item.id === product.id) ? (
              /* 장바구니에 있으면 */
              <CartDrawer>
                <Button className='w-full mt-4' variant={'secondary'}>장바구니 보기</Button>
              </CartDrawer>
            ) : (
              <Button className='w-full mt-4' onClick={AddToCart}>장바구니 담기</Button>
            )}
          </div>
          
        </div>

        {/*이미지*/}
        <div className='w-[45%] ml-[10%]'>
          <ul>
            {product.productImage.map((filename, idx) => 
              <li key={`product_image_${idx}`}>
                <ProductImage filename={filename} />
              </li>  
            )}
          </ul>
        </div>
      </div>

      {/* 동일 카테고리 상품들 */}
      {!(isError || isLoading) && (
      <div className='mt-8'>
        <p className='text-base mb-4 font-semibold'>추천 상품</p>
        <div>
          <ul className='grid grid-cols-5 gap-x-[1%]'>
            {data.map((product, idx) => (
              <li key={`recommend_products_${idx}`}>
                <ProductContainer product={product} />
              </li>
            ))}
          </ul>
        </div>
      </div>)}
    </div>
  )
}

export default ProductDetail