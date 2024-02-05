import { createUserWithEmailAndPassword, signOut } from "firebase/auth"
import { v4 as uuidv4} from 'uuid'
import { auth, db } from "@/helpers/firebase"
import { doc, serverTimestamp, setDoc } from "firebase/firestore"

async function createUser(name: string, email: string, password: string, type: string) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)

  const user = userCredential.user
  const id = uuidv4()

  
  await setDoc(doc(db, 'users', user.uid), {
    id,
    email,
    isSeller: type === "seller" ? true : false,
    nickname: name,
    password,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  })

  await signOut(auth)
}

export default createUser