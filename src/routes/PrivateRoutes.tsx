import { lazy } from 'react'
import { Navigate, RouteObject, redirect } from 'react-router-dom';

const MyOrder = lazy(() => import('@/pages/MyOrder'))
const AddProduct = lazy(() => import('@/pages/AddProduct'))
const EditProduct = lazy(() => import('@/pages/EditProduct'))
const ViewAllProducts = lazy(() => import('@/pages/ViewAllProducts'))
const ManageOrder = lazy(() => import('@/pages/ManageOrder'))
const Signin = lazy(() => import('@/pages/Signin'))
const Signup = lazy(() => import('@/pages/Signup'))
const Order = lazy(() => import('@/pages/Order'));
const Layout = lazy(() => import('@/components/layout/Layout'))

import { checkAuth } from '@/utils/checkAuth';

// 로그인 상태
export default function PrivateRoutes(): RouteObject {
  const { token, uid, role } = checkAuth()

  const userLoader = async () => {
    const { default: getUser } = await import('@/api/getUser')

    const uid = window.localStorage.getItem('uid')
    if (!uid) return redirect('/login')
    const user = await getUser(uid)
    if (!user) return redirect('/login')
    return user
  }

  const ConsumerRoutes: RouteObject[] = [
    { path: '/mypage', element: <Navigate to='/mypage/myorder' replace /> },
    { path: '/mypage/myorder', element: <MyOrder />, loader: userLoader },
    { path: '/order', element: <Order />, loader: userLoader }
  ]

  const SellerRoutes: RouteObject[] = [
    { path: '/mypage', element: <Navigate to='/mypage/view-allproducts' /> },
    { path: '/mypage/add-product', element: <AddProduct />, loader: userLoader },
    { path: '/mypage/edit-product', element: <EditProduct />, loader: userLoader },
    { path: '/mypage/view-allproducts', element: <ViewAllProducts />, loader: userLoader },
    { path: '/mypage/manage-order', element: <ManageOrder />, loader: userLoader},
  ] 

  const children: RouteObject[] = 
    (token != null && uid != null)  //로그인 상태
    ? [
      { path: '/login', element: <Navigate to='/' replace />  },
      { path: '/signup', element: <Navigate to='/' replace />  }, 
    ]
    : [ // 로그아웃 상태
      { path: '/mypage', element: <Navigate to='/login' replace /> },
      { path: '/login', element: <Signin /> },
      { path: '/signup', element: <Signup /> }
    ]

  return {
    element: <Layout />,
    children: [...children, ...(role? role === "seller" ? SellerRoutes : ConsumerRoutes : [])]
  }
}
