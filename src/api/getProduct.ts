import { db } from "@/helpers/firebase";
import formatDocumentDataToProduct from "@/utils/formatDocumentDataToProduct";
import { doc, getDoc } from "firebase/firestore";

async function getProduct(id: string) {

  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data()
    return formatDocumentDataToProduct(data)
  } 
  return null
}

export default getProduct