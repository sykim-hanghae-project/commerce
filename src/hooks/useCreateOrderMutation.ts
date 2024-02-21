import createOrder from "@/api/createOrder";
import { OrderItem } from "@/types/CartItem";
import { useMutation } from "@tanstack/react-query";

interface createOrderMutationProps {
  items: OrderItem[],
  userId: string
}

export default function useCreateOrderMutation() {

  return useMutation({
    mutationFn: async ({ items, userId }: createOrderMutationProps) => {
      items.forEach(async (item) => {
        await createOrder(item.product.sellerId, userId, item.product.id, item.quantity)
      })
    }
  })
}