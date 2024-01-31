import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "@/helpers/firebase";
import { Product } from "@/types/product";

async function updateProduct(id: string, product: Product) {
  const docRef = doc(db, "products", id);

  await updateDoc(docRef, {
  ...product,
    updatedAt: serverTimestamp()
  });
}

export default updateProduct