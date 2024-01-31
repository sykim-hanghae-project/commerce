import { Product } from "@/types/product";
import { DocumentData } from "firebase/firestore";

export default function formatDocumentDataToProduct(data: DocumentData): Product {
  return {
    id: data.id,
    sellerId: data.sellerId,
    productName: data.productName,
    productPrice: data.productPrice,
    productQuantity: data.productQuantity,
    productDescription: data.productDescription,
    productCategory: data.productCategory,
    productImage: data.productImage,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt
  }
}