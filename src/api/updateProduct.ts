import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "@/helpers/firebase";
import { EditableProduct } from "@/types/product";

async function updateProduct(id: string, product: EditableProduct) {
  const docRef = doc(db, "products", id);
  console.log('updating product')
  await updateDoc(docRef, {
    ...product,
    updatedAt: serverTimestamp()
  });
  console.log('product updated!')
}

export default updateProduct