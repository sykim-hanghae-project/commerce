import React, { lazy, useMemo } from 'react'
import { Drawer } from 'vaul'
import { useQueries } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";

import { Button } from './ui/button'
import { useCartState } from '@/context/CartContext'
import priceToString from '@/utils/priceToString'
import getProduct from '@/api/getProduct';
import { OrderItem } from '@/types/CartItem';

const CartProductContainer = lazy(() => import('./CartProductContainer'))

interface CartDrawerProps {
  children: React.ReactNode
}

const CartDrawer = ({ children }: CartDrawerProps) => {
  const cartState = useCartState()
  
  const navigate = useNavigate()

  const productQueries = useQueries({
    queries: cartState.items.map((item) => (
      { 
        queryKey: ['product', item.id],
        queryFn: () => getProduct(item.id),
        staleTime: 30000
      }
    ))
  })

  const orderableProducts = useMemo(() => {
    // console.log('getOrderableProducts')
    let res: OrderItem[] = [] // 주문 가능한 상품

    for (let i=0; i<cartState.items.length; i+=1) {
      const { data, isLoading } = productQueries[i]
      if (isLoading) { // 로딩 중 -> 계산 중지
        res = []
        break
      }
      
      if (data && data.productQuantity > 0) {
        res.push({
          product: data,
          quantity: cartState.items[i].quantity
        })
      }
    }

    return res
  }, [cartState, productQueries])

  const totalPrice = useMemo(() => {
    let total = 0 // 가격 합계

    for (let i=0; i<cartState.items.length; i+=1) {
      const { data, isLoading } = productQueries[i]
      if (isLoading) { // 로딩 중 -> 계산 중지
        break
      }
      
      if (data && data.productQuantity > 0) {
        total += data.productPrice * cartState.items[i].quantity
      }
    }

    return total
  }, [cartState, productQueries])

  const isCartEmpty = useMemo(() => {
    // console.log('isCartEmpty')
    // 장바구니 내 상품이 없음
    if (cartState.items.length === 0) 
      return true

    // 장바구니 내 모든 상품이 존재하지 않는(삭제된) 상품
    if (productQueries.every(({ data }) => data === null)) 
      return true

    return false
  }, [cartState, productQueries])

  const onClickOrderBtn = () => {
    navigate('/order', {
      state: {
        products: orderableProducts
      }
    })
  }

  return (
    <Drawer.Root direction='right'>
      <Drawer.Trigger asChild>
        {children}
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className='fixed inset-0 bg-black/40' />

        <Drawer.Content className='h-full w-2/4 fixed right-0 bottom-0 px-16 py-8 bg-white'>
          <div className='flex justify-end'>
            <Drawer.Close>
              <button className='text-xl'><IoMdClose /></button>
            </Drawer.Close>
          </div>

          <Drawer.Title className='h1 mb-8'>장바구니</Drawer.Title>

          {isCartEmpty
            ? (
              <div><p>장바구니가 비었습니다.</p></div>
            ) 
            : (
            <div>
              {/* 상품 */}
              <div className='py-4 border-y border-y-black'>
                <ul>
                {productQueries.map(({ data, isLoading, isError, error }, idx) => (
                  <li className='CartItem' key={`cart_item_${idx}`}>
                    <CartProductContainer 
                      pid={cartState.items[idx].id}
                      product={data}
                      isLoading={isLoading}
                      isError={isError}
                      error={error}
                      quantity={cartState.items[idx].quantity}
                    />
                  </li>
                ))}
                </ul>
              </div>

              <div className='flex my-8 justify-end'>
                <p className='mr-4'>합계</p>
                <p className='font-semibold min-w-max'>{priceToString(totalPrice)}</p>
              </div>

              <Button className='w-full' disabled={orderableProducts.length === 0} onClick={onClickOrderBtn}>주문하기</Button>
            </div>) 
          }
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>

  )
}

export default CartDrawer