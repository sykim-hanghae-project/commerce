import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

type Item = {
  name: string
  path?: string
  onClick?: () => void
}

type Group = {
  title: string
  items: Item[]
}

interface MyPageNavigationProps {
  isSeller: boolean,
  userNickname: string
}

const MyPageNavigation = React.memo(({ isSeller, userNickname }: MyPageNavigationProps) => { 
  const [curPath, ] = useState<string>(useLocation().pathname)

  const navigate = useNavigate()

  const onClickSignOut = async () => {
    const { signOut } = await import("firebase/auth")
    const { auth } = await import('@/helpers/firebase')

    signOut(auth)
    .then(() => {
      window.alert('로그아웃 완료')

      window.localStorage.removeItem('user-token')
      window.localStorage.removeItem('uid')
      window.localStorage.removeItem('user-role')

      window.localStorage.removeItem('cart')

      window.location.assign('/')
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

  return (
    <div className='p-8'>
      <div className='text-3xl'>{userNickname}</div>
      <ul>
        {(isSeller ? sellerItems : consumerItems).concat(commonItems).map((group, idx) => (
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
})

export default MyPageNavigation