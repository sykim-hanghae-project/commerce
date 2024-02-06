import { db } from "@/helpers/firebase"
import { Timestamp, collection, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore"

async function getProductsByCategory(
  category: string, 
  number: number, 
  orderField: string, 
  orderDirection: "desc" | "asc", 
  pageParam: Timestamp | number | null
) {
  let q = undefined
  if (pageParam)
    q = query(collection(db, "products"), where("productCategory", "==", category), orderBy(orderField, orderDirection), startAfter(pageParam), limit(number))
  else
    q = query(collection(db, "products"), where("productCategory", "==", category), orderBy(orderField, orderDirection), limit(number))
  const querySnapShot = await getDocs(q)
  return querySnapShot
}

export default getProductsByCategory