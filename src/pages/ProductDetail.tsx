import getImageUrl from '@/api/getImageUrl'
import getProductsByCategory from '@/api/getProductsByCategory'
import ProductContainer from '@/components/ProductContainer'
import { Button } from '@/components/ui/button'
import { Product } from '@/types/product'
import formatDocumentDataToProduct from '@/utils/formatDocumentDataToProduct'
import priceToString from '@/utils/priceToString'
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const ProductDetail: React.FC = () => {
  const product = useLoaderData() as Product
  const [imageUrls, setImageUrls] = useState<string[]>([])
  const [recommmedProducts, setRecommendProducts] = useState<Product[]>([])

  async function getProducts() {
    const result = await getProductsByCategory(product.productCategory, 5, "createdAt", "desc", null)
    const formattedResult = result.docs.map(doc => formatDocumentDataToProduct(doc.data()))
    setRecommendProducts(formattedResult)
  }

  async function getImageUrls() {
    const urls: string[] = []
    for (const filename of product.productImage) {
      const url = await getImageUrl(filename)
      urls.push(url)
    }
   setImageUrls(urls)
  }

  useEffect(() => {
    getImageUrls()
    getProducts()
  }, [])

  return (
    <div className=''>
      <div className='flex py-8'>
        <div className='sticky top-[10%] h-fit'>
          <h1 className='h1 mb-4'>{product.productName}</h1>
          <p>{product.productDescription}</p>
          <div className='flex text-sm mt-12'>
            <p className='w-full '>남은 수량</p>
            <p>{product.productQuantity}</p>
          </div>
          <div className='flex text-sm mt-4'>
            <p className='w-full'>가격</p>
            <p className='min-w-max'>{priceToString(product.productPrice)}</p>
          </div>
          <Button className='w-full mt-4'>장바구니 담기</Button>
        </div>

        {/*이미지*/}
        <div className='w-2/4 ml-[10%]'>
          <ul>
            {imageUrls.map((url) => (
              <img src={url} />
            ))}
          </ul>
        </div>
      </div>

      {/* 동일 카테고리 상품들 */}
      {(recommmedProducts) && <div className=''>
        <p className='text-base mb-4 font-semibold'>추천 상품</p>
        <div>
          <ul className='grid grid-cols-5 gap-x-[1%]'>
            {recommmedProducts.map((product) => (
              <ProductContainer product={product} />
            ))}
          </ul>
        </div>
      </div>}
    </div>
  )
}

export default ProductDetail