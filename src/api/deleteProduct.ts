import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/helpers/firebase";

async function deleteProduct(id: string) {
  await deleteDoc(doc(db, "products", id))
  .catch((error) => {
    throw error
  })
}

export default deleteProduct