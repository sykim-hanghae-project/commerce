import React from 'react'
import { Drawer } from 'vaul'
import { IoMdClose } from "react-icons/io";

import { Button } from './ui/button'
import { useCartState } from '@/context/CartContext'
import CartProductContainer from './CartProductContainer'
import priceToString from '@/utils/priceToString'
interface CartDrawerProps {
  children: React.ReactNode
}

const CartDrawer = ({ children }: CartDrawerProps) => {
  const cartState = useCartState()
  // console.log(cartState.items.length)

  const getTotalPrice = () => {
    let totalPrice = 0
    cartState.items.forEach((item) => {
      totalPrice += item.price * item.quantity
    })
    return totalPrice
  }

  const onClickOrderBtn = () => {
    window.location.assign('/order')
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

          {cartState.items.length > 0 ? (
            <div>
              {/* 상품 */}
              <div className='py-4 border-y border-y-black'>
                <ul>
                {cartState.items.map((item, idx) => (
                  <li className='CartItem' key={`cart_item_${idx}`}>
                    <CartProductContainer item={item} />
                  </li>
                ))}
                </ul>
              </div>

              <div className='flex my-8 justify-end'>
                <p className='mr-4'>합계</p>
                <p className='font-semibold min-w-max'>{priceToString(getTotalPrice())}</p>
              </div>

              <Button className='w-full' onClick={onClickOrderBtn}>주문하기</Button>
            </div>) : (
              <div><p>장바구니가 비었습니다.</p></div>
            )
          }
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>

  )
}

export default CartDrawer