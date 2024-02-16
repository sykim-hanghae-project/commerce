import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom';

const MyOrder = lazy(() => import('@/pages/MyOrder'))
const AddProduct = lazy(() => import('@/pages/AddProduct'))
const EditProduct = lazy(() => import('@/pages/EditProduct'))
const ViewAllProducts = lazy(() => import('@/pages/ViewAllProducts'))
const ManageOrder = lazy(() => import('@/pages/ManageOrder'))
const Signin = lazy(() => import('@/pages/Signin'))
const Signup = lazy(() => import('@/pages/Signup'))
const EditInfo = lazy(() => import('@/pages/EditInfo'))
const Order = lazy(() => import('@/pages/Order'));

import Layout from '@/components/layout/Layout';
import { checkAuth } from '@/utils/checkAuth';
import { getUser } from '@/api/getUser';

// 로그인 상태
export default function PrivateRoutes(): RouteObject {
  const { token, uid, role } = checkAuth()

  const userLoader = async () => {
    const uid = window.localStorage.getItem('uid')
    if (!uid) return null
    const user = await getUser(uid)
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
    { path: '/mypage/edit-info', element: <EditInfo /> }
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
