import { RouteObject } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import Product from '@/pages/Product'
import Search from '@/pages/Search'

// 로그인, 비로그인 상태 
export default function CommonRoutes(): RouteObject {
  return {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/product/:productId', element: <Product /> },
      { path: '/search', element: <Search /> },
    ]
  }
}
