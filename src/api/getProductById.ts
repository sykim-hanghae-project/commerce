import { db } from "@/helpers/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"

async function getProductById(id: number) {
  const q = query(collection(db, "products"), where("id", "==", id))
  const querySnapShot = await getDocs(q)
  if (querySnapShot.empty) return null
  return querySnapShot.docs[0].data()
}

export default getProductById