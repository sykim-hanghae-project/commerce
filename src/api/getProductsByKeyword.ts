import { db } from "@/helpers/firebase"
import formatDocumentDataToProduct from "@/utils/formatDocumentDataToProduct"
import { Timestamp, collection, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore"

async function getProductsByKeyword(
  keyword: string, 
  number: number,
  orderField: string, 
  orderDirection: "desc" | "asc", 
  pageParam: Timestamp | number 
  ) 
{
  console.log('keyword',keyword)
  console.log('orderField', orderField)
  console.log('orderDirection',orderDirection)
  let q = undefined
  if (pageParam) {
    q = query(
      collection(db, "products"), 
      where('keyword', 'array-contains', keyword.toLowerCase()),
      orderBy(orderField, orderDirection),
      startAfter(pageParam),
      limit(number)
    )
  }
  else {
    q = query(
      collection(db, "products"), 
      where('keyword', 'array-contains', keyword.toLowerCase()),
      orderBy(orderField, orderDirection),
      limit(number)
    )
  }
  const querySnapShot = await getDocs(q)
  return querySnapShot.docs.map(doc => formatDocumentDataToProduct(doc.data()))
}

export default getProductsByKeyword