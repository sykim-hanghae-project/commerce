import { useState } from "react"
import * as z from "zod"
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Button } from './ui/button'
import PhotoInput from './PhotoInput'
import { TInputImage } from "@/types/product"
import { useNavigate } from "react-router-dom"

interface ProductFormInterface {
  onSubmit: SubmitHandler<{
    name: string,
    description: string,
    image?: TInputImage[],
    category: string,
    price: number,
    quantity: number
  }>,
  defaultValues?: {
    name: string,
    description: string,
    image: string[],
    category: string,
    price: number,
    quantity: number
  }
}

const ProductForm = ({ onSubmit, defaultValues }: ProductFormInterface) => {
  const [isSubmit, setIsSubmit] = useState(false)
  const navigate = useNavigate()

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
    image: z.array(z.any()).min(1, {
      message: "상품 사진은 최소 한 장 추가해주세요."
    }),
    category: z.string(),
    price: z.number().min(1),
    quantity: z.number().min(1)
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues 
      ? {
        name: defaultValues.name,
        description: defaultValues.description,
        category: defaultValues.category,
        price: defaultValues.price,
        quantity: defaultValues.quantity
      }
      : {
        name: "",
        description: "",
        category: "Women",
        price: 100,
        quantity: 10
      }
  })

  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(isSubmit ? onSubmit : () => {})} className="space-y-8">
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
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>상품 사진</FormLabel>
              <PhotoInput 
                {...field}
                defaultValues={defaultValues?.image ? defaultValues.image : undefined}
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
              <Select {...field}  onValueChange={field.onChange} defaultValue={field.value}>
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
                <Input type="number"
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
                <Input type="number"
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
          <Button variant={"secondary"} className='w-40 mr-3' onClick={() => navigate('/mypage')}>취소</Button>
          <Button type="submit" className='w-40' onClick={()=>setIsSubmit(true)}>등록</Button>
        </div>
      </form>
    </Form>
  )
}

export default ProductForm