import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Product } from '@/types/product'
import priceToString from '@/utils/priceToString'
import getImageUrl from '@/api/getImageUrl'

interface ProductImageProps {
  filename: string
}

const ProductImage = React.memo(({ filename }: ProductImageProps) => {
  const { data, isError, error } = useQuery({
    queryKey: ['productImage', filename],
    queryFn: ({ queryKey }) => getImageUrl(queryKey[1]),
    staleTime: 30000
  })

  if (isError) {
    console.log(error)
    return <div className='w-full h-60 bg-gray-100'></div>
  }

  return (
    <img src={data} className='w-full h-60 object-cover' loading='lazy' />
  )
})

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
        <CarouselContent className='bg-slate-200'>
          {product.productImage.map((filename, idx) => (
            <CarouselItem key={`${product.id}-${idx}`}>
              <ProductImage filename={filename} />
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