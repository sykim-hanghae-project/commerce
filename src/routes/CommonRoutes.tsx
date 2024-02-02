import { RouteObject } from 'react-router-dom'
import { lazy } from 'react'
import getProductById from '@/api/getProductById'

const Layout = lazy(() => import('@/components/layout/Layout')) 
const Home = lazy(() => import('@/pages/Home'))
const ProductDetail = lazy(() => import('@/pages/ProductDetail'))
const ListProduct = lazy(() => import('@/pages/ListProduct'))

// 로그인, 비로그인 상태 
export default function CommonRoutes(): RouteObject {

  return {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { 
        path: '/product/:productId', 
        element: <ProductDetail />, 
        loader: ({ params }) => {
          const res = getProductById(Number.parseInt(params.productId!))
          res.then((product) => {
            if (!product) throw new Response("Not Found", { status: 404 })
          })    
          return res      
        }
      },
      { path: '/product/search', element: <ListProduct type='search' /> },
      { path: '/product/list', element: <ListProduct type='category' /> },
    ]
  }
}
