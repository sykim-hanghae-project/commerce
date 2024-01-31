import { db } from "@/helpers/firebase"
import { QuerySnapshot, Timestamp, collection, getDocs, limit, orderBy, query, startAfter } from "firebase/firestore"

async function getAllProducts(pageParam: Timestamp, rowsPerPage: number): Promise<QuerySnapshot> {
  // console.log("pageParam", context.pageParam)
  const productsRef = collection(db, "products")
  const q = pageParam !== undefined
                ? query(productsRef, orderBy('createdAt', 'desc'), startAfter(pageParam), limit(rowsPerPage))
                : query(productsRef, orderBy('createdAt', 'desc'), limit(rowsPerPage))

  const querySnapShot = await getDocs(q)
  return querySnapShot
} 

export default getAllProducts