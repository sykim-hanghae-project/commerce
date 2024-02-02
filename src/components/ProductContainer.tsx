import { useEffect, useState } from 'react'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Product } from '@/types/product'
import priceToString from '@/utils/priceToString'
import getImageUrl from '@/api/getImageUrl'

interface ProductContainerProps {
  product: Product
}

const ProductContainer = ({ product }: ProductContainerProps) => {
  const [imageUrl, setImageUrl] = useState<string[]>([])

  async function getUrl() {
    const urls: string[] = []
    for (const filename of product.productImage) {
      const url = await getImageUrl(filename)
      urls.push(url)
    }
    setImageUrl(urls)
  }

  useEffect(() => {
    getUrl()
  }, [])

  return (
    <div className='relative'>
      <Carousel>
        <CarouselContent>
          {imageUrl.map((url, idx) => (
            <CarouselItem key={`${product.id}-${idx}`}>
              <img src={url} className='w-full h-60 object-cover' />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="ghost" className='absolute left-0 ' />
        <CarouselNext variant="ghost" className='absolute right-0' />
      </Carousel>

      <div>
        <p className='text-ellipsis	line-clamp-1 text-sm'>{product.productName}</p>
        <p className='text-base'>{priceToString(product.productPrice)}</p>
      </div>
    </div>
  )
}

export default ProductContainer