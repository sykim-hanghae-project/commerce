import { QuerySnapshot, Timestamp, collection, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore"
import { db } from "@/helpers/firebase"

async function getAllProductBySeller(sellerId: string, pageParam: Timestamp, rowsPerPage: number): Promise<QuerySnapshot> {
  // console.log("pageParam", context.pageParam)
  const productsRef = collection(db, "products")
  const q = pageParam !== undefined
                ? query(productsRef, where("sellerId", "==", sellerId), orderBy('createdAt', 'desc'), startAfter(pageParam), limit(rowsPerPage))
                : query(productsRef, where("sellerId", "==", sellerId), orderBy('createdAt', 'desc'), limit(rowsPerPage))

  const querySnapShot = await getDocs(q)
  return querySnapShot
} 

export default getAllProductBySeller