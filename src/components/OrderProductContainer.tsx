import { useQuery } from '@tanstack/react-query'
import Loading from './Loading'
import getImageUrl from '@/api/getImageUrl'
import priceToString from '@/utils/priceToString'

interface ImageContainerProps {
  filename: string
}

const ImageContainer = ({ filename }: ImageContainerProps) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['productImage', filename],
    queryFn: ({ queryKey }) => getImageUrl(queryKey[1])
  })

  if (isLoading) return <Loading /> 
  if (isError) {
    console.log(error)
    return <div className='w-24 h-24 bg-gray-100' />
  }

  return (
    <img src={data} className='w-24 h-24 object-cover min-w-24' />
  )
}

interface OrderProductContainerProps {
  imageFilename: string,
  productName: string,
  quantity: number,
  price: number
}

const OrderProductContainer = ({ imageFilename, productName, quantity, price }: OrderProductContainerProps) => {

  return (
    <div className='flex items-center text-sm'>
      <ImageContainer filename={imageFilename} />
      
      <div className='ml-4 w-full'>
        <p className='font-medium mb-2'>{productName}</p>
        <p className='text-gray-500'>{`수량: ${quantity}개`}</p>
      </div>

      <p className='min-w-max font-medium'>{priceToString(price * quantity)}</p>
    </div>
  )
}

export default OrderProductContainer