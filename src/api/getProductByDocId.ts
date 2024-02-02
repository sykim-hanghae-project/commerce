import { doc, getDoc } from "firebase/firestore"
import { db } from "@/helpers/firebase"
import formatDocumentDataToProduct from "@/utils/formatDocumentDataToProduct"

async function getProductByDocId(docId: string) {

  const docRef = doc(db, "products", docId)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    const data = docSnap.data()
    return formatDocumentDataToProduct(data)
  } 
  return null
}

export default getProductByDocId