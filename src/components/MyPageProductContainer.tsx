import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Product } from '@/types/product'
import { BsThreeDotsVertical } from "react-icons/bs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';
import deleteProduct from '@/api/deleteProduct';
import getImageUrl from '@/api/getImageUrl';
import Loading from './Loading';
import deleteImage from '@/api/deleteImage';
import { Dispatch, SetStateAction } from 'react';


interface MyPageProductContainerProps {
  product: Product,
  setIsDeleting: Dispatch<SetStateAction<boolean>>
}

const MyPageProductContainer = ({ product, setIsDeleting }: MyPageProductContainerProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['productImage', product.productImage[0]],
    queryFn: ({ queryKey }) => getImageUrl(queryKey[1]),
    staleTime: Infinity,
  })

  const navigate = useNavigate()


  const onClickEditBtn = () => {
    navigate(`/mypage/edit-product?product=${product.id}`)
  }


  const onClickDeleteBtn = async () => {
    setIsDeleting(true)

    deleteProduct(product.id)
    .catch((error) => {
      console.log(error)
      window.alert('상품 삭제를 실패했습니다.')
    })
    .then(async () => { //상품 삭제 성공
      for (const filename of product.productImage) {
        await deleteImage(filename)
      }
      window.alert('상품 삭제가 완료되었습니다.')
    })
    .finally(() => {
      window.location.reload()
    })
  }

  return (
    <div className='flex m-1 p-4 items-center border border-y-neutral-200 border-x-0'>
      <div className='mr-5'>
      {isError ? <div className='w-24 h-24 bg-gray-100' /> 
        : isLoading ? <Loading /> 
        : <img src={data} className='w-24 h-24 object-cover' />}
      </div>
      <div className='w-full'>
        <div className='text-ellipsis	text-base '>{product.productName}</div>
        <div className='text-sm text-gray-400'>{product.productCategory}</div>
      </div>
      <div className=''>{`₩${product.productPrice}`}</div>
      <div className='w-24 flex justify-end ml-8'>{product.productQuantity}</div>
      <div className='ml-8'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost"><BsThreeDotsVertical /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-16">    
            <DropdownMenuItem onClick={onClickEditBtn}>
              수정
            </DropdownMenuItem>        
            <DropdownMenuItem onClick={onClickDeleteBtn}>
              삭제
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default MyPageProductContainer