import { setDoc, doc, serverTimestamp, Timestamp } from "firebase/firestore"
import { v4 as uuidv4 } from 'uuid'
import { db } from "@/helpers/firebase"
import generateKeyword from "@/utils/generateKeyword"

async function addProduct(
  sellerId: string,
  productName: string,
  productPrice: number,
  productQuantity: number,
  productDescription: string,
  productCategory: string,
  filenames: string[],
  createdAt?: Timestamp,
  updatedAt?: Timestamp
  ) {
  const id = uuidv4()

  await setDoc(doc(db, "products", id), {
    id,
    sellerId,
    productName,
    productPrice,
    productQuantity,
    productDescription,
    productCategory,
    productImage: filenames,
    createdAt: createdAt ? createdAt : serverTimestamp(),
    updatedAt: updatedAt ? updatedAt : serverTimestamp(),
    keyword: generateKeyword(productName)
  })
  .catch((error) => {
    throw(error)
  })
}

export default addProduct