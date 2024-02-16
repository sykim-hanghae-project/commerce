import { collection, getDocs, orderBy, query, where } from "firebase/firestore"
import { db } from "@/helpers/firebase"
import formatDocumentDataToOrder from "@/utils/formatDocumentDataToOrder"

async function getAllOrderByBuyer(buyerId: string) {
  const ordersRef = collection(db, "orders")
  const q = query(ordersRef, where("buyerId", "==", buyerId), orderBy("createdAt", "desc"))
  const querySnapShot = await getDocs(q)
  return querySnapShot.docs.map(doc => formatDocumentDataToOrder(doc.data()))
}

export default getAllOrderByBuyer