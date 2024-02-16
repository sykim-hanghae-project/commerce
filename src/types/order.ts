import { Timestamp } from "firebase/firestore";

export enum Status {
  order_completed = "order_completed",
  waiting_deliver = "waiting_deliver",
  deliver_started = "deliver_started",
  deliver_completed = "deliver_completed",
  order_canceled = "order_canceled",
}

export type Order = {
  id: string;
  sellerId: string;
  buyerId: string;
  productId: string;
  productQuantity: number;
  status: Status;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

