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

// 로그인 상태
export default function PrivateRoutes(): RouteObject {
  const { token, uid, role } = checkAuth()

  const CustomerRoutes: RouteObject = {
    path: '/mypage',
    element: <Navigate to='/mypage/myorder' replace />,
    children: [
      { path: '/mypage/myorder', element: <MyOrder /> }
    ]
  }

  const SellerRoutes: RouteObject = {
    path: '/mypage',
    element: <Navigate to='/mypage/allproducts' replace />,
    children: [
      { path: '/mypage/add-product', element: <AddProduct /> },
      { path: '/mypage/allproducts', element: <ViewAllProducts /> },
      { path: '/mypage/manage-order', element: <ManageOrder />},
    ]
  }

  const children: RouteObject[] = 
    (token != null && uid != null)  //로그인 상태
    ? [
      { path: '/cart', element: <Cart /> },
      { path: '/login', element: <Navigate to='/' replace />  },
      { path: '/signup', element: <Navigate to='/' replace />  }, 
      role === 'seller' ? SellerRoutes : CustomerRoutes
    ]
    : [
      { path: '/cart', element: <Navigate to='/login' replace /> },
      { path: '/mypage', element: <Navigate to='/login' replace /> },
      { path: '/login', element: <Signin /> },
      { path: '/signup', element: <Signup /> }
    ]

  return {
    element: <Layout />,
    children
  }
}
