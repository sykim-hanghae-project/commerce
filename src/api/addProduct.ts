import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { v4 as uuidv4 } from 'uuid'
import { db } from "@/helpers/firebase"

async function addProduct(
  sellerId: string,
  productName: string,
  productPrice: number,
  productQuantity: number,
  productDescription: string,
  productCategory: string,
  filenames: string[]
  ) {
  const id = uuidv4()

  await addDoc(collection(db, "products"), {
    id,
    sellerId,
    productName,
    productPrice,
    productQuantity,
    productDescription,
    productCategory,
    productImage: filenames,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  })
  .catch((error) => {
    throw(error)
  })
}

export default addProduct