import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useLoaderData } from 'react-router-dom'
import MyPageLayout from '@/components/layout/MyPageLayout'
import useProductsQuery from '@/hooks/useProductsQuery'
import getAllProductBySeller from '@/api/getAllProductBySeller'
import ProductContainer from '@/components/ProductContainer'
import formatDocumentDataToProduct from '@/utils/formatDocumentDataToProduct'
import { User } from '@/types/user'

const ViewAllProducts: React.FC = () => {
  const user = useLoaderData() as User 
  console.log(user)
  const [ref, inView] = useInView()
  const { products, isLoading, hasNextPage, fetchNextPage } = useProductsQuery({
    rowsPerPage: 5,
    queryFunc: (pageParam, rowsPerPage) => {
      return getAllProductBySeller(user.id, pageParam, rowsPerPage)
    }
  })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, fetchNextPage])

  return (
    <MyPageLayout>
      <h1 className='h1 mb-12'>전체 상품 조회</h1>

      <div>
        <ul>
          {!isLoading && products && (
            products.map((val) => (
              <li key={val.docId}>
                <ProductContainer id={val.docId} product={formatDocumentDataToProduct(val.data)} key={`item_${val.docId}`} />
              </li>
            ))
          )}
          <div ref={ref}></div>
        </ul>
      </div>

    </MyPageLayout>
  )
}

export default ViewAllProducts