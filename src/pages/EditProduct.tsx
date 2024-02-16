import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import MyPageLayout from '@/components/layout/MyPageLayout'
import uploadImage from '@/api/uploadImage'
import getProduct from '@/api/getProduct'
import deleteImage from '@/api/deleteImage'
import updateProduct from '@/api/updateProduct'
import getImageBlob from '@/api/getImageBlob'
import { EditableProduct, Product, TInputImage } from '@/types/product'
import ProductForm from '@/components/ProductForm'
import Loading from '@/components/Loading'


const EditProduct= () => {
  const [searchParams, ] = useSearchParams()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [product, setProduct] = useState<Product>()

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['prevProduct', searchParams.get('product')],
    queryFn: ({ queryKey }) => getProduct(queryKey[1]!),
    staleTime: Infinity
  })

  const navigate = useNavigate()

  useEffect(() => {
    if (data)
      setProduct(data)
  }, [data])

  if (isLoading) return <Loading />
  if (isError) {
    console.log(error)
    window.location.replace('/mypage')
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
      //모든 사진 중 기존 사진에 있었던 사진은 blob으로
      const blobs: Blob[] = []
      if (values.image) {
        for (const img of values.image) {
          if (img.isOriginal) { //기존 사진
            const blob = await getImageBlob(img.filename!)
            blobs.push(blob)
          }
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
      if (values.image) {
        for (const img of values.image) {
          if (!img.isOriginal) {
            const filename = await uploadImage(img.file!)
            filenames.push(filename)
          }
        }
      }

      //상품 업데이트
      const updatedProduct: EditableProduct = {
        productName: values.name,
        productDescription: values.description,
        productImage: filenames,
        productCategory: values.category,
        productPrice: values.price,
        productQuantity: values.quantity,
      }
      await updateProduct(product!.id, updatedProduct)
      window.alert("상품을 성공적으로 수정하였습니다.")
    } 
    catch(error){
      console.log(error)
      window.alert("상품 수정에 실패하였습니다.")
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
  )
}

export default EditProduct