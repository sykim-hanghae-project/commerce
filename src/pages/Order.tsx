import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import * as z from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { IoMdClose } from "react-icons/io";
import { DaumPostcodeEmbed, Address } from 'react-daum-postcode'
import { v4 as uuidv4 } from 'uuid'
import { useMutation } from '@tanstack/react-query';

import { Button } from '@/components/ui/button'
import { useCartDispatch } from '@/context/CartContext'
import OrderProductContainer from '@/components/OrderProductContainer'
import priceToString from '@/utils/priceToString'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import Modal from '@/components/Modal'
import useScript from '@/hooks/useScript';
import onClickPayment from '@/helpers/iamport';
import { RequestPayResponse } from '@/types/iamport';
import { OrderItem } from '@/types/CartItem';
import createOrder from '@/api/createOrder';
import { User } from '@/types/user';
import updateProduct from '@/api/updateProduct';
import updateProductQuantity from '@/api/updateProductQuantity';
import Loading from '@/components/Loading';

const Order = () => {
  const user = useLoaderData() as User

  const navigate = useNavigate()

  const location = useLocation()
  const products = location.state.products as OrderItem[]

  const cartDispatch = useCartDispatch()
  
  const [isModalOpen, setIsModalOpen] = useState(false) //주소 입력 모달
  const [address, setAddress] = useState<string>("")

  const [loading, error] = useScript("https://cdn.iamport.kr/v1/iamport.js"); // 스크립트 동적 삽입

  const [isPaid, setIsPaid] = useState(false)

  useEffect(() => {
    //페이지 진입 시 재고 감소
    decrementStock(products)
    
    //페이지 벗어날 때 재고 복구
    window.addEventListener('unload', unloadEventHandler)

    return () => {
      window.removeEventListener('unload', unloadEventHandler)
    }
  }, [products, isPaid])

const unloadEventHandler = useCallback(() => {
  console.log('unload')
  if (!isPaid) { // 결제하지 않았을 때
    products.forEach((product) => {
      updateProductQuantity(product.product.id, product.product.productQuantity)
    })
  }
}, [products, isPaid])

  const decrementStock = (items: OrderItem[]) => {
    // 페이지 진입 시
    items.forEach((item) => {
      updateProduct(item.product.id, {
        productQuantity: item.product.productQuantity - item.quantity
      })
    })
  }

  const totalPrice = useMemo(() => {
    let total = 0
    for (const item of products) {
      total += item.product.productPrice * item.quantity
    }
    return total
  }, [products])

  const toggle = () => {
    setIsModalOpen(!isModalOpen)
  }

  const formSchema = z.object({
    name: z.string().min(1, {
      message: "이름을 입력해주세요."
    }),
    address2: z.string(),
    phone1: z.string(),
    phone2: z.string().regex(/\d{3,4}/, {
      message: "숫자 3-4자리"
    }),
    phone3: z.string().regex(/\d{4}/, {
      message: "숫자 4자리"
    }),
    // emailId: z.string().min(1, {
    //   message: "이메일을 입력해주세요."
    // }),
    // emailDomain: z.string().min(1, {

    // }),
    agreement: z.boolean()
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address2: "",
      phone1: "010",
      phone2: "",
      phone3: "",
      // emailId: "",
      // emailDomain: "",
      agreement: false
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("values",values)
    if (!values.agreement) {
      window.alert('구매 진행에 대한 동의가 필요합니다.')
      return
    }

    if (!address) {
      window.alert('주소를 입력해주세요.')
      return
    }
    
    if (error) {
      window.alert('결제를 진행할 수 없습니다.')
      window.location.reload()
      return
    }

    onClickPayment(
      uuidv4(), //merchant_uid
      totalPrice, //amount
      values.name, //name
      values.phone1 + values.phone2 + values.phone3, //buyer_tel
      address + values.address2 ? ` ${values.address2}` : "", //buyer_addr
      payCallback //콜백 함수
    )
  }

  const createOrderMutation = useMutation({
    mutationFn: async ({ items }: { items: OrderItem[] }) => {
      items.forEach(async (item) => {
        await createOrder(item.product.sellerId, user.id, item.product.id, item.quantity)
      })
    }
  })

  const payCallback = (response: RequestPayResponse) => {
    const { success, error_msg } = response
    
    if (!success) {
      window.alert(`결제 실패: ${error_msg}`)
      navigate('/')
      return
    }

    //결제 성공 시
    setIsPaid(true)
    //firebase에 기록
    createOrderMutation.mutate({ items: products }, {
      onError: (error) => {
        console.log(error);
      },
      onSettled: () => {
        //장바구니 비우기
        cartDispatch({ type: "EMPTY" })
        navigate('/mypage/myorder')
      }
    })
  }

  const onCompletePostcode = (address: Address) => {
    let res = address.address
    if (address.buildingName) 
      res += ` (${address.buildingName})`
    setAddress(res)
  }

  return (
    <div className='p-8 flex flex-col justify-center' id='orderpage'>
      <h1 className='h1 mb-8'>주문하기</h1>

      <div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField 
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이름</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <FormLabel>주소</FormLabel>
              <div className='flex'>
                <div className='w-full h-10 bg-white rounded-md border px-3 py-2'>
                  <p>{address}</p>
                </div>

                <FormField 
                  control={form.control}
                  name="address2"
                  render={({ field }) => (
                    <FormItem className='mx-4 w-full'>
                      <FormControl>
                        <Input {...field} placeholder='상세 주소' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button onClick={toggle}>주소 검색</Button>
              </div>
              
            </div>

            <div>
              <FormLabel>전화번호</FormLabel>
              <div className='flex'>
                <FormField 
                  control={form.control}
                  name='phone1'
                  render={({ field }) => (
                    <FormItem>
                      <Select {...field} onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value='010'>010</SelectItem>
                          <SelectItem value='011'>011</SelectItem>
                          <SelectItem value='016'>016</SelectItem>
                          <SelectItem value='017'>017</SelectItem>
                          <SelectItem value='018'>018</SelectItem>
                          <SelectItem value='019'>019</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <p className='p-2'>-</p>
                <FormField 
                  control={form.control}
                  name="phone2"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <p className='p-2'>-</p>
                <FormField 
                  control={form.control}
                  name="phone3"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
{/* 
            <div>
              <FormLabel>이메일</FormLabel>

              <div className='flex items-center'>
                <FormField 
                  control={form.control}
                  name="emailId"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <p className='mx-2'>@</p>

                <FormField 
                  control={form.control}
                  name="emailDomain"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField 
                  control={form.control}
                  name="emailDomain"
                  render={({ field }) => (
                    <FormItem>
                      <Select {...field} onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="이메일 선택" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="naver.com">naver.com</SelectItem>
                          <SelectItem value="daum.net">daum.net</SelectItem>
                          <SelectItem value="nate.com">nate.com</SelectItem>
                          <SelectItem value="gmail.com">gmail.com</SelectItem>
                          <SelectItem value="직접입력">직접입력</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div> */}

            <div className='mt-8'>
              <p className='font-semibold'>주문 상품</p>
              
              <div className='my-4 border-y border-black py-4'>
                <ul>
                {products.map((item, idx) => (
                  <li className='OrderItem' key={`order_product_${idx}`} >
                    <OrderProductContainer  
                      imageFilename={item.product.productImage[0]}
                      productName={item.product.productName}
                      quantity={item.quantity}
                      price={item.product.productPrice}
                    />
                  </li>
                ))}
                </ul>
              </div>

              <div className='flex font-semibold'>
                <p className='w-full'>결제 금액</p>
                <p className='min-w-max'>{priceToString(totalPrice)}</p>
              </div>
            </div>

            <div className='flex items-center my-4'>
              <FormField 
                control={form.control}
                name="agreement"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>

                  </FormItem>
                )}
              />
              <FormLabel className='ml-4'>결제정보를 확인하였으며, 구매진행에 동의합니다.</FormLabel>
            </div>

            <div className='flex justify-center'>
              <Button type='submit' className='px-8' disabled={loading ? true: false}>결제 진행</Button>
            </div>

          </form>          
        </Form>

      </div>

      {isModalOpen && 
      <div className='ModalOutside'>
        <Modal className='w-96'>
          <Modal.Header title='주소 입력'>
            <Modal.Close onClose={toggle}>
              <IoMdClose />
            </Modal.Close>
          </Modal.Header>
          <Modal.Body>
            <DaumPostcodeEmbed onComplete={onCompletePostcode} onClose={() => setIsModalOpen(false)} />
          </Modal.Body>
        </Modal>
      </div>
      }

      {createOrderMutation.isLoading && 
      <div className='w-screen h-screen fixed top-0 left-0 flex justify-center items-center'>
        <Loading />
      </div>}
    </div>
  )
}

export default Order