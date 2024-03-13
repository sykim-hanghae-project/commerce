import { storage } from "@/helpers/firebase"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
import imageCompression from 'browser-image-compression'

async function uploadImage(file: File, sellerId: string, productId: string) {
  console.log('uploading...')
  const compressedFile = await imageCompression(file, {
    maxWidthOrHeight: 1000
  })

  const compressedThumbnail = await imageCompression(file, { //썸네일용
    maxWidthOrHeight: 300
  })

  const filename = v4()
  const orgFileRef = ref(storage, `${sellerId}/${productId}/${filename}`)
  const thumbnailRef = ref(storage, `${sellerId}/${productId}/${filename}_small`)

  await uploadBytes(orgFileRef, compressedFile)
  await uploadBytes(thumbnailRef, compressedThumbnail)

  const orgUrl = await getDownloadURL(orgFileRef)
  const thumbnailUrl = await getDownloadURL(thumbnailRef)
  console.log('uploaded!')

  return { orgUrl, thumbnailUrl }
}

export default uploadImage