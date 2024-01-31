import { storage } from "@/helpers/firebase";
import { getBlob, ref } from "firebase/storage";

async function getImageBlob(filename: string) {
  const fileRef = ref(storage, `images/${filename}`)
  const blob = await getBlob(fileRef)
  return blob
}

export default getImageBlob