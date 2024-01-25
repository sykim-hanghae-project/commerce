import { Navigate, RouteObject } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Cart from '@/pages/Cart';
import MyOrder from '@/pages/MyOrder';
import AddProduct from '@/pages/AddProduct';
import ViewAllProducts from '@/pages/ViewAllProducts';
import ManageOrder from '@/pages/ManageOrder';

// 로그인 상태
export default function PrivateRoutes(isSeller: boolean): RouteObject {
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

  const children: RouteObject[] = [
    { path: '/cart', element: <Cart /> },
    { path: '/login', element: <Navigate to='/' replace />  },
    { path: '/signup', element: <Navigate to='/' replace />  }, 
    isSeller ? SellerRoutes : CustomerRoutes
  ]

  return {
    element: <Layout />,
    children
  }
}
