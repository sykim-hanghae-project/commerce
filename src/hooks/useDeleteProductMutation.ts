import { InfiniteData, useMutation, useQueryClient } from "@tanstack/react-query";
import deleteProduct from "@/api/deleteProduct";
import { Product } from "@/types/product";
import deleteProductImage from "@/api/deleteProductImage";

interface mutationDeleteProductProps {
  productId: string,
  userId: string
}

export default function useDeleteProductMutation() {
  const queryClient = useQueryClient()
  // 판매자의 마이페이지 - 전체 상품 조회에서 사용
  return useMutation({
    mutationFn: async ({ productId, userId }: mutationDeleteProductProps) => {
      await deleteProductImage(userId, productId)
      await deleteProduct(productId)
    },
    onMutate: async ({ productId }) => {
      const queryKey = ['getProducts', 'sellerProducts']
      await queryClient.cancelQueries({ queryKey })

      // 해당 product를 우선 제거 
      // 필터링을 위해 infiniteQuery의 InfinitieData<Product[]>를 Product[]로 
      const oldData = queryClient.getQueryData(queryKey) as InfiniteData<Product[]>
      let oldDataArr: Product[] = []
      for (const page of oldData.pages) {
        oldDataArr = oldDataArr.concat(page)
      }
      queryClient.setQueryData(queryKey, oldDataArr.filter(product => product.id !== productId))
    },
    onSuccess: async () => {
      console.log('success')
    },
    onError: (error) => {
      console.log(error)
    }
  })
}