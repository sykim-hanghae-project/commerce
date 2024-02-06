  import { useMemo } from 'react'
  import { useInfiniteQuery } from '@tanstack/react-query'
  import { QuerySnapshot, Timestamp } from 'firebase/firestore';
import { Product } from '@/types/product';
import formatDocumentDataToProduct from '@/utils/formatDocumentDataToProduct';


  interface useProductsQueryProps {
    rowsPerPage: number,
    queryFunc: (pageParam: Timestamp | number | string, rowsPerPage: number) => Promise<QuerySnapshot>,
    sortBy: 'createdAt' | 'price' | 'productName'
  }

  const useProductsQuery = ({ rowsPerPage, queryFunc, sortBy }: useProductsQueryProps) => {
    const { data, isLoading, isError, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
      {
        queryKey: ['getProducts'],
        queryFn: async ({ pageParam }) => await queryFunc(pageParam, rowsPerPage),
        getNextPageParam: (lastpage, ) => {
          if (lastpage.docs.length < rowsPerPage){
            return undefined
          }
          
          if (sortBy === 'createdAt') 
            return lastpage.docs[lastpage.docs.length-1].data().createdAt
          if (sortBy === 'price') 
            return lastpage.docs[lastpage.docs.length-1].data().productPrice 
          else // sortBy === 'productName' (검색)
            return lastpage.docs[lastpage.docs.length-1].data().productName
        }
      }
    )

    const products = useMemo(() => {
      let res: Product[] = []
      if (data) {
        for (const page of data.pages) {
          res = res.concat(page.docs.map(doc => formatDocumentDataToProduct(doc.data())))
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