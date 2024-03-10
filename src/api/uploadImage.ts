import { storage } from "@/helpers/firebase"
import { ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
import imageCompression, { Options } from 'browser-image-compression'

async function uploadImage(file: File) {
  const options: Options = {
    maxWidthOrHeight: 1000
  }
  const compressedFile = await imageCompression(file, options)

  const filename = v4()
  const fileRef = ref(storage, `images/${filename}`)
  await uploadBytes(fileRef, compressedFile)
  
  return filename
}

export default uploadImage