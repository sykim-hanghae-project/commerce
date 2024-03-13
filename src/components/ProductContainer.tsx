import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Product } from '@/types/product'
import priceToString from '@/utils/priceToString'

interface ProductContainerProps {
  product: Product
}

const ProductContainer = React.memo(({ product }: ProductContainerProps) => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate(`/product/${product.id}`)
  }

  return (
    <div className='relative cursor-pointer' onClick={onClick}>
      <Carousel>
        <CarouselContent>
          {product.productImage.map((url, idx) => (
            <CarouselItem key={`${product.id}-${idx}`}>
              <img src={url} className='w-full h-60 object-cover' loading='lazy' />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="accent" className='absolute left-0 ' />
        <CarouselNext variant="accent" className='absolute right-0' />
      </Carousel>

      <div>
        <p className='text-ellipsis	line-clamp-1 text-sm'>{product.productName}</p>
        <p className='text-base'>{priceToString(product.productPrice)}</p>
      </div>
    </div>
  )
})

export default ProductContainer