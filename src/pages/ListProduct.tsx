import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useSearchParams } from 'react-router-dom'
import getProductsByCategory from '@/api/getProductsByCategory'
import ProductList from '@/components/ProductList'
import useProductsQuery from '@/hooks/useProductsQuery'

interface ListProductProps {
  type: 'category' | 'search'
}

const ListProduct = ({ type }: ListProductProps) => {
  const [searchParams, ] = useSearchParams()
  const listType = searchParams.get(type) //카테고리(Men, Women) 또는 검색어
  const sortBy = searchParams.get("sortby")

  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)

  const [ref, inView] = useInView()
  const { products, isLoading, hasNextPage, fetchNextPage } = useProductsQuery({
    rowsPerPage: 8,
    queryFunc: (pageParam, rowsPerPage) => {
      if (sortBy === 'createdAt') 
        return getProductsByCategory(listType!, rowsPerPage, "createdAt", "desc", pageParam)
      if (sortBy === 'price')
        return getProductsByCategory(listType!, rowsPerPage, "productPrice", "asc", pageParam)
      else
        return getProductsByCategory(listType!, rowsPerPage, "createdAt", "desc", pageParam)
    }
  })

  useEffect(() => { 
    if (inView && hasNextPage) 
      fetchNextPage()
  }, [inView, hasNextPage, fetchNextPage])

  const onClickFilter = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  const onClickFilterItem = (sortby: "createdAt" | "price") => {
    if (sortBy === sortby || (!sortBy && sortby === "createdAt")) // 현재 이미 선택한 필터대로 정렬되어 있는 경우
      return

    if (sortby === "createdAt")
      window.location.replace(`/product/list?${type}=${listType}&sortby=createdAt`)
    else 
      window.location.replace(`/product/list?${type}=${listType}&sortby=price`)
  }
  
  return (
    <div className='py-14'>
      <div className='mb-8'>
        <h1 className='h1 mb-6'>{listType}</h1>
        <div className='flex text-sm'>
          <p className='w-full'>{`총 ${products ? products.length : 0}개의 상품`}</p>
          <div className='relative'>
            <p className='font-bold min-w-max cursor-pointer' onClick={onClickFilter}>정렬 기준</p>
            <div className={`${isFilterOpen ? "visible" : "invisible"} absolute z-10 right-0 top-6 `}>
              <button className='filterItem' onClick={() => onClickFilterItem("createdAt")}>최신순</button>
              <button className='filterItem' onClick={() => onClickFilterItem("price")}>가격순</button>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        {!isLoading && products && (
          <ProductList products={products} />
        )}
        <div ref={ref}></div>
      </div>
    </div>
  )
}

export default ListProduct