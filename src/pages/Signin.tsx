import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useNavigate } from 'react-router-dom'
import { zodResolver } from "@hookform/resolvers/zod"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { getErrorMessage } from '@/utils/getErrorMessage'
import { auth, db } from "@/helpers/firebase"; 
import { doc, getDoc } from 'firebase/firestore'


const Signin: React.FC = () => {
  // const dispatch = useUserDispatch()
  const navigate = useNavigate()

  function onClickSignupBtn() {
    navigate('/signup')
  }

  const loginUser = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;  
      user.getIdToken()
      .then((token) => {
        window.localStorage.setItem('user-token', token)
      })
      .catch((error) => {
        throw(error) //fail to get token
      })
      window.localStorage.setItem('uid', user.uid)
    })
    .catch((error) => { //로그인 실패
      throw(error)
    })

    const uid = window.localStorage.getItem('uid')
    return uid ? getUser(uid) : null
  }

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

  const formSchema = z.object({
    email: z.string().email(),
    password: z.string()
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    loginUser(values.email, values.password)
    .then((user) => {
      if (user) {
        window.localStorage.setItem('user-role', user.isSeller ? 'seller' : 'consumer')

        // dispatch({ type: 'SET_USER', loggedUser: user })
        // dispatch({ type: 'SET_ISLOGGEDIN', isLoggedIn: true })
      }
      
      window.alert('로그인이 완료되었습니다.')
      window.location.reload()
      navigate('/')
    })
    .catch((error) => {
      window.alert(getErrorMessage(error));
    })
  }

  return (
    <div className='flex flex-col items-center py-14'>
      <h1 className='h1 mb-8'>로그인</h1>
      <div className='flex flex-col justify-center w-72'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이메일</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='h-6'></div>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className='mt-7 w-full'>로그인</Button>
          </form>
        </Form>
      </div>
      <button className='button mt-8' onClick={onClickSignupBtn}>
        <p className='underline underline-offset-2'>회원가입</p>
      </button>
    </div>
  )
}

export default Signin
