import { RouteObject } from 'react-router-dom'
import { lazy } from 'react'
import getProduct from '@/api/getProduct'

const Layout = lazy(() => import('@/components/layout/Layout')) 
const Home = lazy(() => import('@/pages/Home'))
const ProductDetail = lazy(() => import('@/pages/ProductDetail'))
const Search = lazy(() => import('@/pages/Search'))
const ListProductByCategory = lazy(() => import('@/pages/ListProductByCategory'))

// 로그인, 비로그인 상태 
export default function CommonRoutes(): RouteObject {

  return {
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { 
        path: '/product/:productId', 
        element: <ProductDetail />, 
        loader: ({ params }) => {
          const res = getProduct(params.productId!)
          res.then((product) => {
            if (!product) throw new Response("Not Found", { status: 404 })
          })    
          return res      
        }
      },
      { path: '/product/search', element: <Search /> },
      { path: '/product/list', element: <ListProductByCategory /> },
    ]
  }
}
