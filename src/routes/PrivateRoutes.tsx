import { Navigate, RouteObject } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Cart from '@/pages/Cart';
import MyOrder from '@/pages/MyOrder';
import AddProduct from '@/pages/AddProduct';
import ViewAllProducts from '@/pages/ViewAllProducts';
import ManageOrder from '@/pages/ManageOrder';
import Signin from '@/pages/Signin';
import Signup from '@/pages/Signup';
import { checkAuth } from '@/utils/checkAuth';
import EditInfo from '@/pages/EditInfo';

// 로그인 상태
export default function PrivateRoutes(): RouteObject {
  const { token, uid, role } = checkAuth()

  const CustomerRoutes: RouteObject[] = [
    { path: '/mypage', element: <Navigate to='/mypage/myorder' replace /> },
    { path: '/mypage/myorder', element: <MyOrder /> }
  ]

  const SellerRoutes: RouteObject[] = [
    { path: '/mypage', element: <Navigate to='/mypage/view-allproducts' /> },
    { path: '/mypage/add-product', element: <AddProduct type='create' /> },
    { path: '/mypage/edit-product', element: <AddProduct type='edit' /> },
    { path: '/mypage/view-allproducts', element: <ViewAllProducts /> },
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
    : [
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
