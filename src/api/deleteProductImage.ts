import { storage } from "@/helpers/firebase"
import { deleteObject, listAll, ref } from "firebase/storage"

async function deleteProductImage(userId: string, productId: string) {
  const folderRef = ref(storage, `${userId}/${productId}/`)
  const result = await listAll(folderRef)
  result.items.map(async (fileRef) => {
    await deleteObject(fileRef)
  })
}

export default deleteProductImage