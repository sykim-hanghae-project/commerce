import { Navigate, RouteObject } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Signin from '@/pages/Signin'
import Signup from '@/pages/Signup'

// 로그인 안했을 때
export default function PublicRoutes(): RouteObject {
  return {
    element: <Layout />,
    children: [
      { path: '/cart', element: <Navigate to='/login' replace /> },
      { path: '/mypage', element: <Navigate to='/login' replace /> },
      { path: '/login', element: <Signin /> },
      { path: '/signup', element: <Signup /> }
    ]
  }
}
