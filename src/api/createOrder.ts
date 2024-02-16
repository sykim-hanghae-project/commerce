import { doc, serverTimestamp, setDoc } from "firebase/firestore"
import { v4 as uuidv4} from 'uuid'
import { db } from "@/helpers/firebase"
import { Status } from "@/types/order"


async function createOrder(
   sellerId: string,
   buyerId: string,
   productId: string,
   productQuantity: number,
) {
  const id = uuidv4()

  await setDoc(doc(db, 'orders', id), {
    id,
    sellerId,
    buyerId,
    productId,
    productQuantity,
    status: Status.order_completed,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  })
}

export default createOrder