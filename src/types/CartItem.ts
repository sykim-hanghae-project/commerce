import { Product } from "./product"

export type CartItem = {
  id: string,
  quantity: number,
  price: number
}

export type OrderItem = {
  product: Product,
  quantity: number
}