import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "@/helpers/firebase"

//counter 값 1 증가 후, 증가된 값 리턴 
async function incrementCounter(counter: "user" | "product") {
  const docRef = doc(db, "counter", counter)
  const docSnap = await getDoc(docRef).catch((error) => {
    throw error
  })

  let cnt = 0
  if (docSnap.exists()) {
    cnt = docSnap.data().counter
  }
  cnt += 1
  
  await setDoc(docRef, { counter: cnt })
  .catch((error) => {
    throw error
  })

  return cnt
}

export default incrementCounter