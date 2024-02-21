import { lazy, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

import MyPageLayout from '@/components/layout/MyPageLayout'
import { User } from '@/types/user'
import ProductForm from '@/components/ProductForm'
import { TInputImage } from '@/types/product'
import MetaTag from '@/components/MetaTag'

const Loading = lazy(() => import('@/components/Loading'))

const AddProduct= () => {
  const user = useLoaderData() as User 

  const [isSubmitting, setIsSubmitting] = useState(false)

  const navigate = useNavigate()


  // 상품 추가
  async function onSubmitCreate(values: {
    name: string,
    description: string,
    image?: TInputImage[],
    category: string,
    price: number,
    quantity: number
  }) {
    console.log(values)
    setIsSubmitting(true)

    try {
      const { default: uploadImage } = await import('@/api/uploadImage')
      const { default: addProduct } = await import('@/api/addProduct')

      const filenames: string[] = []
      if (values.image) {
        for (const img of values.image) {
          const filename = await uploadImage(img.file!)
          filenames.push(filename)
        }
      }

      await addProduct(user.id, values.name, values.price, values.quantity, values.description, values.category, filenames)

      window.alert("상품을 성공적으로 등록하였습니다.")
    } 
    catch (error) {
      console.log(error)
      window.alert("상품 등록에 실패하였습니다.")
    } finally {
      navigate('/mypage')
    }
  }

  return (
    <>
      <MetaTag />

      <MyPageLayout>
        <h1 className='h1 mb-6'>상품 등록</h1>
        <p className='mb-6'>상품의 정보를 입력해주세요.</p>

        <div className='w-full'>
          <ProductForm onSubmit={onSubmitCreate} />
        </div>

        {isSubmitting && <div className='fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center'><Loading /></div>}
      </MyPageLayout>
    </>
  )
}

export default AddProduct