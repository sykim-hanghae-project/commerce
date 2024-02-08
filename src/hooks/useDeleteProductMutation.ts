import { InfiniteData, useMutation, useQueryClient } from "@tanstack/react-query";
import deleteImage from "@/api/deleteImage";
import deleteProduct from "@/api/deleteProduct";
import { Product } from "@/types/product";

interface mutationDeleteProductProps {
  id: string,
  images: string[]
}

export default function useDeleteProductMutation() {
  const queryClient = useQueryClient()
  // 판매자의 마이페이지 - 전체 상품 조회에서 사용
  return useMutation({
    mutationFn: async ({ id, images }: mutationDeleteProductProps) => {
      await deleteProduct(id)
      for (const image of images) {
        deleteImage(image)
      }
    },
    onMutate: async ({ id }) => {
      const queryKey = ['getProducts', 'sellerProducts']
      await queryClient.cancelQueries({ queryKey })

      // 해당 product를 우선 제거 
      // 필터링을 위해 infiniteQuery의 InfinitieData<Product[]>를 Product[]로 
      const oldData = queryClient.getQueryData(queryKey) as InfiniteData<Product[]>
      let oldDataArr: Product[] = []
      for (const page of oldData.pages) {
        oldDataArr = oldDataArr.concat(page)
      }
      queryClient.setQueryData(queryKey, oldDataArr.filter(product => product.id !== id))
    },
    onSuccess: async () => {
      console.log('success')
    },
    onError: (error) => {
      console.log(error)
    }
  })
}