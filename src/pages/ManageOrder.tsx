import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Timestamp } from 'firebase/firestore'
import { IoMdClose } from "react-icons/io";

import getAllOrderBySeller from '@/api/getAllOrderBySeller'
import getImageUrl from '@/api/getImageUrl'
import getProduct from '@/api/getProduct'
import getUser from '@/api/getUser'
import Loading from '@/components/Loading'
import Modal from '@/components/Modal'
import MyPageLayout from '@/components/layout/MyPageLayout'
import { User } from '@/types/user'
import formatDate from '@/utils/formatDate'
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import orderStatusToString from '@/utils/orderStatusToString';
import { Status } from '@/types/order';
import MetaTag from '@/components/MetaTag';

interface ProductImageProps {
  filename: string
}

const ProductImage = React.memo(({ filename }: ProductImageProps) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['productImage', filename],
    queryFn: ({ queryKey }) => getImageUrl(queryKey[1]),
    staleTime: Infinity
  })

  if (isLoading) return <Loading />
  if (isError) {
    console.log(error)
    return <div className='w-full h-full bg-gray-100'></div>
  }

  return (
    <img src={data} className='w-full h-full object-cover' />
  )
}) 

interface OrderContainerProps {
  orderId: string,
  status: Status,
  productId: string,
  quantity: number,
  buyerId: string,
  date: Timestamp,
}

const OrderContainer = React.memo(({
  orderId,
  status,
  productId,
  quantity,
  buyerId,
  date 
}: OrderContainerProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [statusVal, setStatusVal] = useState(status)

  const { data: product, isLoading, isError: isError_product, error: error_product} = useQuery({
    queryKey: ['product', productId],
    queryFn: ({ queryKey }) => getProduct(queryKey[1])
  })

  const { data: buyer, isError: isError_buyer, error: error_buyer} = useQuery({
    queryKey: ['user', buyerId],
    queryFn: ({ queryKey }) => getUser(queryKey[1])
  })

  const onClickContainer = () => {
    toggle()
  }

  const toggle = () => {
    setIsModalOpen(!isModalOpen)
  }

  if (isLoading) return <Loading />
  if (!product || isError_product) {
    console.log("query - product", error_product)
    return <p>주문 상품을 불러오지 못했습니다.</p>
  }
  if (isError_buyer) console.log("query - buyer", error_buyer)


  const onClickChangeStatusBtn = async () => {
    console.log(statusVal)
    const res = window.confirm("주문 상태를 정말 변경하시겠습니까?")
    if (res) {
      const { default: updateOrderStatus } = await import('@/api/updateOrderStatus')

      updateOrderStatus(orderId, statusVal)
      .then(() => {
        window.alert(`주문 상태를 변경했습니다.`)
        window.location.reload()
      })
      .catch((error) => {
        console.log(error)
        window.alert('주문 상태를 변경하지 못했습니다.')
      })
    }
  }

  return (
    <div>
      <div className='flex items-center text-sm p-4 cursor-pointer' onClick={onClickContainer}>
        <div className='min-w-max'>
          <p>{orderStatusToString(status, true)}</p>
        </div>

        <div className='flex items-center mx-4 w-full'>
          <div className='w-24 h-24 min-w-24 mr-4'>
            <ProductImage filename={product.productImage[0]} />
          </div>

          <div>
            <p>{product.productName}</p> 
            <p>{`수량: ${quantity}개`}</p>
          </div>
        </div>

        <div className='ml-4'>
          {buyer && 
          <p>{buyer.nickname}</p>}
        </div>

        <div className='ml-4'>
          <p>{formatDate(date.toDate())}</p>
        </div>
      </div>
      
      {/* 주문 상태 변경 모달 */}
      {isModalOpen && (product && !isError_product) && 
      <div className='ModalOutside'>
        <Modal>
          <Modal.Header title='주문 상태 변경'>
            <Modal.Close onClose={toggle}>
              <IoMdClose />
            </Modal.Close>
          </Modal.Header>
          <Modal.Body>
            <div className='text-sm'>
              <p className='mb-2'>다음 주문 건의 주문 상태를 변경해주세요.</p>
              <p>{`주문일: ${formatDate(date.toDate())}`}</p>
              <p>{`구매자: ${buyer?.nickname}`}</p>
              <p>{`상품명: ${product.productName}`}</p>
            </div>

            <ToggleGroup
              className='my-8' 
              variant="outline"
              type="single" 
              value={statusVal} 
              onValueChange={(value: Status) => setStatusVal(Status[value])}
            >
              <ToggleGroupItem value={Status.order_completed}>구매 확인</ToggleGroupItem>
              <ToggleGroupItem value={Status.waiting_deliver}>발송 대기</ToggleGroupItem>
              <ToggleGroupItem value={Status.deliver_started}>발송 시작</ToggleGroupItem>
              <ToggleGroupItem value={Status.deliver_completed}>판매 완료</ToggleGroupItem>
              <ToggleGroupItem value={Status.order_canceled}>주문 취소</ToggleGroupItem>
            </ToggleGroup>

            <div className='w-full flex justify-center'>
              <Button disabled={!statusVal} onClick={onClickChangeStatusBtn}>등록</Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      }
    </div>
  )
})

const ManageOrder: React.FC = () => {
  const user = useLoaderData() as User

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['orders', user.id],
    queryFn: ({ queryKey }) => getAllOrderBySeller(queryKey[1])
  })

  if (isError) console.log(error)

  return (
    <>
      <MetaTag />

      <MyPageLayout>
        <h1 className='h1 mb-4'>판매 기록 관리</h1>
        <p>각 항목을 클릭하여 상태를 변경하세요.</p>

        <div className='mt-12'>
          <div className='flex text-sm p-4 border-b border-black'>
            <p className='w-[5rem] text-center mr-4'>상태</p>
            <p className='w-full text-center'>상품</p>
            <p className='ml-4 min-w-max'>구매자</p>
            <p className='ml-4 w-[6rem] text-center'>주문일</p>
          </div>

        {isLoading 
        ? <Loading />
        : isError 
        ? <p>판매 기록을 불러오지 못했습니다.</p>
        : (
          <ul>
            {data.map((order, idx) => (
              <li key={`order_${idx}`} className='*:mt-4'>
                <OrderContainer 
                  orderId={order.id}
                  status={order.status}
                  productId={order.productId}
                  quantity={order.productQuantity}
                  buyerId={order.buyerId}
                  date={order.createdAt}
                />
              </li>
            ))}
          </ul>
        )}
        </div>
      </MyPageLayout>
    </>
  )
}

export default ManageOrder