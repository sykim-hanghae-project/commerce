import { db } from "@/helpers/firebase"
import { doc, setDoc } from "firebase/firestore"

async function createUser(
  id: string,
  nickname: string,
  email: string, 
  password: string, 
  isSeller: boolean
  ) {  
  await setDoc(doc(db, 'users', id), {
    id,
    email,
    isSeller,
    nickname,
    password,
    createdAt: new Date(),
    updatedAt: new Date()
  })
}

export default createUser