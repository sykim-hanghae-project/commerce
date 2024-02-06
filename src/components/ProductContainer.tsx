import { useQuery } from '@tanstack/react-query'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Product } from '@/types/product'
import priceToString from '@/utils/priceToString'
import getImageUrl from '@/api/getImageUrl'
import Loading from './Loading'

interface ProductImageProps {
  filename: string
}

const ProductImage = ({ filename }: ProductImageProps) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['productImage', filename],
    queryFn: ({ queryKey }) => getImageUrl(queryKey[1]),
    staleTime: 2000
  })

  if (isLoading) return <Loading />
  if (isError) {
    console.log(error)
    return <div className='w-full h-60 bg-gray-100'></div>
  }

  return (
    <img src={data} className='w-full h-60 object-cover' />
  )
}

interface ProductContainerProps {
  product: Product
}

const ProductContainer = ({ product }: ProductContainerProps) => {
  // console.log(product)

  const onClick = () => {
    window.location.assign(`/product/${product.id}`)
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