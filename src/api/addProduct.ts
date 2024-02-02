import { db } from "@/helpers/firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import incrementCounter from "./incrementCounter"

async function addProduct(
  sellerId: number,
  productName: string,
  productPrice: number,
  productQuantity: number,
  productDescription: string,
  productCategory: string,
  filenames: string[]
  ) {
  const counter = await incrementCounter("product")

  await addDoc(collection(db, "products"), {
    id: counter,
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