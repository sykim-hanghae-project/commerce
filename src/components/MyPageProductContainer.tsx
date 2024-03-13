import { useLoaderData, useNavigate } from 'react-router-dom';
import { BsThreeDotsVertical } from "react-icons/bs";
import { Product } from '@/types/product'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import priceToString from '@/utils/priceToString';
import useDeleteProductMutation from '@/hooks/useDeleteProductMutation'
import { User } from '@/types/user';

interface MyPageProductContainerProps {
  product: Product,
}

const MyPageProductContainer = ({ product }: MyPageProductContainerProps) => {
  const user = useLoaderData() as User

  const navigate = useNavigate()

  const { mutate } = useDeleteProductMutation()

  const onClickEditBtn = () => {
    navigate(`/mypage/edit-product?product=${product.id}`)
  }

  const onClickDeleteBtn = async () => {
    const res = window.confirm('상품을 삭제하시겠습니까?')
    if (res) {
      mutate({ 
        productId: product.id, 
        userId: user.id
      })
    }
  }

  return (
    <div className='flex m-1 p-4 items-center'>

      <div className='w-24 h-24 min-w-24'>
        <img src={product.productThumbnail[0]} className='w-full h-full object-cover' loading='lazy' />
      </div>

      <div className='flex items-center w-full justify-end cursor-pointer mx-4' onClick={() => navigate(`/product/${product.id}`)}>
        <div className='w-full'>
          <div className='text-ellipsis	text-base line-clamp-1'>{product.productName}</div>
          <div className='text-sm text-gray-400 min-w-max'>{product.productCategory}</div>
        </div>
        <div className='w-24 min-w-max'>{priceToString(product.productPrice)}</div>
        <div className='w-20 ml-4 flex justify-center'>{product.productQuantity}</div>
      </div>

      <div className='flex items-center justify-end w-8'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button><BsThreeDotsVertical /></button>
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