import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

import { db } from "@/helpers/firebase";
import { User } from "@/types/user";

function useUser(uid: string | null) {
  const [user, setUser] = useState<User | null>(null)

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

  useEffect(() => {
    if (uid != null) {
      getUser(uid)
      .then((res) => {
        if (res != null) setUser(res)
      })
    }
  }, [uid])

  return user
}

export default useUser
