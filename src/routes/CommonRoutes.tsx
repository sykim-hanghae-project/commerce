import { RouteObject } from 'react-router-dom'
import { lazy } from 'react'

const Layout = lazy(() => import('@/components/layout/Layout')) 
const Home = lazy(() => import('@/pages/Home'))
const Product = lazy(() => import('@/pages/Product'))
const Search = lazy(() => import('@/pages/Search'))

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
