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
import uploadImage from '@/api/uploadImage'
import { Product } from '@/types/product'
import getProduct from '@/api/getProduct'
import deleteImage from '@/api/deleteImage'
import updateProduct from '@/api/updateProduct'
import getImageBlob from '@/api/getImageBlob'

interface AddProductProps {
  type: 'create' | 'edit'
}

const AddProduct= ({ type }: AddProductProps) => {
  const state = useUserState()
  const [product, setProduct] = useState<Product>()
  const [pid, setPid] = useState<string>()
  const [isSubmit, setIsSubmit] = useState(false)
  
  const [searchParams, ] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (type === 'edit') {
      const docId = searchParams.get('product')
      setPid(docId!)
      getProduct(docId!)
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
    photo: z.any(),
    // photo: z.array(z.object({
    //   isOriginal : z.boolean(),
    //   filename: z.string(),
    //   url: z.string(),
    //   file: z.instanceof(File) 
    // })),
    category: z.string(),
    price: z.number().min(1),
    quantity: z.number().min(1)
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "Women",
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

  async function onSubmitCreate(values: z.infer<typeof formSchema>) {
    if (!isSubmit) return

    console.log(values)
    try {
      const filenames: string[] = []
      for (const photo of values.photo) {
        const filename = await uploadImage(photo.file)
        filenames.push(filename)
      }

      await addProduct(state.loggedUser!.id, values.name, values.price, values.quantity, values.description, values.category, filenames)

      window.alert("상품을 성공적으로 등록하였습니다.")
    } 
    catch (error) {
      window.alert(error)
    } finally {
      navigate('/mypage')
    }
  }

  async function onSubmitEdit(values: z.infer<typeof formSchema>) {
    if (!isSubmit) return

    console.log(values)
    try {
      //모든 사진 중 기존 사진에 있었던 사진은 blob으로
      const blobs: Blob[] = []
      for (const photo of values.photo) {
        if (photo.isOriginal) {
          const blob = await getImageBlob(photo.filename)
          blobs.push(blob)
        }
      }

      //기존 사진 storage에서 삭제
      for (const filename of product!.productImage) {
        await deleteImage(filename)
      }

      //사진 storage에 업로드
      const filenames: string[] = []
      //기존 사진
      for (const blob of blobs) { 
        const filename = await uploadImage(blob)
        filenames.push(filename)
      }
      //새로 추가된 사진
      for (const photo of values.photo) {
        if (!photo.isOriginal) {
          const filename = await uploadImage(photo.file)
          filenames.push(filename)
        }
      }

      //상품 업데이트
      const updatedProduct: Product = {
        id: product!.id,
        sellerId: product!.sellerId,
        productName: values.name,
        productDescription: values.description,
        productImage: filenames,
        productCategory: values.category,
        productPrice: values.price,
        productQuantity: values.quantity,
        createdAt: product!.createdAt,
        updatedAt: product!.updatedAt //updateProduct에서 교체 예정
      }
      await updateProduct(pid!, updatedProduct)
      window.alert("상품을 성공적으로 수정하였습니다.")
    } 
    catch(error){
      window.alert(error)
    } 
    finally {
      navigate('/mypage')
    }
  }

  return (
    <MyPageLayout>
      <h1 className='h1 mb-6'>상품 등록</h1>
      <p className='mb-6'>상품의 정보를 입력해주세요.</p>

      <div className='w-full'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(type === 'create' ? onSubmitCreate : onSubmitEdit)} className="space-y-8">
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
                  <PhotoInput 
                    {...field}
                    defaultValues={(type === 'edit' && product) ? product.productImage : undefined}
                    // onChange={(e) => {
                    //   // console.log("e.detail.value",e.detail.value)
                    //   // console.log(field.onChange)
                    //   field.onChange({
                    //     value: e.detail.value
                    //   })
                    // }}
                    onChange={(images) => field.onChange(images)}
                  />
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
              <Button type="submit" className='w-40' onClick={()=>setIsSubmit(true)}>등록</Button>
            </div>
          </form>
        </Form>
      </div>

    </MyPageLayout>
  )
}

export default AddProduct