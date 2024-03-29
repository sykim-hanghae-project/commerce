import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import MetaTag from '@/components/MetaTag'
import Loading from '@/components/Loading'


const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  //영문, 숫자, 특수문자 중 2가지 이상의 조합, 10자리 이내
  const regExp = /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{10,}$/; 
  const formSchema = z.object({
    name: z.string(),
    email: z.string().email({
      message: '이메일 형식에 부합하지 않습니다.'
    }),
    password: z.string().min(10, {
      message: '비밀번호는 최소 10자 이상이어야 합니다.'
    }).regex(regExp, {
      message: '영어 대/소문자, 숫자, 특수문자 중 2종류의 조합이어야 합니다.'
    }),
    type: z.string()
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      type: "consumer"
    },
  })

  const signUpMutation = useMutation({
    mutationFn: async ({ name, email, password, type }: {
      name: string,
      email: string,
      password: string,
      type: string
    }) => {
      const { createUserWithEmailAndPassword, signOut } = await import("firebase/auth")
      const { auth } = await import("@/helpers/firebase")
      await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const { default: createUser } = await import('@/api/createUser')
        await createUser(userCredential.user.uid, name, email, password, type === "seller" ? true : false)
  
        await signOut(auth)

        window.alert('회원가입이 완료되었습니다.')
        navigate('/login')
      })
      .catch(async (error) => {
        console.log('error', error)
        const { default: getErrorMessage } = await import('@/utils/getErrorMessage')
        setErrorMessage(getErrorMessage(error))
      })
    },
    onError: () => {
      window.alert('회원가입 실패')
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    signUpMutation.mutate({
      name: values.name,
      email: values.email,
      password: values.password,
      type: values.type
    })
  }

  return (
    <>
      <MetaTag 
        title='회원가입 - XSO'
      />

      <div className='flex flex-col items-center py-14'>
        <h1 className='h1 mb-8'>회원가입</h1>
        <div className='flex flex-col justify-center w-72'>
          <Form {...form}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이름</FormLabel>
                  <FormControl>
                    <Input data-cy="name-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이메일</FormLabel>
                    <FormControl>
                      <Input placeholder="id@google.com" data-cy="email-input" {...field} />
                    </FormControl>
                    <FormMessage>
                      {errorMessage}
                    </FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>비밀번호</FormLabel>
                    <FormControl>
                      <Input data-cy="pwd-input" {...field} />
                    </FormControl>
                    <FormDescription>
                    최소 10자리의 영어 대/소문자, 숫자, 특수문자 중 2종류 문자 조합
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>유형</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-row space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="seller" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            판매자
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="consumer" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            구매자
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button type="submit" className='mt-7 w-full'>가입</Button>
            </form>
          </Form>
        </div>
        
        {signUpMutation.isLoading && (
          <div className='absolute left-0 top-0 w-screen h-screen flex items-center justify-center'>
            <Loading />
          </div>
        )}

      </div>
    </>
  )
}

export default Signup