  import { useMemo } from 'react'
  import { useInfiniteQuery } from '@tanstack/react-query'
  import { DocumentData, QuerySnapshot, Timestamp } from 'firebase/firestore';


  interface useProductsQueryProps {
    rowsPerPage: number,
    queryFunc: (pageParam: Timestamp, rowsPerPage: number) => Promise<QuerySnapshot>
  }

  const useProductsQuery = ({ rowsPerPage, queryFunc }: useProductsQueryProps) => {
    const { data, isLoading, isError, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
      {
        queryKey: ['getProducts'],
        queryFn: async ({ pageParam }) => await queryFunc(pageParam, rowsPerPage),
        getNextPageParam: (lastpage, ) => {
          if (lastpage.docs.length < rowsPerPage){
            return undefined
          }
          
          return lastpage.docs[lastpage.docs.length-1].data().createdAt
        }
      }
    )

    const products = useMemo(() => {
      let res: { docId: string, data: DocumentData }[] = []
      if (data) {
        for (const page of data.pages) {
          res = res.concat(page.docs.map(doc => {
            return {
              docId: doc.id,
              data: doc.data()
            }
          }))
        }
        return res
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