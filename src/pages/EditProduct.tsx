import { lazy, useState } from 'react'
import { useLoaderData, useNavigate, useSearchParams } from 'react-router-dom'
import { useQuery, useQueryClient } from '@tanstack/react-query'

import MyPageLayout from '@/components/layout/MyPageLayout'
import getProduct from '@/api/getProduct'
import { EditableProduct, TInputImage } from '@/types/product'
import ProductForm from '@/components/ProductForm'
import MetaTag from '@/components/MetaTag'
import { User } from '@/types/user'

const Loading = lazy(() => import('@/components/Loading'))

const EditProduct= () => {
  const user = useLoaderData() as User

  const [searchParams, ] = useSearchParams()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const queryClient = useQueryClient()

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['prevProduct', searchParams.get('product')],
    queryFn: ({ queryKey }) => getProduct(queryKey[1]!),
    staleTime: Infinity
  })

  const navigate = useNavigate()

  if (isLoading) return <Loading />
  if (isError) {
    console.log(error)
    return <p>오류가 발생했습니다.</p>
  }

  // 상품 수정
  async function onSubmitEdit(values: {
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
      const { default: updateProduct } = await import('@/api/updateProduct')
      const { default: deleteProductImage} = await import('@/api/deleteProductImage')

      //상품 업데이트
      let updatedProduct: EditableProduct = {
        productName: values.name,
        productDescription: values.description,
        // productImage: orgUrls,
        // productThumbnail: thumbnailUrls,
        productCategory: values.category,
        productPrice: values.price,
        productQuantity: values.quantity,
      }

      //모든 사진 중 기존 사진에 있었던 사진은 blob으로
      if (values.image && isProductImageChanged(data!.productImage, values.image)) {
        let files: File[] = []

        for (let i=0; i<values.image.length; i++) {
          const img = values.image[i]
          if (img.isOriginal) { //기존 사진
            const response = await fetch(img.url, {
              method: 'GET'
            })
            const blob = await response.blob()
            const file = new File([blob], `original_img_${i}`, { type: blob.type })
            files = [...files, file]
          } else { //새로 추가된 사진
            files = [...files, img.file!]
          }
        }

        console.log("files", files)

        //기존 사진 storage에서 삭제
        await deleteProductImage(user.id, data!.id)
  
        //사진 storage에 업로드
        let orgUrls: string[] = []
        let thumbnailUrls: string[] = []
  
        for (const file of files) {
          const { orgUrl, thumbnailUrl } = await uploadImage(file, user.id, data!.id)
          orgUrls = [...orgUrls, orgUrl]
          thumbnailUrls = [...thumbnailUrls, thumbnailUrl]
        }

        updatedProduct = {
          ...updatedProduct,
          productImage: orgUrls,
          productThumbnail: thumbnailUrls,
        }
      }

      //keyword 업데이트
      if (values.name !== data!.productName) {
        const { default: generateKeyword } = await import('@/utils/generateKeyword')

        const keywords = generateKeyword(values.name)
        updatedProduct = {
          ...updatedProduct,
          keyword: keywords
        }
      }

      await updateProduct(data!.id, updatedProduct)
      window.alert("상품을 성공적으로 수정하였습니다.")
      queryClient.fetchQuery({
        queryKey: ['prevProduct', data!.id],
        queryFn: ({ queryKey }) => getProduct(queryKey[1]!)
      })
    } 
    catch(error){
      console.log(error)
      window.alert("상품 수정에 실패하였습니다.")
    } 
    finally {
      navigate('/mypage')
    }
  }

  const isProductImageChanged = (prev: string[], cur: TInputImage[]) => {
    if (cur.every((img) => img.isOriginal) && prev.length === cur.length){
      console.log('not changed')
      return false
    } else {
      console.log('changed')
      return true
    }
  }
      

  return (
    <>
      <MetaTag />    

      <MyPageLayout>
        <h1 className='h1 mb-6'>상품 등록</h1>
        <p className='mb-6'>상품의 정보를 입력해주세요.</p>

        <div className='w-full'>
          <ProductForm 
            onSubmit={onSubmitEdit} 
            defaultValues={
              data ? {
                name: data.productName,
                description: data.productDescription,
                image: data.productImage,
                category: data.productCategory,
                price: data.productPrice,
                quantity: data.productQuantity
              } 
              : undefined
            } 
          />
        </div>
        {isSubmitting && <div className='fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center'><Loading /></div>}
      </MyPageLayout>
    </>
  )
}

export default EditProduct