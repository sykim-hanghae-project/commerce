import { useMemo } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { Timestamp } from 'firebase/firestore';
import { Product } from '@/types/product';
interface useProductsQueryProps {
  rowsPerPage: number,
  qKey: string[],
  queryFunc: (pageParam: Timestamp | number | string, rowsPerPage: number) => Promise<Product[]>,
  sortBy: 'createdAt' | 'price' | 'productName'
}

const useProductsQuery = ({ rowsPerPage, qKey, queryFunc, sortBy }: useProductsQueryProps) => {
  const { data, isLoading, isError, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    {
      queryKey: ['getProducts', ...qKey],
      queryFn: async ({ pageParam }) => await queryFunc(pageParam, rowsPerPage),
      getNextPageParam: (lastpage, ) => {
        if (lastpage.length < rowsPerPage){
          return undefined
        }
        
        if (sortBy === 'createdAt') 
          return lastpage[lastpage.length-1].createdAt
        if (sortBy === 'price') 
          return lastpage[lastpage.length-1].productPrice 
        else // sortBy === 'productName' (검색)
          return lastpage[lastpage.length-1].productName
      },
      staleTime: 3000
    }
  )

  const products = useMemo(() => {
    let res: Product[] = []
    if (data) {
      if (Array.isArray(data)) { // 상품 삭제 시 QueryData를 InifiniteData<Product[]>가 아닌 Product[]로 Set
        return data
      }

      for (const page of data.pages) {
        res = res.concat(page)
      }
    }
    return res
  }, [data])

  return { 
    products, 
    isLoading, 
    isError, 
    hasNextPage, 
    fetchNextPage, 
    isFetchingNextPage }
}

export default useProductsQuery