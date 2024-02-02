import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '@/types/product'
import { BsThreeDotsVertical } from "react-icons/bs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';
import deleteProduct from '@/api/deleteProduct';
import deletePhoto from '@/api/deleteImage';
import getImageUrl from '@/api/getImageUrl';


interface MyPageProductContainerProps {
  id: string,
  product: Product
}

const MyPageProductContainer = ({ id, product }: MyPageProductContainerProps) => {
  const [imgUrl, setImgUrl] = useState<string>()

  const navigate = useNavigate()

  useEffect(() => {
    //img url 받아오기
    getImageUrl(product.productImage[0])
    .then((url) => setImgUrl(url))
  }, [product]) 

  const onClickEditBtn = () => {
    navigate(`/mypage/edit-product?product=${id}`)
  }

  const onClickDeleteBtn = async () => {
    console.log(id)
    try {
      for (const url of product.productImage) {
        await deletePhoto(url)
      }
      await deleteProduct(id);
    } 
    catch (error) {
      window.alert('상품 삭제를 실패했습니다.')
      window.location.reload()
      return
    } 

    window.alert('상품 삭제가 완료되었습니다.')
    window.location.reload()
  }


  return (
    <div className='flex m-1 p-4 items-center border border-y-neutral-200 border-x-0'>
      <img
        className='w-24 h-24 mr-5'
        src={imgUrl} 
      />
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