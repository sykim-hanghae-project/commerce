import { storage } from "@/helpers/firebase";
import { deleteObject, ref } from "firebase/storage";

async function deleteImage(filename: string) {
  const imageRef = ref(storage, `images/${filename}`);

  await deleteObject(imageRef)
  .catch((error) => {
    throw error
  });
}

export default deleteImage