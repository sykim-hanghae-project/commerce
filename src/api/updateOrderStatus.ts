import { db } from "@/helpers/firebase"
import { Status } from "@/types/order"
import { doc, serverTimestamp, updateDoc } from "firebase/firestore"

async function updateOrderStatus(id: string, status: Status) {
  const docRef = doc(db, "orders", id)

  await updateDoc(docRef, {
    status: status,
    updatedAt: serverTimestamp()
  })
}

export default updateOrderStatus