import React from 'react'
import MyPageNavigation from '../MyPageNavigation'
import { useLoaderData } from 'react-router-dom'
import { User } from '@/types/user'

interface Props {
  children: React.ReactNode
}

const MyPageLayout = ({ children }: Props) => {
  const user = useLoaderData() as User

  return (
    <div className='flex '>
      <MyPageNavigation isSeller={user.isSeller} userNickname={user.nickname} />
      <div className='px-24 py-8 w-full'>
        {children}
      </div>
    </div>
  )
}

export default MyPageLayout