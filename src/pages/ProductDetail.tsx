import React, { useMemo } from 'react'
import { useLoaderData } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import getProductsByCategory from '@/api/getProductsByCategory'
import ProductContainer from '@/components/ProductContainer'
import { Button } from '@/components/ui/button'
import { useCartDispatch, useCartState } from '@/context/CartContext'
import { Product } from '@/types/product'
import priceToString from '@/utils/priceToString'
import MetaTag from '@/components/MetaTag'
import CartDrawer from '@/components/CartDrawer'

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

  const addToCart = () => {
    dispatch({ type: "ADD_ITEM", itemId: product.id, price: product.productPrice })
    window.alert('장바구니에 담겼습니다.')
  }

  const isInCart = useMemo(() => {
    return cartState.items.length > 0 && cartState.items.find((item) => item.id === product.id)
  }, [cartState, product])

  return (
    <>
      <MetaTag  
        title={`${product.productName} - XSO`}
        description={`${product.productDescription}`}
      />

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
              {isInCart 
                ? (
                /* 장바구니에 있으면 */
                  <CartDrawer>
                    <Button className='w-full mt-4' variant={'secondary'}>장바구니 보기</Button>
                  </CartDrawer>
                ) 
                : product.productQuantity > 0 
                ? <Button className='w-full mt-4' onClick={addToCart}>장바구니 담기</Button>
                : <Button className='w-full mt-4' disabled>품절</Button>}
            </div>
            
          </div>

          {/*이미지*/}
          <div className='w-[45%] ml-[10%]'>
            <ul>
              {product.productImage.map((url, idx) => 
                <li key={`product_image_${idx}`}>
                  <img src={url} className='w-full object-cover' loading='lazy' />
                </li>  
              )}
            </ul>
          </div>
        </div>

        {/* 동일 카테고리 상품들 */}
        {!(isLoading || isError) && (
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
    </>
  )
}

export default ProductDetail