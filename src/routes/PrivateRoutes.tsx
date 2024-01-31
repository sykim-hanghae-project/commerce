import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom';

const Cart = lazy(() => import('@/pages/Cart'))
const MyOrder = lazy(() => import('@/pages/MyOrder'))
const AddProduct = lazy(() => import('@/pages/AddProduct'))
const ViewAllProducts = lazy(() => import('@/pages/ViewAllProducts'))
const ManageOrder = lazy(() => import('@/pages/ManageOrder'))
const Signin = lazy(() => import('@/pages/Signin'))
const Signup = lazy(() => import('@/pages/Signup'))
const EditInfo = lazy(() => import('@/pages/EditInfo'))

import Layout from '@/components/layout/Layout';
import { checkAuth } from '@/utils/checkAuth';
import { getUser } from '@/api/getUser';

// 로그인 상태
export default function PrivateRoutes(): RouteObject {
  const { token, uid, role } = checkAuth()

  const loader = async () => {
    const uid = window.localStorage.getItem('uid')
    const user = await getUser(uid!)
    return user
  }

  const CustomerRoutes: RouteObject[] = [
    { path: '/mypage', element: <Navigate to='/mypage/myorder' replace /> },
    { path: '/mypage/myorder', element: <MyOrder /> }
  ]

  const SellerRoutes: RouteObject[] = [
    { path: '/mypage', element: <Navigate to='/mypage/view-allproducts' /> },
    { path: '/mypage/add-product', element: <AddProduct type='create' />, loader },
    { path: '/mypage/edit-product', element: <AddProduct type='edit' />, loader },
    { path: '/mypage/view-allproducts', element: <ViewAllProducts />, loader },
    { path: '/mypage/manage-order', element: <ManageOrder />},
    { path: '/mypage/edit-info', element: <EditInfo /> }
  ] 

  const children: RouteObject[] = 
    (token != null && uid != null)  //로그인 상태
    ? [
      { path: '/cart', element: <Cart /> },
      { path: '/login', element: <Navigate to='/' replace />  },
      { path: '/signup', element: <Navigate to='/' replace />  }, 
    ]
    : [ // 로그아웃 상태
      { path: '/cart', element: <Navigate to='/login' replace /> },
      { path: '/mypage', element: <Navigate to='/login' replace /> },
      { path: '/login', element: <Signin /> },
      { path: '/signup', element: <Signup /> }
    ]

  return {
    element: <Layout />,
    children: children.concat(role === 'seller' ? SellerRoutes : CustomerRoutes)
  }
}
