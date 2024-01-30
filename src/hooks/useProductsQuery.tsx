  import { useMemo } from 'react'
  import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query'
  import { QuerySnapshot } from 'firebase/firestore';


  interface useProductsQueryProps {
    rowsPerPage: number,
    queryFunc: (context: QueryFunctionContext, crowsPerPage: number) => Promise<QuerySnapshot>
  }

  const useProductsQuery = ({ rowsPerPage, queryFunc }: useProductsQueryProps) => {
    const { data, isLoading, isError, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
      {
        queryKey: ['getProducts'],
        queryFn: async (context: QueryFunctionContext) => await queryFunc(context, rowsPerPage),
        getNextPageParam: (lastpage, allpages) => {
          // console.log("allpages[0].size",allpages[0].size)
          if (allpages[0].size < rowsPerPage){
            return null
          }
          return lastpage.docs[lastpage.docs.length-1].data().createdAt
        }
      }
    )

    const products = useMemo(() => {
      if (data) {
        return data?.pages[0].docs.map(doc => {
          return {
            docId: doc.id,
            data: doc.data()
          }
        })
      }
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