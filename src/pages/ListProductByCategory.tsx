import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Timestamp } from 'firebase/firestore'

import getProductsByCategory from '@/api/getProductsByCategory'
import ProductList from '@/components/ProductList'
import useProductsQuery from '@/hooks/useProductsQuery'
import MetaTag from '@/components/MetaTag'
import Loading from '@/components/Loading'


const ListProduct = () => {
  const [searchParams, ] = useSearchParams()
  const category = searchParams.get('category')  //카테고리(Men, Women)
  const sortBy = searchParams.get("sortby") // "createdAt" | "price"

  const navigate = useNavigate()

  const [ref, inView] = useInView()
  const { products, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useProductsQuery({
    rowsPerPage: 8,
    qKey: [category!, sortBy ? sortBy : "createdAt"],
    queryFunc: (pageParam, rowsPerPage) => {
      return getProductsByCategory(
        category!, //category
        rowsPerPage, 
        sortBy === 'price' ? "productPrice" : "createdAt", 
        sortBy === 'price' ? "asc" : "desc", 
        pageParam as (number | Timestamp)
      )
    },
    sortBy: sortBy === 'price' ? "price" : "createdAt"
  })

  useEffect(() => { 
    if (inView && hasNextPage) 
      fetchNextPage()
  }, [inView, hasNextPage, fetchNextPage])

  const onClickFilterItem = (sortby: "createdAt" | "price") => {
    if (sortBy === sortby || (!sortBy && sortby === "createdAt")) // 현재 이미 선택한 필터대로 정렬되어 있는 경우
      return

    if (sortby === "createdAt")
      navigate(`/product/list?category=${category}&sortby=createdAt`)
    else 
    navigate(`/product/list?category=${category}&sortby=price`)
  }
  
  return (
    <>
      <MetaTag 
        title={`${category} - XSO`}
      />

      <div className='py-14'>
        <h1 className='h1 mb-6'>{category}</h1>
                
        {!isLoading && products && (
          <ProductList products={products} onClickFilterItem={onClickFilterItem} curSortBy={sortBy === "price" ? "price" : "createdAt"} />
        )}
        {isFetchingNextPage ? <Loading /> : <div ref={ref}></div>}
      </div>
    </>
  )
}

export default ListProduct