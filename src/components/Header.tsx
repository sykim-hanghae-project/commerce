import { useNavigate } from 'react-router-dom'
import { BsHandbag, BsPerson } from "react-icons/bs";
import SearchInput from './SearchInput';
import CartDrawer from './CartDrawer';
import { useCartState } from '@/context/CartContext';

const Header = () => {
  const cartState = useCartState()

  const navigate = useNavigate()

  const onClickTitle = () => {
    navigate('/')
  }

  const onClickMyPageBtn = () => {
    navigate('/mypage')
  }


  return (
    <header className='flex items-center justify-center px-8 py-4 border-b border-slate-200'>
      <div className='w-full'>
        <button 
          className='button headerCategoryItem'
          onClick={() => window.location.replace(`/product/list?category=Men`)}
        >
          Men
        </button>
        <button 
          className='button headerCategoryItem'
          onClick={() => window.location.replace(`/product/list?category=Women`)}
        >
          Women
        </button>
      </div>

      <button 
        className='button text-5xl font-bold' 
        onClick={onClickTitle}>
        XSO
      </button>

      <div className='flex items-center w-full justify-end'>
          <div className='navItem'>
            <SearchInput />
          </div>

          {/* 장바구니 */}
          <div className='headerNavItem'>
            <CartDrawer>
              <button className='button headerIconBtn relative bg-slate-100'>
                <BsHandbag />
                <div className='absolute top-0 right-[-0.5rem] bg-slate-400 w-4 h-4 rounded-[50%]'>
                  <p className='text-white text-xs'>{cartState.items.length}</p>
                </div>
              </button>
            </CartDrawer>
          </div>

          {/* 마이페이지 */}
          <div className='headerNavItem'>
            <button className='button headerIconBtn' onClick={onClickMyPageBtn}>
              <BsPerson />
            </button>
          </div>
      </div>
    </header>
  )
}

export default Header