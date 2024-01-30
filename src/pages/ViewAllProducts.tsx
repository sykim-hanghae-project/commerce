import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import MyPageLayout from '@/components/layout/MyPageLayout'
import useProductsQuery from '@/hooks/useProductsQuery'
import getAllProducts from '@/api/getAllProducts'
import ProductContainer from '@/components/ProductContainer'
import formatDocumentDataToProduct from '@/utils/formatDocumentDataToProduct'

const ViewAllProducts: React.FC = () => {
  const [ref, inView] = useInView()
  const { products, isLoading, hasNextPage, fetchNextPage } = useProductsQuery({
    rowsPerPage: 5,
    queryFunc: getAllProducts
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