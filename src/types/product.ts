import { Timestamp } from "firebase/firestore"

export type Product = {
  id: number,
  sellerId: number,
  productName: string,
  productPrice: number,
  productQuantity: number,
  productDescription: string,
  productCategory: string,
  productImage: string[],
  createdAt: Timestamp,
  updatedAt: Timestamp
}