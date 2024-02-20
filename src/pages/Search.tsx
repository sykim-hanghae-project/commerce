import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useNavigate, useSearchParams } from 'react-router-dom'
import getProductsByKeyword from '@/api/getProductsByKeyword'
import ProductList from '@/components/ProductList'
import useProductsQuery from '@/hooks/useProductsQuery'
import { Timestamp } from 'firebase/firestore'

const Search = () => {
  const [searchParams, ] = useSearchParams()
  const keyword = searchParams.get('keyword') // 검색어
  const sortBy = searchParams.get("sortby") // "createdAt" | "price"

  const navigate = useNavigate()

  const [ref, inView] = useInView()
  const { products, isLoading, hasNextPage, fetchNextPage } = useProductsQuery({
    rowsPerPage: 8,
    qKey: [keyword!, sortBy ? sortBy : "createdAt"],  
    queryFunc: (pageParam, rowsPerPage) => {
      return getProductsByKeyword(
        keyword!, //keyword
        rowsPerPage,
        sortBy === 'price' ? "productPrice" : "createdAt", 
        sortBy === 'price' ? "asc" : "desc", 
        pageParam as (number | Timestamp)
      )
    },
    sortBy: "productName"
  })

  useEffect(() => { 
    if (inView && hasNextPage) 
      fetchNextPage()
  }, [inView, hasNextPage, fetchNextPage])

  const onClickFilterItem = (sortby: "createdAt" | "price") => {
    if (sortBy === sortby || (!sortBy && sortby === "createdAt")) // 현재 이미 선택한 필터대로 정렬되어 있는 경우
      return

    if (sortby === "createdAt")
      navigate(`/product/search?keyword=${keyword}&sortby=createdAt`)
    else 
      navigate(`/product/search?keyword=${keyword}&sortby=price`)
  }

  return (
    <div className='py-14'>
      <h1 className='h1 mb-6'>{keyword}</h1>
              
      {!isLoading && products && (
        <ProductList products={products} onClickFilterItem={onClickFilterItem} curSortBy={sortBy === "price" ? "price" : "createdAt"} />
      )}
      <div ref={ref}></div>
    </div>
  )
}

export default Search