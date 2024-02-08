import { Timestamp, collection, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore"
import { db } from "@/helpers/firebase"
import formatDocumentDataToProduct from "@/utils/formatDocumentDataToProduct"
import { Product } from "@/types/product"

async function getAllProductBySeller(
  sellerId: string,
  pageParam: Timestamp, 
  rowsPerPage: number
): Promise<Product[]> {
  // console.log("pageParam", context.pageParam)
  const productsRef = collection(db, "products")
  let q = undefined
  if (pageParam) {
    q = query(productsRef, where("sellerId", "==", sellerId), orderBy('createdAt', 'desc'), startAfter(pageParam), limit(rowsPerPage))
  }
  else {
    q = query(productsRef, where("sellerId", "==", sellerId), orderBy('createdAt', 'desc'), limit(rowsPerPage))
  }

  const querySnapShot = await getDocs(q)
  return querySnapShot.docs.map(doc => formatDocumentDataToProduct(doc.data()))
} 

export default getAllProductBySeller