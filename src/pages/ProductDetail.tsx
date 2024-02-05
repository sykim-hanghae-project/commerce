import getImageUrl from '@/api/getImageUrl'
import getProductsByCategory from '@/api/getProductsByCategory'
import CartDrawer from '@/components/CartDrawer'
import ProductContainer from '@/components/ProductContainer'
import { Button } from '@/components/ui/button'
import { useCartDispatch, useCartState } from '@/context/CartContext'
import { Product } from '@/types/product'
import formatDocumentDataToProduct from '@/utils/formatDocumentDataToProduct'
import priceToString from '@/utils/priceToString'
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const ProductDetail: React.FC = () => {
  const product = useLoaderData() as Product

  const [imageUrls, setImageUrls] = useState<string[]>([])
  const [recommmedProducts, setRecommendProducts] = useState<Product[]>([])
  
  const cartState = useCartState()
  const dispatch = useCartDispatch()

  async function getProducts() {
    const result = await getProductsByCategory(product.productCategory, 5, "createdAt", "desc", null)
    const formattedResult = result.docs.map(doc => formatDocumentDataToProduct(doc.data()))
    setRecommendProducts(formattedResult.filter(val => val.id !== product.id))
  }

  async function getImageUrls() {
    const urls: string[] = []
    for (const filename of product.productImage) {
      const url = await getImageUrl(filename)
      urls.push(url)
    }
   setImageUrls(urls)
  }

  const AddToCart = () => {
    dispatch({ type: "ADD_ITEM", itemId: product.id, price: product.productPrice })
    window.alert('장바구니에 담겼습니다.')
  }

  useEffect(() => {
    getImageUrls()
    getProducts()
  }, [product])

  return (
    <div className='w-full'>
      <div className='flex py-8 w-full'>
        <div className='sticky top-[10%] h-fit w-[45%]'>
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

          {/* 장바구니 */}
          <div>
            {cartState.items.find((item) => item.id === product.id) ? (
              /* 장바구니에 있으면 */
              <CartDrawer>
                <Button className='w-full mt-4'>장바구니 보기</Button>
              </CartDrawer>
            ) : (
              <Button className='w-full mt-4' onClick={AddToCart}>장바구니 담기</Button>
            )}
          </div>
          
        </div>

        {/*이미지*/}
        <div className='w-[45%] ml-[10%]'>
          <ul>
            {imageUrls.map((url, idx) => (
              <li key={`product_image_${idx}`}>
                <img src={url} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 동일 카테고리 상품들 */}
      {(recommmedProducts) && <div className=''>
        <p className='text-base mb-4 font-semibold'>추천 상품</p>
        <div>
          <ul className='grid grid-cols-5 gap-x-[1%]'>
            {recommmedProducts.map((product, idx) => (
              <li key={`recommend_products_${idx}`}>
                <ProductContainer product={product} />
              </li>
            ))}
          </ul>
        </div>
      </div>}
    </div>
  )
}

export default ProductDetail