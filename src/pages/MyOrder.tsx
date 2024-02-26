import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Timestamp } from 'firebase/firestore'
import { BsThreeDotsVertical } from "react-icons/bs";

import Loading from '@/components/Loading'
import MyPageLayout from '@/components/layout/MyPageLayout'
import getAllOrderByBuyer from '@/api/getAllOrderByBuyer'
import { User } from '@/types/user'
import getImageUrl from '@/api/getImageUrl'
import getUser from '@/api/getUser'
import getProduct from '@/api/getProduct';
import formatDate from '@/utils/formatDate';
import { Status } from '@/types/order';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import orderStatusToString from '@/utils/orderStatusToString';
import MetaTag from '@/components/MetaTag';

interface ProductImageProps {
  filename: string
}

const ProductImage = ({ filename }: ProductImageProps) => {
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
}

interface OrderContainerProps {
  orderId: string,
  date: Timestamp,
  productId: string
  quantity: number,
  sellerId: string,
  status: Status
}

const OrderContainer = ({ 
  orderId,
  date, 
  productId, 
  quantity, 
  sellerId, 
  status }: OrderContainerProps) => {
  
  const navigate = useNavigate()

  // 판매자 이름
  const { data: sellerName, isError: isError_sellerName, error: error_sellerName } = useQuery({
    queryKey: ['userNickname', sellerId],
    queryFn: async ({ queryKey }) => {
      const user = await getUser(queryKey[1])
      if (user) return user.nickname
      else return null
    }
  })
  if (isError_sellerName) console.log(error_sellerName)

  // 상품
  const { data: product, isLoading, isError: isError_product, error: error_product } = useQuery({
    queryKey: ['product', productId],
    queryFn: async ({ queryKey }) => {
      const product = await getProduct(queryKey[1])
      if (product) return product
    }
  })
  if (isError_product) console.log(error_product)

  const onClickWriteReviewBtn = () => {

  }

  const onClickCancelOrderBtn = async () => {
    //주문 취소
    const res = window.confirm("정말 주문을 취소하시겠습니까?")
    if (res) {
      const { default: updateOrderStatus } = await import('@/api/updateOrderStatus')

      await updateOrderStatus(orderId, Status.order_canceled)
      .then(() => {
        window.alert("주문을 취소하였습니다.")
        window.location.reload()
      })
      .catch((error) => {
        console.log(error)
        window.alert("주문를 취소하지 못했습니다.")
      })
    }
  }

  function canCancel(status: Status) {
    // 배송 완료 또는 주문 취소 상태에서는 취소 불가
    if (status !== Status.deliver_completed && status !== Status.order_canceled) 
      return true
    else return false
  }

  function canWriteReview(status: Status) {
    if (status == Status.deliver_completed) return true
    return false
  }

  const navigateToProductDetailPage = () => {
    navigate(`/product/${product?.id}`)
  }

  return (
    <div className='flex items-center p-4 '>
      <div className='mr-4 w-32 flex justify-center '>
        <p>{formatDate(date.toDate())}</p>
      </div>

      <div className='w-24 h-24 min-w-24 mr-4'>
       {isLoading 
       ? <Loading />
       : isError_product
       ? <div className='w-full h-full bg-gray-100' />
       : <ProductImage filename={product!.productImage[0]} />}
      </div>

      <div className='w-full'>
        {isLoading 
        ? <p></p>
        : isError_product
        ? <p></p>
        :<button className='text-ellipsis line-clamp-1 text-sm' onClick={navigateToProductDetailPage}>
          {product!.productName}
        </button>
        }
        <p className='text-sm'>{`수량: ${quantity}`}</p>
      </div>  

      <div>
        {sellerName && 
          <p className='text-ellipsis line-clamp-1 text-sm'>{sellerName}</p>
        }
      </div>
      
      <div className='ml-4'>
        <p className='text-sm min-w-max'>{orderStatusToString(status, false)}</p>
      </div>

      <div className='ml-4 '>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button 
              className={`button ${!(canCancel(status) || canWriteReview(status)) && "opacity-0"}`}
              disabled={!(canCancel(status) || canWriteReview(status))}
            > 
              <BsThreeDotsVertical />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {canWriteReview(status) && <DropdownMenuItem onClick={onClickWriteReviewBtn}>
              리뷰 작성
            </DropdownMenuItem>}
            {canCancel(status) && <DropdownMenuItem onClick={onClickCancelOrderBtn}>
              주문 취소
            </DropdownMenuItem>}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

    </div>
  )
}

const MyOrder: React.FC = () => {
  const user = useLoaderData() as User

  //주문 내역
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['orders', user.id],
    queryFn: ({ queryKey }) => getAllOrderByBuyer(queryKey[1]) 
  })

  if (isLoading) return <Loading />
  if (isError) {
    console.log(error)
    return <p>주문 내역을 불러오지 못했습니다.</p>
  }

  return (
    <>
      <MetaTag />

      <MyPageLayout>
        <h1 className='h1 mb-12'>주문 내역</h1>
        <div>
          <div className='text-sm p-4 pr-12 flex border-b border-black'>
            <p className='w-32 text-center'>주문일</p>
            <p className='w-full text-center'>상품</p>
            <p className='text-center min-w-max mr-4'>판매자</p>
            <p className='w-20 text-center min-w-max'>주문 상태</p>
          </div>

          <ul className='mt-4'>
          {data.map((order, idx) => (
            <li key={`order_${idx}`} className='*:mt-4'>
              <OrderContainer 
                orderId={order.id}
                date={order.createdAt}
                productId={order.productId}
                quantity={order.productQuantity}
                sellerId={order.sellerId}
                status={order.status}
              />
            </li>
          ))}
          </ul>
        </div>
      </MyPageLayout>

    </>
  )
}

export default MyOrder