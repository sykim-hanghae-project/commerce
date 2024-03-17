import React from 'react'
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useNavigate } from 'react-router-dom'
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from '@tanstack/react-query'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import MetaTag from '@/components/MetaTag'
import { User } from '@/types/user'
import Loading from '@/components/Loading'
import { AuthError } from 'firebase/auth'


const Signin: React.FC = () => {
  const navigate = useNavigate()

  function onClickSignupBtn() {
    navigate('/signup')
  }
  
  const signInMutation = useMutation({
    mutationFn: async ({ email, password }: { email: string, password: string }) => {
      const { signInWithEmailAndPassword } = await import('firebase/auth')
      const { auth } = await import("@/helpers/firebase")

      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      const token = await user.getIdToken()
      window.localStorage.setItem('user-token', token)
      window.localStorage.setItem('uid', user.uid)

      const { default: getUser } = await import('@/api/getUser')

      return getUser(user.uid)
    },
    onSuccess: (user: User | null) => {
      if (user) {
        window.localStorage.setItem('user-role', user.isSeller ? 'seller' : 'consumer')
        window.alert('로그인이 완료되었습니다.')
        window.location.replace('/')
      }
    },
    onError: async (error: AuthError) => {
      const { default: getErrorMessage } = await import('@/utils/getErrorMessage')
      window.alert(getErrorMessage(error))
    }
  })

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
    signInMutation.mutate({ email: values.email, password: values.password})
  }

  return (
    <>
      <MetaTag 
        title='로그인 - XSO'
      />

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

        {signInMutation.isLoading && (
          <div className='absolute left-0 top-0 w-screen h-screen flex items-center justify-center'>
            <Loading />
          </div>
        )}
      </div>
    </>
  )
}

export default Signin
