import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Suspense } from 'react'
import './App.css'
import PrivateRoutes from './routes/PrivateRoutes'
import CommonRoutes from './routes/CommonRoutes'
import Loading from './components/Loading'
import { CartContextProvider } from './context/CartContext'

function App() {
  
  const router = createBrowserRouter([
    PrivateRoutes(), //로그인 유무 관계O
    CommonRoutes() //로그인 유무 관계X
  ], {
    basename: '/commerce'
  })

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <CartContextProvider>
        <Suspense fallback={<div className='absolute top-0 left-0 h-full w-full flex justify-center items-center'><Loading /></div>}>
          <RouterProvider router={router} />
        </Suspense>
      </CartContextProvider>
    </QueryClientProvider>
  )
}

export default App
