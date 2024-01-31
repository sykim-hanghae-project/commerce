import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Suspense } from 'react'
import './App.css'
import PrivateRoutes from './routes/PrivateRoutes'
import CommonRoutes from './routes/CommonRoutes'
import { UserContextProvider } from './context/UserContext'
import Loading from './components/Loading'

function App() {
  
  const router = createBrowserRouter([
    PrivateRoutes(), //로그인 유무 관계O
    CommonRoutes() //로그인 유무 관계X
  ])

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      </UserContextProvider>
    </QueryClientProvider>
  )
}

export default App
