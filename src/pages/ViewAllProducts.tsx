import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useLoaderData } from 'react-router-dom'
import { Timestamp } from 'firebase/firestore'

import MyPageLayout from '@/components/layout/MyPageLayout'
import useProductsQuery from '@/hooks/useProductsQuery'
import getAllProductBySeller from '@/api/getAllProductBySeller'
import MyPageProductContainer from '@/components/MyPageProductContainer'
import { User } from '@/types/user'
import Loading from '@/components/Loading'
import { Product } from '@/types/product'
import MetaTag from '@/components/MetaTag'

const ViewAllProducts: React.FC = () => {
  const user = useLoaderData() as User 

  const [ref, inView] = useInView()
  const { products, isLoading, isError, hasNextPage, fetchNextPage, isFetchingNextPage } = useProductsQuery({
    rowsPerPage: 10,
    qKey: ['sellerProducts'],
    queryFunc: (pageParam, rowsPerPage) => {
      return getAllProductBySeller(user.id, pageParam as Timestamp, rowsPerPage)
    },
    sortBy: 'createdAt'
  })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, fetchNextPage])

  return (
    <>
      <MetaTag />

      <MyPageLayout>
        <h1 className='h1 mb-12'>전체 상품 조회</h1>
        {isLoading
        ? <Loading />
        : isError
        ? <p>상품을 불러오지 못했습니다.</p>
        : <div>
            <div className='flex text-sm p-4 border-b border-black'>
              <p className='w-full text-center'>상품</p>
              <p className='w-24 text-center ml-4'>가격</p>
              <p className='min-w-max w-20 mr-12 ml-4'>잔여 수량</p>
            </div>

            <ul>
            {products && (
              products.map((product: Product) => (
                <li key={`product_${product.id}`}>
                  <MyPageProductContainer product={product} />
                </li>
              ))
            )}
            </ul>
            {isFetchingNextPage ? <Loading /> : <div ref={ref}></div>}
          </div>}
      </MyPageLayout>
    </>
  )
}

export default ViewAllProducts