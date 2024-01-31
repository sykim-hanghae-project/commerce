import { storage } from "@/helpers/firebase"
import { ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"

async function uploadImage(file: File | Blob) {

  const filename = v4()
  const fileRef = ref(storage, `images/${filename}`)
  await uploadBytes(fileRef, file)
  
  return filename
}

export default uploadImage