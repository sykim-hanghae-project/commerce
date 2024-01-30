import { db } from "@/helpers/firebase"
import { QueryFunctionContext } from "@tanstack/react-query"
import { QuerySnapshot, collection, getDocs, limit, orderBy, query, startAfter } from "firebase/firestore"

async function getAllProducts(context: QueryFunctionContext, rowsPerPage: number): Promise<QuerySnapshot> {
  // console.log("pageParam", context.pageParam)
  const productsRef = collection(db, "products")
  const q = context.pageParam !== undefined
                ? query(productsRef, orderBy('createdAt', 'desc'), startAfter(context.pageParam), limit(rowsPerPage))
                : query(productsRef, orderBy('createdAt', 'desc'), limit(rowsPerPage))

  const querySnapShot = await getDocs(q)
  return querySnapShot
} 

export default getAllProducts