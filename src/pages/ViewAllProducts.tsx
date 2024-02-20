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
import useDeleteProductMutation from '@/hooks/useDeleteProductMutation'
import { Product } from '@/types/product'

const ViewAllProducts: React.FC = () => {
  const user = useLoaderData() as User 

  const { mutate } = useDeleteProductMutation()

  const [ref, inView] = useInView()
  const { products, isLoading, isError, hasNextPage, fetchNextPage } = useProductsQuery({
    rowsPerPage: 5,
    qKey: ['sellerProducts'],
    queryFunc: (pageParam, rowsPerPage) => {
      return getAllProductBySeller(user.id, pageParam as Timestamp, rowsPerPage)
    },
    sortBy: 'createdAt'
  })


  const deleteProductById = (id: string, images: string[]) => {
    mutate({ id, images })
  }

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
          {isLoading && <Loading />}
          <ul>
            {products && (
              products.map((product: Product) => (
                <li key={`product_${product.id}`}>
                  <MyPageProductContainer product={product} onDeleteProduct={deleteProductById} />
                </li>
              ))
            )}
            <div ref={ref}></div>
          </ul>
        </div>
      )}
    </MyPageLayout>
  )
}

export default ViewAllProducts