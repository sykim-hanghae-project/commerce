import { storage } from "@/helpers/firebase";
import { deleteObject, ref } from "firebase/storage";

async function deletePhoto(url: string) {
  const desertRef = ref(storage, url);

  await deleteObject(desertRef)
  .catch((error) => {
    throw error
  });
}

export default deletePhoto