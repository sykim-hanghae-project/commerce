import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useLoaderData } from 'react-router-dom'
import { Timestamp } from 'firebase/firestore'

import MyPageLayout from '@/components/layout/MyPageLayout'
import useProductsQuery from '@/hooks/useProductsQuery'
import getAllProductBySeller from '@/api/getAllProductBySeller'
import MyPageProductContainer from '@/components/MyPageProductContainer'
import { User } from '@/types/user'
import Loading from '@/components/Loading'

const ViewAllProducts: React.FC = () => {
  const user = useLoaderData() as User 
  const [isDeleting, setIsDeleting] = useState(false)
  const [ref, inView] = useInView()
  const { products, isLoading, isError, hasNextPage, fetchNextPage } = useProductsQuery({
    rowsPerPage: 5,
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
    <MyPageLayout>
      <h1 className='h1 mb-12'>전체 상품 조회</h1>

      {isError ? <p>상품을 불러오지 못했습니다.</p> : (
        <div>
          <ul>
            {!isLoading && products && (
              products.map((product) => (
                <li key={`product_${product.id}`}>
                  <MyPageProductContainer product={product} setIsDeleting={setIsDeleting} />
                </li>
              ))
            )}
            <div ref={ref}></div>
          </ul>
        </div>
      )}

      {isDeleting && <div className='fixed w-[100vw] h-[100vh] flex justify-center items-center'><Loading /></div>}
    </MyPageLayout>
  )
}

export default ViewAllProducts