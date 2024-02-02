import { db } from "@/helpers/firebase"
import { Timestamp, collection, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore"

async function getProductsByCategory(category: string, number: number, pageParam: Timestamp | null) {
  let q = undefined
  if (pageParam)
    q = query(collection(db, "products"), where("productCategory", "==", category), orderBy("createdAt", "desc"), startAfter(pageParam), limit(number))
  else
    q = query(collection(db, "products"), where("productCategory", "==", category), orderBy("createdAt", "desc"), limit(number))
  const querySnapShot = await getDocs(q)
  return querySnapShot
}

export default getProductsByCategory