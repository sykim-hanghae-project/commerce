import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { useUserState } from '@/context/UserContext'
import { auth } from '@/helpers/firebase'

type Item = {
  name: string
  path?: string
  onClick?: () => void
}

type Group = {
  title: string
  items: Item[]
}

const MyPageNavigation = () => {
  const { isLoggedIn, loggedUser } = useUserState()
  const [name, setName] = useState<string>()
  const [navContent, setNavContent] = useState<Group[]>()
  const [curPath, ] = useState<string>(useLocation().pathname)

  const navigate = useNavigate()

  const onClickSignOut = () => {
    signOut(auth)
    .then(() => {
      window.alert('로그아웃 완료.')

      window.localStorage.removeItem('user-token')
      window.localStorage.removeItem('uid')
      window.localStorage.removeItem('user-role')

      navigate('/')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const sellerItems: Group[] = [
    {
      title: '상품',
      items: [
        { name: '전체 상품 조회', path: '/mypage/view-allproducts' },
        { name: '상품 등록', path: '/mypage/add-product' },
      ]
    },
    {
      title: '판매',
      items: [
        { name: '판매 기록 관리', path: '/mypage/manage-order' },
      ]
    }
  ]
  const consumerItems: Group[] = [
    {
      title: '나의 활동',
      items: [
        { name: '주문 내역', path: '/mypage/myorder' },
      ]
    },
  ]
  const commonItems: Group[] = [
    {
      title: '환경 설정',
      items: [
        { name: '회원정보수정', path: '/mypage/edit-info' },
        { name: '로그아웃', onClick: onClickSignOut },
      ]
    },
  ]

  useEffect(() => {
    if (isLoggedIn) {
      setName(loggedUser?.nickname)
      
      if (loggedUser?.isSeller) setNavContent([...sellerItems, ...commonItems])
      else setNavContent([...consumerItems, ...commonItems])
    }
  }, [isLoggedIn, loggedUser])


  return isLoggedIn && (
    <div className='p-8 pr-24'>
      <div className='text-3xl'>{name}</div>
      <ul>
        {navContent?.map((group, idx) => (
          <li className='myPageNavGroup' key={`mpn_group_${idx}`}>
            <div className='myPageNavGroupTitle'>{group.title}</div>
            <ul>
              {group.items.map((item, idx) => (
                <li className={`myPageNavItem ${curPath === item.path && 'font-bold'}`} key={`mpn_item_${idx}`}>
                  <button onClick={item.path ? () => navigate(item.path!) : item.onClick}>{item.name}</button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MyPageNavigation