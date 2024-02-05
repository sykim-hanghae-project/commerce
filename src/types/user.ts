import { Timestamp } from "firebase/firestore"

export type User = {
  id: string,
  email: string,
  isSeller: boolean,
  nickname: string,
  password: string,
  createdAt?: Timestamp,
  updatedAt?: Timestamp
}