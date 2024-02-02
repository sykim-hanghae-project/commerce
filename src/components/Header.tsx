import { useNavigate } from 'react-router-dom'
import { BsHandbag, BsPerson } from "react-icons/bs";
import SearchInput from './SearchInput';

const Header = () => {
  const navigate = useNavigate()

  const onClickTitle = () => {
    navigate('/')
  }

  const onClickCartBtn = () => {
    navigate('/cart')
  }

  const onClickMyPageBtn = () => {
    navigate('/mypage')
  }


  return (
    <header className='flex items-center justify-center px-8 py-4 border-b border-slate-200'>
      <div className='w-full'>
        <button 
          className='button headerCategoryItem'
          onClick={() => navigate(`/product/list?category=Men`)}
        >
          Men
        </button>
        <button 
          className='button headerCategoryItem'
          onClick={() => navigate(`/product/list?category=Women`)}
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
            <button className='button headerIconBtn' onClick={onClickCartBtn}>
              <BsHandbag />
            </button>
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