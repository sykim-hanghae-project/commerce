import { db } from "@/helpers/firebase"
import { doc, getDoc } from "firebase/firestore"

const getUser = async (uid: string) => {
  const docRef = doc(db, 'users', uid)
  const docSnap = await getDoc(docRef)
  
  if (docSnap.exists()) {
    const data = docSnap.data()
    
    return {
      id: data.id,
      email: data.email,
      isSeller: data.isSeller,
      nickname: data.nickname,
      password: data.password,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt 
    }
  } else {
    return null
  }
}

export default getUser