import { Timestamp } from "firebase/firestore"

export type Product = {
  id: string,
  sellerId: string,
  productName: string,
  productPrice: number,
  productQuantity: number,
  productDescription: string,
  productCategory: string,
  productImage: string[],
  createdAt: Timestamp,
  updatedAt: Timestamp
}

export type TInputImage = {
  isOriginal: boolean, //기존 이미지 or 새로 추가된 이미지
  filename?: string, // (cloud에 존재하는) 기존 이미지만 존재
  url: string,
  file?: File //input에서 추가한 사진은 file 존재, (cloud에 존재하는) 기존 이미지는 존재 X
}
