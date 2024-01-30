import React from 'react'
import MyPageNavigation from '../MyPageNavigation'

interface Props {
  children: React.ReactNode
}

const MyPageLayout = ({ children }: Props) => {

  return (
    <div className='flex '>
      <MyPageNavigation/>
      <div className='px-24 py-8 w-full'>
        {children}
      </div>
    </div>
  )
}

export default MyPageLayout