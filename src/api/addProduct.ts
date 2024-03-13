import { setDoc, doc, serverTimestamp, Timestamp } from "firebase/firestore"
import { db } from "@/helpers/firebase"
import generateKeyword from "@/utils/generateKeyword"

async function addProduct(
  productId: string,
  sellerId: string,
  productName: string,
  productPrice: number,
  productQuantity: number,
  productDescription: string,
  productCategory: string,
  productImage: string[],
  productThumbnail: string[],
  createdAt?: Timestamp,
  updatedAt?: Timestamp
  ) {

  await setDoc(doc(db, "products", productId), {
    id: productId,
    sellerId,
    productName,
    productPrice,
    productQuantity,
    productDescription,
    productCategory,
    productImage,
    productThumbnail,
    createdAt: createdAt ? createdAt : serverTimestamp(),
    updatedAt: updatedAt ? updatedAt : serverTimestamp(),
    keyword: generateKeyword(productName)
  })
  .catch((error) => {
    throw(error)
  })
}

export default addProduct