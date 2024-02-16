import { db } from "@/helpers/firebase"
import formatDocumentDataToOrder from "@/utils/formatDocumentDataToOrder"
import { collection, getDocs, orderBy, query, where } from "firebase/firestore"

async function getAllOrderBySeller(sellerId: string) {
  console.log('sellerId', sellerId)
  const ordersRef = collection(db, "orders")
  const q = query(ordersRef, where("sellerId", "==", sellerId), orderBy("createdAt", "desc"))
  const querySnapShot = await getDocs(q)
  return querySnapShot.docs.map((doc) => formatDocumentDataToOrder(doc.data()))
}

export default getAllOrderBySeller