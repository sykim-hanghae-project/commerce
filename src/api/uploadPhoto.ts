import { storage } from "@/helpers/firebase"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"

async function uploadImage(files: FileList) {
  console.log('여기파일',files)
  const fileUrls: string[] = []

  for (let i=0; i < files.length; i++) {
    const fileRef = ref(storage, v4())
    await uploadBytes(fileRef, files[i])
    const url = await getDownloadURL(fileRef)
    fileUrls.push(url)
  }
  
  return fileUrls
}

export default uploadImage