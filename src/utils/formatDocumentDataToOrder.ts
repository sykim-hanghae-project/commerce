import { Order } from "@/types/order";
import { DocumentData } from "firebase/firestore";

function formatDocumentDataToOrder(data: DocumentData): Order {
  return {
    id: data.id,
    sellerId: data.sellerId,
    buyerId: data.buyerId,
    productId: data.productId,
    productQuantity: data.productQuantity,
    status: data.status,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt
  }
}

export default formatDocumentDataToOrder