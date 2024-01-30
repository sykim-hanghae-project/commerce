import { useEffect, useState } from 'react'
import * as z from "zod"
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import MyPageLayout from '@/components/layout/MyPageLayout'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useUserState } from '@/context/UserContext'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import PhotoInput from '@/components/PhotoInput'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Textarea } from '@/components/ui/textarea'
import addProduct from '@/api/addProduct'
import uploadImage from '@/api/uploadPhoto'
import { Product } from '@/types/product'
import getProduct from '@/api/getProduct'

interface AddProductProps {
  type: 'create' | 'edit'
}

const AddProduct= ({ type }: AddProductProps) => {
  const state = useUserState()
  const [product, setProduct] = useState<Product>()
  
  const [searchParams, ] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (type === 'edit') {
      const pid = searchParams.get('product')
      getProduct(pid!)
      .then((res) => {
        if (res) {
          console.log(res)
          setProduct(res)
        }
      })
    }
  }, [type, searchParams])


  const formSchema = z.object({
    name: z.string().min(1, {
      message: "상품명 입력은 필수입니다."
    }).max(50, {
      message: "50자 이내로 작성해주세요.",
    }),
    description: z.string().min(1, {
      message: "상품명 입력은 필수입니다."
    }).max(500, {
      message: "500자 이내로 작성해주세요.",
    }),
    photo: z.instanceof(FileList),
    category: z.string(),
    price: z.number().min(1),
    quantity: z.number().min(1)
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 100,
      quantity: 10
    }
  })

  useEffect(() => {
    if (product) {
      form.setValue('name', product.productName)
      form.setValue('description', product.productDescription)
      form.setValue('category', product.productCategory)
      form.setValue('price', product.productPrice)
      form.setValue('quantity', product.productQuantity)
    }
  }, [form, product])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const fileUrls = await uploadImage(values.photo)
      await addProduct(state.loggedUser!.id, values.name, values.price, values.quantity, values.description, values.category, fileUrls)

      window.alert("상품을 성공적으로 등록하였습니다.")
      navigate('/mypage')
    } 
    catch (error) {
      window.alert(error)
    }    
  }

  return (
    <MyPageLayout>
      <h1 className='h1 mb-6'>상품 등록</h1>
      <p className='mb-6'>상품의 정보를 입력해주세요.</p>

      <div className='w-full'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>상품명</FormLabel>
                  <FormControl>
                    <Input placeholder="상품명을 입력하세요." {...field} />
                  </FormControl>
                  <FormDescription>
                    최대 50자
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>상품 설명</FormLabel>
                  <FormControl>
                  <Textarea
                    placeholder="상품 설명을 작성해주세요."
                    className="resize-none"
                    {...field}
                  />                  
                  </FormControl>
                  <FormDescription>
                    최대 500자
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField 
              control={form.control}
              name="photo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>상품 사진</FormLabel>
                  <PhotoInput onChange={field.onChange} defaultValues={(type === 'edit' && product) ? product.productImage : undefined}/>
                  <FormDescription>
                    최대 10장
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>카테고리</FormLabel>
                  <Select {...field}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="상품의 카테고리를 선택하세요." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Men">Men</SelectItem>
                      <SelectItem value="Women">Women</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>가격</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      placeholder="상품의 가격을 입력하세요." 
                      onChange={event => field.onChange(Number.parseInt(event.target.value))}
                    />
                  </FormControl>
                  <FormDescription>
                    In KRW
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>수량</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="상품의 수량을 입력하세요." 
                      {...field} 
                      onChange={event => field.onChange(Number.parseInt(event.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='flex justify-center'>
              <Button variant={"secondary"} className='w-40 mr-3'>취소</Button>
              <Button type="submit" className='w-40'>등록</Button>
            </div>
          </form>
        </Form>
      </div>

    </MyPageLayout>
  )
}

export default AddProduct