import { db } from "@/helpers/firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { parse, v4 } from "uuid"

async function addProduct(
  sellerId: number,
  productName: string,
  productPrice: number,
  productQuantity: number,
  productDescription: string,
  productCategory: string,
  fileUrls: string[]
  ) {
  const id = Number.parseInt(parse(v4()).join(""))
  await addDoc(collection(db, "products"), {
    id,
    sellerId,
    productName,
    productPrice,
    productQuantity,
    productDescription,
    productCategory,
    productImage: fileUrls,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  })
  .catch((error) => {
    throw(error)
  })
}

export default addProduct