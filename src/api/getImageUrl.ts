import { storage } from "@/helpers/firebase";
import { getDownloadURL, ref } from "firebase/storage";

async function getImageUrl(filename: string) {
  const fileRef =  ref(storage, `images/${filename}`)
  const url = await getDownloadURL(fileRef)
  return url
}

export default getImageUrl