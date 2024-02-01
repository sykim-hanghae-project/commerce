import { db } from "@/helpers/firebase"
import formatDocumentDataToProduct from "@/utils/formatDocumentDataToProduct"
import { QueryDocumentSnapshot, collection, getDocs, limit, orderBy, query, where } from "firebase/firestore"

async function getProductsByCategory(category: string, number: number) {
  const q = query(collection(db, "products"), where("productCategory", "==", category), orderBy("createdAt", "desc"), limit(number))
  const querySnapShot = await getDocs(q)
  return querySnapShot.docs.map((doc: QueryDocumentSnapshot) => {
    return formatDocumentDataToProduct(doc.data())
  })
}

export default getProductsByCategory