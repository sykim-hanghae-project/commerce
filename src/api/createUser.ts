import { createUserWithEmailAndPassword, signOut } from "firebase/auth"
import { auth, db } from "@/helpers/firebase"
import { doc, serverTimestamp, setDoc } from "firebase/firestore"
import incrementCounter from "./incrementCounter"

async function createUser(name: string, email: string, password: string, type: string) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)

  const user = userCredential.user
  const counter = await incrementCounter("user")
  
  await setDoc(doc(db, 'users', user.uid), {
    id: counter,
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